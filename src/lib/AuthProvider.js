/* globals localStorage */
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from "react-admin";
import firebase from "firebase";

const baseConfig = {
  userProfilePath: "/users/",
  userAdminProp: "isAdmin",
  localStorageTokenName: "RAFirebaseClientToken",
  handleAuthStateChange: async (auth, config) => {
    if (auth) {
      try {
        const firebaseToken = auth.user.getIdToken();
        let user = { auth, firebaseToken };
        localStorage.setItem(config.localStorageTokenName, firebaseToken);
        return user;
      } catch (error) {
        console.log({ error });
        firebase.auth().signOut();
        localStorage.removeItem(config.localStorageTokenName);
        throw new Error("sign_in_error");
      }
    } else {
      localStorage.removeItem(config.localStorageTokenName);
      throw new Error("sign_in_error");
    }
  }
};

export default (config = {}) => {
  config = { ...baseConfig, ...config };

  const firebaseLoaded = () =>
    new Promise(resolve => {
      firebase.auth().onAuthStateChanged(resolve);
    });

  return async (type, params) => {
    if (type === AUTH_LOGOUT) {
      config.handleAuthStateChange(null, config).catch(() => {});
      return firebase.auth().signOut();
    }

    if (firebase.auth().currentUser) {
      await firebase.auth().currentUser.reload();
    }

    if (type === AUTH_CHECK) {
      await firebaseLoaded();

      if (!firebase.auth().currentUser) {
        throw new Error("sign_in_error");
      }

      return true;
    }

    if (type === AUTH_LOGIN) {
      const { username, password, alreadySignedIn } = params;
      let auth = firebase.auth().currentUser;

      if (!auth || !alreadySignedIn) {
        auth = await firebase
          .auth()
          .signInWithEmailAndPassword(username, password);
      }
    
      try {
        const resp = await config.handleAuthStateChange(auth, config);

        return resp;
      } catch (err) {
        console.log({ err });
      }
    }

    return false;
  };
};

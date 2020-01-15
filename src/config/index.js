export const firebaseConfig = {
  apiKey: "AIzaSyCpaRisvrZrtyjQmQXdHj5hsRugDeYytUo",
  authDomain: "spmi-app.herokuapp.com",
  databaseURL: "https://spmi-app.firebaseio.com",
  projectId: "SPMI",
  storageBucket: "gs://spmi-app.appspot.com/",
  messagingSenderId: "588702134968"
};

export const trackedResources = [
  { name: "contents", isPublic: true, uploadFields: ["logo", "pdf"] }
];

export const authConfig = {
  userProfilePath: "/users/",
  userAdminProp: "isAdmin"
};

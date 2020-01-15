export const firebaseConfig = {
  apiKey: "AIzaSyC1_zdeCzB6ISOB7t7efPbK_SOXn-vVMz4",
  authDomain: "react-admin-firebase-client.firebaseapp.com",
  databaseURL: "https://spmi-admin.firebaseio.com",
  projectId: "spmi-admin",
  storageBucket: "gs://spmi-admin.appspot.com/",
  messagingSenderId: "627393424606"
};

export const trackedResources = [
  { name: "contents", isPublic: true, uploadFields: ["logo", "pdf"] }
];

export const authConfig = {
  userProfilePath: "/users/",
  userAdminProp: "isAdmin"
};

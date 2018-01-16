import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDDtq5vasYoQyeiuwWhfwtMeVH7AG5Yp6E",
  authDomain: "houseup-b7cc7.firebaseapp.com",
  databaseURL: "https://houseup-b7cc7.firebaseio.com",
  projectId: "houseup-b7cc7",
  storageBucket: "",
  messagingSenderId: "480706917166",
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

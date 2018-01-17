import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyDDtq5vasYoQyeiuwWhfwtMeVH7AG5Yp6E",
    authDomain: "houseup-b7cc7.firebaseapp.com",
    databaseURL: "https://houseup-b7cc7.firebaseio.com",
    projectId: "houseup-b7cc7",
    storageBucket: "",
    messagingSenderId: "480706917166",
};

const devConfig = {
  /*apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  databaseURL: YOUR_DATABASE_URL,
  projectId: YOUR_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,*/
    apiKey: "AIzaSyDDtq5vasYoQyeiuwWhfwtMeVH7AG5Yp6E",
    authDomain: "houseup-b7cc7.firebaseapp.com",
    databaseURL: "https://houseup-b7cc7.firebaseio.com",
    projectId: "houseup-b7cc7",
    storageBucket: "",
    messagingSenderId: "480706917166",
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};

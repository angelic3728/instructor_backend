import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAi8-rmgiyliJLIv_0vcPkIr0wZTYriYDY",
    authDomain: "lunnoa-1dd1a.firebaseapp.com",
    databaseURL: "https://lunnoa-1dd1a.firebaseio.com",
    projectId: "lunnoa-1dd1a",
    storageBucket: "lunnoa-1dd1a.appspot.com",
    messagingSenderId: "53189951969",
    appId: "1:53189951969:web:60facafa762742026a12a0",
    measurementId: "G-7GR95RKGEC"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;

import firebase from "firebase/app"

var firebaseConfig = {
    apiKey: "AIzaSyCCvnhDXkKbqLDqc7nchTvDtU12BIa1MbI",
    authDomain: "mareas-test.firebaseapp.com",
    projectId: "mareas-test",
    storageBucket: "mareas-test.appspot.com",
    messagingSenderId: "819837870054",
    appId: "1:819837870054:web:4725252376b44c0804c027"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
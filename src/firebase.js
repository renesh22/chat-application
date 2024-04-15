import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDfr8JXWAW2u4_ClveJJVo19NCl5z_JDYw",
    authDomain: "unichat-304b9.firebaseapp.com",
    projectId: "unichat-304b9",
    storageBucket: "unichat-304b9.appspot.com",
    messagingSenderId: "124991920906",
    appId: "1:124991920906:web:8800e97253068fd04b78f3"
}).auth();
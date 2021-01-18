import firebase from 'firebase';


const config = {    
    apiKey: "AIzaSyB2vilXu7xdzxUNnpSR2N45StUwd-xWEtM",
    authDomain: "chat-app-9198c.firebaseapp.com",
    databaseURL: "https://chat-app-9198c-default-rtdb.firebaseio.com/"
};

firebase.initializedApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
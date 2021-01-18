import { auth } from '../services/firebase';

export function signup(email, password) {
    return auth().createUserWithEmailAndPassword(email, password);
}

export function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password);
}

export function signInWithGoggle(){
    const provider = new auth.GoggleAuthProvider();
    return auth().signInWithPopup(provider);
}

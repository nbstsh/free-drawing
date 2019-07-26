import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: 'AIzaSyDeVrI4qEw6LJyJpz9KyV6Us0946KFp3Vc',
	authDomain: 'real-time-drawing.firebaseapp.com',
	databaseURL: 'https://real-time-drawing.firebaseio.com',
	projectId: 'real-time-drawing',
	storageBucket: 'real-time-drawing.appspot.com'
});

export const auth = firebase.auth();
export const db = firebase.firestore();

auth.onAuthStateChanged(user => {
	console.log(user);
});

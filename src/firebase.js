import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8HsLFodA3L-0DKoZ6Ohyn7HU9kkUHm4g',
  authDomain: 'clone-69313.firebaseapp.com',
  projectId: 'clone-69313',
  storageBucket: 'clone-69313.appspot.com',
  messagingSenderId: '595022138304',
  appId: '1:595022138304:web:afd3cbffabcfc5194c9625',
  measurementId: 'G-8C9XKXSTJ5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

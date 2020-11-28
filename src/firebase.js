import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjh52hDjsu9lM79-6xFrwcBK0Y3qNG7F8",
    authDomain: "arcade-map-8ae23.firebaseapp.com",
    databaseURL: "https://arcade-map-8ae23.firebaseio.com",
    projectId: "arcade-map-8ae23",
    storageBucket: "arcade-map-8ae23.appspot.com",
    messagingSenderId: "968643604152",
    appId: "1:968643604152:web:64d340670cdeccc3410e4d",
    measurementId: "G-Y26EDC60W3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjh52hDjsu9lM79-AIzaSyCkOnOULpNrBTnHx4l6HuVR3jGyorUh2hw",
    authDomain: "stefans-arcade.firebaseapp.com",
    databaseURL: "https://stefans-arcade.uswest2.firebaseio.com",
    projectId: "stefans-arcade",
    storageBucket: "stefans-arcade.appspot.com",
    messagingSenderId: "451170804398",
    appId: "1:451170804398:web:9d2d5727af056844ee833f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
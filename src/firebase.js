import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmQNPSK-NId4D1iWvX_T2jFQxRZNjeQrA",
  authDomain: "clone-393206.firebaseapp.com",
  projectId: "youtube-clone-393206",
  storageBucket: "youtube-clone-393206.appspot.com",
  messagingSenderId: "827251194928",
  appId: "1:827251194928:web:117ae39333cab13944c1f5",
  measurementId: "G-KDTTHD9E4L",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyBDWgxZiMsuv3y_aQhhMUSHVqrxjZPdWYA",
    authDomain: "netflix-clone-59b26.firebaseapp.com",
    projectId: "netflix-clone-59b26",
    storageBucket: "netflix-clone-59b26.appspot.com",
    messagingSenderId: "987806336749",
    appId: "1:987806336749:web:190681db5635020f2a2ee4",
    measurementId: "G-MNQ3GL00WZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth } ;
  export default db ;

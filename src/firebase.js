 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyB52SThSyscWG09QM2UecQfSr98YpQiM-w",
    authDomain: "to-listen-list.firebaseapp.com",
    databaseURL: "https://to-listen-list-default-rtdb.firebaseio.com",
    projectId: "to-listen-list",
    storageBucket: "to-listen-list.appspot.com",
    messagingSenderId: "829841968429",
    appId: "1:829841968429:web:7569f5423682af5bab97a4"
 };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);
 // Export firestore database
 // It will be imported into your react app whenever it is needed
 export const db = getFirestore(app);
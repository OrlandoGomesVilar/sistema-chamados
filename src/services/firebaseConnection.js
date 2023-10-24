import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD4bnB7YZBk8JRffymXPgK4RzSaf3Yvr8w",
    authDomain: "tickets-5c214.firebaseapp.com",
    projectId: "tickets-5c214",
    storageBucket: "tickets-5c214.appspot.com",
    messagingSenderId: "663504196102",
    appId: "1:663504196102:web:df8c9e8169562930b6a987",
    measurementId: "G-FBE7W5CCFY"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth(firebaseApp)
  const db = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)

  export { auth, db, storage };
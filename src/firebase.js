import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBMjsfScqL-4BHylRHG1lu9Q5Itna0wD6E',
  authDomain: 'petcare-18956.firebaseapp.com',
  databaseURL: 'petcare-18956.firebaseio.com',
  projectId: 'petcare-18956',
  storageBucket: 'petcare-18956.appspot.com',
  messagingSenderId: '377499975341',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }

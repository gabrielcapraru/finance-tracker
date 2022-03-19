import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBHzP13i78JUX9QkA5_RxRNg1yXhYGZsYc',
  authDomain: 'finance-tracker-30e56.firebaseapp.com',
  projectId: 'finance-tracker-30e56',
  storageBucket: 'finance-tracker-30e56.appspot.com',
  messagingSenderId: '361882813999',
  appId: '1:361882813999:web:2c6e3fe7b5114585c528da',
}

//init firebase
initializeApp(firebaseConfig)

//init auth
const auth = getAuth()

//init firestore
const db = getFirestore()

export { db, auth }

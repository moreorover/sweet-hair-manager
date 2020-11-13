import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCuU7iX7uyDL_VnWjSh0aMbs26D56szT54',
  authDomain: 'manager-7ce6b.firebaseapp.com',
  databaseURL: 'https://manager-7ce6b.firebaseio.com',
  projectId: 'manager-7ce6b',
  storageBucket: 'manager-7ce6b.appspot.com',
  messagingSenderId: '1027486200522',
  appId: '1:1027486200522:web:8ca4f1a642374f94837a33',
  measurementId: 'G-RGM7EQMEHV',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

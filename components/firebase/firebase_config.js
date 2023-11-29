import { initializeApp } from "firebase/app"
import { initializeAuth} from "firebase/auth"
import { getReactNativePersistence } from "@firebase/auth"
import { getFirestore } from "firebase/firestore"

import {getStorage} from "firebase/storage"

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmbB9AN-Pmzz4rpFUcG45g-ckuX7hC8mM",
    authDomain: "avaliai-56526.firebaseapp.com",
    projectId: "avaliai-56526",
    storageBucket: "avaliai-56526.appspot.com",
    messagingSenderId: "321760134864",
    appId: "1:321760134864:web:cacc88a2c33a6ec997c0d5"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

//firestore
const firestoreDb = getFirestore(app)

//exportando
export {app,firestoreDb,storage}

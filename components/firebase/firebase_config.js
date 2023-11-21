import {initializeApp} from "firebase/app";
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage/lib/typescript/types";
import {initializeAuth, getReactNativePersistence} from "firebase/auth"

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
const auth = initializeAuth (
    app,
    {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    }
)

export {auth}
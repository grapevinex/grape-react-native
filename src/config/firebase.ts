// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsJagM40xRM_IZmxUxMdpbvhPsBy4fyPc",
  authDomain: "gaba-4bbc0.firebaseapp.com",
  projectId: "gaba-4bbc0",
  storageBucket: "gaba-4bbc0.appspot.com",
  messagingSenderId: "936403063902",
  appId: "1:936403063902:web:a7f660a4edb2aa21b310cf",
  measurementId: "G-ZCPCN85NNB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

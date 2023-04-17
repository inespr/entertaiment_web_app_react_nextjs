import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxmG6ZKQIjcdJKSGW3Xx_TpOH5HsjMXdo",
  authDomain: "entertaiment-web-app-d8705.firebaseapp.com",
  projectId: "entertaiment-web-app-d8705",
  storageBucket: "entertaiment-web-app-d8705.appspot.com",
  messagingSenderId: "545527913001",
  appId: "1:545527913001:web:08fe4565e9bfe5649e9a38",
  measurementId: "G-YREVY60GT7",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAjBAx88XyuxqtR7sWS2qbtXHT3oBPKgKE",
  authDomain: "chat-application-2180a.firebaseapp.com",
  databaseURL: "https://chat-application-2180a-default-rtdb.firebaseio.com",
  projectId: "chat-application-2180a",
  storageBucket: "chat-application-2180a.appspot.com",
  messagingSenderId: "701350939554",
  appId: "1:701350939554:web:bd92ba8407d1daf2d540fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

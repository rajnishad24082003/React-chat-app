import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import React from "react";
import {
  getMessaging,
  isSupported,
  getToken,
  onMessage,
} from "firebase/messaging";
import { Notification as Toast, Placeholder } from "rsuite";
import { getFunctions } from "firebase/functions";
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
export const storage = getStorage(app);
export const functions = getFunctions(app, "europe-west3");
export const messaging = isSupported() ? getMessaging(app) : null;

const Message = React.forwardRef(({ type, ...rest }, ref) => {
  return (
    <Toast ref={ref} {...rest} type={type} header={type}>
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Toast>
  );
});

if (messaging) {
  getToken(messaging, {
    vapidKey:
      "BEqJHj7jnrDSmzQatPrmWXhbMuE57qtatrajXkfUO9LCP5NKo8neoF8HcAbfkRAmjqaEzOeZ9UjaWR73vIBMRQA",
  });
  onMessage(messaging, ({ notification }) => {
    let { title, discription } = notification;
    <Message type="info" title={title} description={discription} />;
  });
}

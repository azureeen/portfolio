import { getApps, initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

export function initializeFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyD_Q0U9HDJSGCJ5XiWQXu5kH7-JkISZqUk",
    authDomain: "azureeen.firebaseapp.com",
    projectId: "azureeen",
    storageBucket: "azureeen.appspot.com",
    messagingSenderId: "217491546660",
    appId: "1:217491546660:web:60168e02920f229284eeb1",
    measurementId: "G-XCKJGRJD2H"
  };

  let app;

  if (!getApps().length) {
    app = initializeApp(firebaseConfig); // Assign the initialized app to the app variable
  } else {
    app = getApps()[0]; // If an app is already initialized, use the first one.
  }
  //const analytics = getAnalytics(app);
  return getFirestore(app);
}

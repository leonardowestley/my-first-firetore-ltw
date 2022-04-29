import admin from "firebase-admin"; //imports firebase library of tools

import serviceAccount from './credentials';//import our creds 2 connect 2 firebase

admin.initializeApp({ //connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our creds
});

// Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates shortcut to access the Firestore database

export const restaurantsCol = db.collection('restaurtants');
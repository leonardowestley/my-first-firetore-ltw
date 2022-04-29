// Created restaurant 
// Created restaurant

const admin = require("firebase-admin"); //imports firebase library of tools

const serviceAccount = require('./credentials');//import our creds 2 connect 2 firebase

admin.initializeApp({ //connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our creds
});

// Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates shortcut to access the Firestore database

// delete 
restaurantsCol.doc('id').delete()
.then(res => console.log('success deleting id'))
.catch(err => console.error('error deleting id', err))
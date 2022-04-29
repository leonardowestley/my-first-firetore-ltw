const admin = require("firebase-admin"); //imports firebase library of tools

const serviceAccount = require('./credentials.json');//import our creds 2 connect 2 firebase

admin.initializeApp({ //connects to our firebase project
  credential: admin.credential.cert(serviceAccount)// creating a certificate from our creds
});

// Now we are connected to OUR Firebase project & related services

const db = admin.firestore(); // creates shortcut to access the Firestore database

const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy Suite',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 6787-2903',
} // creating an object -- in this case a specific restaurant we want to add to our

// db.collection('restaurants').add(restaurant) // adding the restaurant to our restaurants collection
// .then(doc => console.log('Created restaurant', doc.id))// handling resolve
// .catch(err => console.error(err)) // handling reject


const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant() {
   try {
    const doc = await db.collection('restaurants').add(restaurant2) // add restaurant to collection
    console.log('Created restaurant', doc.id)// handle resolve
 } catch(err) { // handle reject

 }
}
addRestaurant(restaurant2)


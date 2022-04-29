const admin = require("firebase-admin");

const serviceAccount = require('./credentials.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy Suite',
    cusisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 6787-2903',
}

// db.collection('restaurants').add(restaurant)
// .then(doc => console.log('Created restaurant', doc.id))
// .catch(err => console.error(err))


const restaurant2 = {
    name: 'Bolay',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant() {
   try {
    const doc = await db.collection('restaurants').add(restaurant2)
    console.log('Created restaurant', doc.id)
 } catch(err) {

 }
}
addRestaurant(restaurant2)
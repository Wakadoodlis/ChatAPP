 import firebase from 'firebase'
 import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDKnxg2Z9E3vtOvQzNjTNtUYJld-uNgOX8",
   authDomain: "real-time-chat-app-1fb58.firebaseapp.com",
   databaseURL: "https://real-time-chat-app-1fb58.firebaseio.com",
   projectId: "real-time-chat-app-1fb58",
   storageBucket: "real-time-chat-app-1fb58.appspot.com",
   messagingSenderId: "751426256229"
 };
 const firebaseApp = firebase.initializeApp(config);
 firebaseApp.firestore().settings({
   timestampsInSnapshots: true
 })
 //  const firestore = firebase.firestore();
 //  const settings = { /* your settings... */
 //    timestampsInSnapshots: true
 //  };
 //  firestore.settings(settings);

 export default firebaseApp.firestore()

const functions = require("firebase-functions");
const fbAdmin = require('firebase-admin')
const { initializeApp } = require('firebase/app')
const { getFirestore, deleteDoc, getDoc, doc, collectionGroup, collection, getDocs, DocumentSnapshot, query, where, setDoc } = require("firebase/firestore");
const { getAuth, signInWithPopup, GoogleAuthProvider, signInAnonymously, linkWithPopup, onAuthStateChanged } = require("firebase/auth");
const { getDatabase, ref, onValue, set, get, child , push, update, remove} = require("firebase/database")
const express = require('express')

const app = express()

const firebaseConfig = {
    apiKey: "AIzaSyCf-BwRrw9W3ofWI48rm64xYX-34Fd_cm4",
    authDomain: "kyledickey-me.firebaseapp.com",
    databaseURL: "https://kyledickey-me-default-rtdb.firebaseio.com",
    projectId: "kyledickey-me",
    storageBucket: "kyledickey-me.appspot.com",
    messagingSenderId: "273447468879",
    appId: "1:273447468879:web:621527162019bad7c98f3a",
    measurementId: "G-45TEXHWB3B"
};

const fApp = initializeApp(firebaseConfig)

const db = getFirestore(fApp);
const rdb = getDatabase(fApp);

// 1000 * 60 * 60 * 24

function clearDBs() {
    const rRef = ref(rdb, `games/`); 
    remove(rRef).then((snapshot) => {
        set(ref(rdb, 'games/placeholder'), {
            data: 'placeholder'
        }). then(() => {
            //
        }). then(() => {
            dbClear()
        }). then(() => {
            console.log('Cleared rDB and DB')
        })
    })
}
var dayInMilliseconds = 1000 * 60 * 60 * 24;
setInterval(function() {
    
},dayInMilliseconds );

const dbClear = async function() {
    const q = query(collection(db, 'games'))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
        // doc.data() is never undefined for query doc snapshots
        const docId = docs.id
       
        
        return deleteDoc(doc(db, 'games', `${docId}`)). then(() => {
            console.log(`Deleted: ${docId}`)
    }). then(() => {
        setDoc(doc(db, 'games', 'placeholder'), {
            data: 'placeholder'
        })
    }). then(() => {
        console.log('Set Placeholder')
    })
    });      
}




// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.scheduledFunction = functions.pubsub.schedule('every 24 hours').onRun(clearDBs())
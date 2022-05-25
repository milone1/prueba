import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, deleteDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCEFgE5NeWLhcvEsUFBrmIb7j7Hyf6_nMs",
  authDomain: "crud-movies-2c882.firebaseapp.com",
  projectId: "crud-movies-2c882",
  storageBucket: "crud-movies-2c882.appspot.com",
  messagingSenderId: "1014217496381",
  appId: "1:1014217496381:web:d4925facaa878457f4d754"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getMovies = async () => {
    const collectionMovies = collection(db,"movies");
    const documentMovies = await getDocs(collectionMovies);
    const movies = documentMovies.docs.map((doc) => doc.data());
    return movies;
}


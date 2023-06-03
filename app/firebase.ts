import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK1nKQekutTgGUw4D6JNQlzP71z0XXgO4",
  authDomain: "wedding-public.firebaseapp.com",
  projectId: "wedding-public",
  storageBucket: "wedding-public.appspot.com",
  messagingSenderId: "1089501681156",
  appId: "1:1089501681156:web:5f672b33c24803f8ed0751",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null,
  waktuKehadiran: string | null
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
      waktuKehadiran: waktuKehadiran,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };

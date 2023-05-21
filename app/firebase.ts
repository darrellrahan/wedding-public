import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZhmYstrWSqL_TJbqtvo8h3nf94EWCdB8",
  authDomain: "wedding-akbar-retha.firebaseapp.com",
  projectId: "wedding-akbar-retha",
  storageBucket: "wedding-akbar-retha.appspot.com",
  messagingSenderId: "1098766556002",
  appId: "1:1098766556002:web:85a7339dcbee8440282a3b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };

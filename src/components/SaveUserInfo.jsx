import firebase from "firebase/app";
import "firebase/firestore";

export function SaveUserInfo(name, surname, email) {
  if (!name || !surname || !email) {
    throw new Error("Name, surname, and email are required");
  }

  const db = firebase.firestore();

  return db
    .collection("users")
    .add({ name, surname, email })
    .then((docRef) => console.log("Document written with ID: ", docRef.id))
    .catch((error) => console.error("Error adding document: ", error));
}

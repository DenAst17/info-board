import { db } from "@/config/firebase";
import type { Post } from "@/entities/Post";
import type { User } from "@/entities/User";
import type { CollectionReference, QueryConstraint } from "@firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export abstract class BaseDatabase {
  protected collection: CollectionReference;

  constructor(collectionName: string) {
    this.collection = collection(db, collectionName);
  }
  getCollection() {
    return this.collection;
  }
  async getAll() {
    console.log("AllDocs earned");
    return getDocs(this.collection);
  }
  async getByID(id: string) {
    const docRef = doc(this.collection, id);
    const docSnap = await getDoc(docRef);
    console.log("1 Document earned:", docSnap.data());
    return docSnap.data();
  }
  async create(document: User|Post) {
    const docRef = await addDoc(this.collection, document.docObject);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  }
  async update(document: User|Post, id: string) {
    await setDoc(doc(this.collection, id), document.docObject);
    console.log("Document updated with ID: ", id);
  }
  async remove(id: string) {
    deleteDoc(doc(this.collection, id));
    console.log("Document deleted with ID: ", id);
  }
  async search(...queryConstraints: QueryConstraint[]) {
    const docs = getDocs(query(this.collection, ...queryConstraints));
    //console.log("Search completed");
    return docs;
  }
}

import { db } from "@/config/firebase";
import type { User } from "@/entities/User";
import type { CollectionReference, QueryConstraint } from "@firebase/firestore";
import {
  collection,
  doc,
  setDoc,
  addDoc,
  deleteDoc,
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
    return getDocs(this.collection);
  }
  async getByID(id: string) {
    // TODO: Get element by ID from collection
  }
  async create(document: User) {
    const docRef = await addDoc(this.collection, document.userObject);
    console.log("Document written with ID: ", docRef.id);
  }
  async update(id: string, document: Object) {
    const docRef = await setDoc(doc(this.collection, id), document);
    console.log("Document updated with ID: ", id);
  }
  async remove(id: string) {
    deleteDoc(doc(this.collection, id));
    console.log("Document deleted with ID: ", id);
  }
  async search(...queryConstraints: QueryConstraint[]) {
    return getDocs(query(this.collection, ...queryConstraints));
  }
}

import { db } from "@/config/firebase";
import type { CollectionReference, QueryConstraint } from "@firebase/firestore";
import {
  collection,
  doc,
  setDoc,
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
  async create() {
    // TODO: Create new element
  }
  async update(id: string) {
    // TODO: update
  }
  async remove(id: string): Promise<boolean> {
    return Promise.resolve(false); // TODO: remove element by id
  }
  async search(...queryConstraints: QueryConstraint[]) {
    return getDocs(query(this.collection, ...queryConstraints));
  }
}

import { ref } from "vue";
import type { QueryDocumentSnapshot, DocumentData } from "@firebase/firestore";
import { where } from "firebase/firestore";
import { User } from "@/entities/User";
import { UsersCollection } from "@/database/users";

export default function useUsers() {
  const users = ref<User[]>([]);
  const response = ref({});
  const usersFirestore = new UsersCollection();
  let usersID: Array<string> = [];

  function emailSearch(searchQuery?: string) {
    if (searchQuery) {
      return usersFirestore.search(where("email", "==", searchQuery));
    }
    return usersFirestore.search();
  }

  function search(searchQuery?: string) {
    return emailSearch(searchQuery)
      .then((res) => {
        res.forEach((doc) => {
          usersID.push(doc.id);
          //console.log(doc.id, " => ", doc.data());
        });
        users.value = res.docs.map((doc) => new User(doc.data()));
      })
  }

  async function getAllUsers(){
    const allUsers = await usersFirestore.getAll();
    let userDocs: QueryDocumentSnapshot<DocumentData>[] = [];
    allUsers.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      userDocs.push(doc);
    });
    return userDocs;
  }

  function addUser(user: User) {
    return usersFirestore.create(user);
  }

  function setUser(user: User, id: string) {
    usersFirestore.update(user, id);
  }

  function getUser(id:string){
    return usersFirestore.getByID(id);
  }

  return {
    users,
    usersFirestore,
    usersID,
    search,
    addUser,
    setUser,
    getUser,
    getAllUsers
  };
}

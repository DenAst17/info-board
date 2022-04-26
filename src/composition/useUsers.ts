import { ref } from "vue";
import { QueryConstraint } from "@firebase/firestore";
import { where } from "firebase/firestore";
import { User } from "@/entities/User";
import { UsersCollection } from "@/database/users";

export default function useUsers() {
    const users = ref<User[]>([]);
    const isLoading = ref(false);
    const response = ref({});
    const usersFirestore = new UsersCollection();
  
    function effectiveSearch(searchQuery?: string) {
      if (searchQuery) {
        return usersFirestore.search(where("user_name", "==", searchQuery));
      }
      return usersFirestore.search();
    }
  
    function search(searchQuery?: string) {
      isLoading.value = true;
      effectiveSearch(searchQuery)
        .then((res) => {
          response.value = res;
          users.value = res.docs.map((doc) => new User(doc.data()));
        })
        .finally(() => {
          isLoading.value = false;
        });
    }

    function addUser(user: User){
        console.log(user);
        usersFirestore.create(user);
    }
  
    return {
      users,
      usersFirestore,
      isLoading,
      search,
      addUser
    };
  }
  
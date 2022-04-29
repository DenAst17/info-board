import { ref } from "vue";
import { PostsCollection } from "../database/posts";
import { QueryConstraint } from "@firebase/firestore";
import { Post } from "../entities/Post";
import { where } from "firebase/firestore";

export default function usePosts(query: Record<string, unknown> = {}) {
  const posts = ref<Post[]>([]);
  const isLoading = ref(false);
  const response = ref({});
  const postsFirestore = new PostsCollection();

  function addPost(post: Post) {
    return postsFirestore.create(post);
  }

  function effectiveSearch(searchQuery?: string, secondSearchQuery?:string) {
    if (arguments.length == 1 || !secondSearchQuery) {
      if (searchQuery) {
        return postsFirestore.search(where("title", "==", searchQuery));
      }
      return postsFirestore.search();
    }
    else {
      if (searchQuery && secondSearchQuery) {
        return postsFirestore.search(where("title", "==", searchQuery), where("user_id", "==", secondSearchQuery));
      }
      if(secondSearchQuery){
        return postsFirestore.search(where("user_id", "==", secondSearchQuery));
      }
      return postsFirestore.search();
    }
  }

  function search(searchQuery?: string, secondSearchQuery?:string) {
    isLoading.value = true;
    console.log(secondSearchQuery);
    effectiveSearch(searchQuery, secondSearchQuery)
      .then((res) => {
        response.value = res;
        posts.value = res.docs.map((doc) => new Post(doc.data()));
        console.log("value = ",posts.value);
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  return {
    posts,
    postsFirestore,
    isLoading,
    search,
    addPost
  };
}

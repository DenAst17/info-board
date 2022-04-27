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

  function effectiveSearch(searchQuery?: string) {
    if (searchQuery) {
      return postsFirestore.search(where("title", "==", searchQuery));
    }
    return postsFirestore.search();
  }

  function search(searchQuery?: string) {
    isLoading.value = true;
    effectiveSearch(searchQuery)
      .then((res) => {
        response.value = res;
        posts.value = res.docs.map((doc) => new Post(doc.data()));
      })
      .finally(() => {
        isLoading.value = false;
      });
  }

  search(query?.search as string);

  return {
    posts,
    postsFirestore,
    isLoading,
    search,
    addPost
  };
}

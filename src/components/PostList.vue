<script lang="ts">
import PostItem from "./PostItem.vue";
import { defineComponent, ref } from "@vue/runtime-core";
import router from "../router/index";
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

import { Post } from "@/entities/Post";
import usePosts from "../composition/usePosts";
import ConfirmDialog from 'primevue/confirmdialog';

import { useStore } from '@/stores/store'
import { mapStores } from 'pinia'
import useUsers from "@/composition/useUsers";

export default defineComponent({
  data() {
    return {
      display: false,
      postTitle: "",
      postText: "",
      isLogin: false,
      searchText: "",

    };
  },
  props: {
    isHomePage: Boolean,
  },
  computed: {
    ...mapStores(useStore),
    simpleposts() {
      return this.posts.slice(3);
    }
  },
  components: {
    PostItem,
    InputText,
    Dialog,
    Textarea,
    Button,
    ConfirmDialog
  },
  methods: {
    addPostDialogEnable() {
      this.display = true;
      this.postTitle = "";
      this.postText = "";
    },
    cancel() {
      this.display = false;
      this.postTitle = "";
      this.postText = "";
    },
    createPost() {
      const u = usePosts();
      const description = this.postText;
      const title = this.postTitle;
      const reg_date = Date.now();
      const user_id = this.mainStore.loginUserID;
      const deleted_at = -1;
      /*console.log(description,
        title,
        reg_date,
        user_id);*/
      u.addPost(new Post({
        deleted_at,
        description,
        title,
        reg_date,
        user_id
      }))
      this.display = false;
      this.postTitle = "";
      this.postText = "";
      router.push({ name: "home" });
    },
    deletePost(post: Post) {
      this.$confirm.require({
        message: 'Do you want to archive this post?',
        header: 'Archive Confirmation',
        icon: 'pi pi-info-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          const u = usePosts();
          post.deleted_at = Date.now();
          u.searchID(post.title, this.mainStore.loginUserID).then((id)=>{
            console.log(id);
            u.setPost(post, id);
          })
          router.push({ name: "home" });
          console.log(post);
        },
        reject: () => {
          //console.log(post);
        }
      });
    }
  },
  setup(props) {
    const query = router.currentRoute.value.query;
    const search = ref(query?.search);
    const { posts, isLoading, search: searchPosts } = usePosts(query);
    const { getAllUsers } = useUsers();
    const store = useStore();
    function localSearch() {
      let secondSearchQuery = "";
      if (props.isHomePage) {
        if (search.value == '') {
          document.location.reload();
        }
      }
      else {
        secondSearchQuery = store.loginUserID as string;
      }
      searchPosts(search.value as string, secondSearchQuery).then((_res: any) => {
        //console.log(posts.value);
        getAllUsers().then((userDocs) => {
          //console.log(userDocs[0].id, userDocs[0].data());
          let notArchivedPosts = []
          for (let i = 0; i < posts.value.length; i++){
            if(posts.value[i].deleted_at == -1)
            {
              notArchivedPosts.push(posts.value[i]);
              console.log(i);
            }
          }
          posts.value = notArchivedPosts;
          for (let i = 0; i < posts.value.length; i++) { // If posts user_id propety the same as a user's id then user_id = username for UI output
            for (let j = 0; j < userDocs.length; j++) {
              if (posts.value[i].user_id == userDocs[j].id) {
                posts.value[i].user_id = userDocs[j].data().user_name;
                break;
              }
            }
          }
          isLoading.value = false;
          console.log(posts);
        })
      })
    }
    localSearch();

    return {
      posts,
      isLoading,
      search,
      localSearch,
    };
  },
});
</script>

<template>
  <ConfirmDialog></ConfirmDialog>
  <div v-if="isLoading">Loading...</div>
  <Teleport to="#navigation_header">
    <div>
      <Button v-if="!(this as any).isHomePage" class="addPostButton" label="Add post" @click="addPostDialogEnable()" />
    </div>
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText class="searchInput" type="text" placeholder="Search" v-model="(search as string)"
        @input="localSearch()" />
    </span>
  </Teleport>
  <Dialog v-model:visible="display" :breakpoints="{ '10000px': '50vw', '1200px': '75vw', '640px': '100vw' }">
    <template #header>
      <span class="p-float-label">
        <InputText id="username" type="text" v-model="postTitle" />
        <label for="username">Title</label>
      </span>
    </template>

    <Textarea class="postTextArea" v-model="postText" :autoResize="true" rows="5" cols="30"
      placeholder="Write your post here" />

    <template #footer>
      <Button label="Cancel" @click="cancel()" icon="pi pi-times" class="p-button-text" />
      <Button label="Create" @click="createPost()" icon="pi pi-check" autofocus />
    </template>
  </Dialog>
  <!-- homePostsWrappers are for home posts display -->
  <!--<div class="homePostsWrapper" v-if="(this as any).isHomePage">
    <div class="bigPostItemWrapper">
      <div v-if="posts.length > 0">
        <PostItem class="postItem bigPostItem" v-bind:post="posts[0]" />
      </div>
    </div>
    <div>
      <template v-if="posts.length > 1">
        <PostItem class="postItem" v-bind:post="posts[1]" />
      </template>
      <template v-if="posts.length > 2">
        <PostItem class="postItem" v-bind:post="posts[2]" />
      </template>
    </div>
  </div>-->

  <div v-if="!isLoading" class="homeSimplePostsWrapper">
    <template v-if="(this as any).isHomePage" v-for="(item, index) in posts" :key="item.id">
      <PostItem class="simplePostItem" v-bind:post="item" v-bind:isHomePage="isHomePage" />
    </template>
  </div>

  <template v-if="!isLoading && !(this as any).isHomePage" v-for="(item, index) in posts" :key="item.id">
    <!-- It's for Activities Page -->
    <PostItem class="postItem" v-bind:post="item" v-bind:isHomePage="isHomePage"
      @remove="post => deletePost(post)" />
  </template>

</template>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

.p-input-icon-left {
  height: 39.6px;
}

.router {
  color: white;
  text-decoration: none;
}

.login {
  display: flex;
  justify-content: space-between;
  width: 73.26px;
  right: 40px;
}

.profile {
  right: 220px;
  display: flex;
  flex-direction: column;
}

.userInfo h2 {
  margin: 5px;
}

.userInfo {
  text-align: center;
}

.addPostButton {
  margin-right: 10px !important;
}

.menu {
  align-self: center;
}

@media (min-width: 1200px) {
  .postTextArea {
    width: 100%;
  }
}

.postTextArea {
  margin-top: 5px !important;
  width: 100%;
}

.postItem {
  width: 100%;
  margin: 10px;
}

.homePostsWrapper {
  display: flex;
}

.postItemWrapper {
  width: 100%;
}

.bigPostItem {
  height: 100%;
}

.bigPostItemWrapper {
  width: 50%;
  display: flex;
  align-items: center;
}


.homeSimplePostsWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.simplePostItem {
  width: 30%;
  margin: 10px 0px 10px 0px;
}

@media (max-width: 2000px) {
  .simplePostItem {
    width: 48%;
    margin: 10px 0px 10px 0px;
  }
}

@media (max-width: 1000px) {
  .simplePostItem {
    width: 100%;
    margin: 10px 0px 10px 0px;
  }
}
</style>
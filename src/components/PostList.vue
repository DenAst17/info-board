<script lang="ts">
import PostItem from "./PostItem.vue";
import { defineComponent, ref } from "@vue/runtime-core";
import usePosts from "../composition/usePosts";
import router from "../router/index";
import Dialog from 'primevue/dialog';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default defineComponent({
  data() {
    return {
      userName: "",
      display: false,
      postTitle: "",
      postText: "",
      isLogin: false,
      searchText: "",

    };
  },
  components: {
    PostItem,
    InputText,
    Dialog,
    Textarea, 
    Button
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
    createPost(){
      this.display = false;
      this.postTitle = "";
      this.postText = "";
    }
  },
  setup() {
    const query = router.currentRoute.value.query;
    const search = ref(query?.search);
    const { posts, isLoading, search: searchPosts } = usePosts(query);

    function localSearch() {
      searchPosts(search.value as string);
    }

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
  <div v-if="isLoading">Loading...</div>
  <Teleport to="#navigation_header">
    <div>
      <Button class="addPostButton" label="Add post" @click="addPostDialogEnable()" />
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
  <template v-for="item in posts" :key="item.id">
    <PostItem v-bind:post="item" />
  </template>

</template>

<style>
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}
.p-input-icon-left{
    height:39.6px;
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
.profile{
    right: 220px;
    display:flex;
    flex-direction: column;
}
.userInfo h2{
    margin: 5px;
}
.userInfo{
    text-align: center;
}
.addPostButton{
    margin-right:10px !important;
}
.menu{
    align-self:center;
}
@media (min-width: 1200px)
{
.postTextArea{
    width: 100%;
}
}
.postTextArea{
    margin-top  : 5px;
    width: 100%;
}
</style>
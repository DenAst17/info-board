<script lang="ts">
import { firebase } from "../config/firebase";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import Card from 'primevue/card';
import Button from 'primevue/button';
import { PostsCollection } from '../database/posts';
import { Post } from "../entities/Post";
/*let postscollection = new PostsCollection();*/
import { defineComponent } from 'vue'
import useUsers from "@/composition/useUsers";
export default defineComponent({
  data() {
    return {
      count: 1,
      posts: undefined
    }
  },
  emits: ["remove", "edit"],
  props: {
    post: Post,
    isHomePage: Boolean
  },
  components: {
    Card,
    Button
  },
  methods: {
    test() {
      this.count
    },
    timestampToDate(ts: number) {
      var d = new Date();
      d.setTime(ts);
      return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    },
  },
  mounted() {
    
  }
})
</script>

<template>
  <div class="postWrapper">
    <Card class="postCard">
      <template #header>
      </template>
      <template #title>
        {{ (post as Post).title }}
      </template>
      <template #content>
        {{ (post as Post).description }}
      </template>
      <template #footer>
        <div class="postFooter">
          <div>
            {{ post?.user_id }}
          </div>
          <div class="postDate">
            {{ timestampToDate((post as Post).reg_date as any) }}
          </div>
        </div>
      </template>
    </Card>
    <div class = 'postButtons' v-if="!isHomePage">
      <Button class = "actionButton" @click="$emit('remove', post)" icon="pi pi-times" label="Archive"></Button>
      <Button class = "actionButton" @click="$emit('edit', post)" icon="pi pi-times" label="Edit"></Button>
    </div>
  </div>

</template>

<style>
.postFooter {
  display: flex;
  justify-content: space-between;
}

.postWrapper {
  display: flex;
}

.postCard {
  flex-grow: 1;
}
.actionButton{
  height: 45%;
}
.postButtons{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

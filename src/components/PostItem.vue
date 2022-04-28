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
      posts: undefined,
      userName: ""
    }
  },
  props: {
    post: Post
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
    }
  },
  mounted() {
    const u = useUsers();
    u.getUser(this.post?.user_id as string).then((res)=>{
      if(res){
        //console.log(res);
        this.userName = res.user_name as string;
      }
    })
    // ...
  }
})
</script>

<template>
  <Card>
    <template #header>
    </template>
    <template #title>
      {{ (post as unknown).title }}
    </template>
    <template #content>
      {{ (post as unknown).description }}
    </template>
    <template #footer>
      <div class="postFooter">
        <div>
          {{ userName }}
        </div>
        <div class="postDate">
          {{ timestampToDate((post as unknown).reg_date) }}
        </div>
      </div>
    </template>
  </Card>
</template>

<style>
.postFooter {
  display: flex;
  justify-content: space-between;
}
</style>

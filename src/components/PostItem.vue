<script lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import { PostsCollection } from '../database/posts';
import { Post } from "../entities/Post";
/*let postscollection = new PostsCollection();*/
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 1,
      posts: undefined
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
    timestampToDate(ts:number) {
      var d = new Date();
      d.setTime(ts);
      return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    }
  },
  mounted() {
    console.log(this.post);

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
          denast
        </div>
        <div class="postDate">
          {{ timestampToDate((post as unknown).reg_date.seconds * 1000) }}
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

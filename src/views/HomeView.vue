<script lang="ts">
import HomeHeader from '@/components/HomeHeader.vue';
import PostList from '@/components/PostList.vue';
import { defineComponent } from 'vue'
export default defineComponent ({
  components: {
    HomeHeader,
    PostList
  }
})
</script>

<template>
  <HomeHeader />
  <PostList />
</template>

<style>
</style>
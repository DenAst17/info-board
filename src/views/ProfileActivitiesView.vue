<script lang="ts">
import NavigationHeader from '@/components/NavigationHeader.vue';
import PostList from '@/components/PostList.vue';
import { defineComponent } from 'vue'
export default defineComponent ({
  components: {
    NavigationHeader,
    PostList
  }
})
</script>

<template>
  <NavigationHeader v-bind:isHomePage="false"/>
  <PostList />
</template>

<style>
</style>
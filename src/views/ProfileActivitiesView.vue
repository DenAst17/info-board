<script lang="ts">
import UserActivitiesHeader from '@/components/ProfileActivitiesHeader.vue';
import PostList from '@/components/PostList.vue';
import { defineComponent } from 'vue'
export default defineComponent ({
  components: {
    UserActivitiesHeader,
    PostList
  }
})
</script>

<template>
  <UserActivitiesHeader />
  <PostList />
</template>

<style>
</style>
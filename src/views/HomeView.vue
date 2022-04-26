<script setup lang="ts">
import NavigationHeader from "@/components/NavigationHeader.vue";
import PostList from "@/components/PostList.vue";
</script>

<template>
  <NavigationHeader v-bind:isHomePage="true"/>
  <PostList />
</template>

<style></style>

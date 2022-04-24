<script lang="ts">
import PostItem from "./PostItem.vue";
import { defineComponent, ref } from "@vue/runtime-core";
import usePosts from "../composition/usePosts";
import router from "../router/index";
import InputText from "primevue/inputtext";

export default defineComponent({
  components: {
    PostItem,
    InputText,
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
  <div v-else>
    {{ posts }}
  </div>
  <Teleport to="#header_navigation">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText
        class="searchInput"
        type="text"
        placeholder="Search"
        v-model="search"
        @input="localSearch()"
      />
    </span>
  </Teleport>
  <PostItem />
</template>

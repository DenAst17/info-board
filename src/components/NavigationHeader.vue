<script lang="ts">
import NavigationMenu from "./NavigationMenu.vue";
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      count: 1,
      posts: undefined
    }
  },
  props: {
    isHomePage: Boolean,
  },
  components: {
    NavigationMenu
  },
  methods: {
    timestampToDate(ts: number) {
      var d = new Date();
      d.setTime(ts);
      return ('0' + d.getDate()).slice(-2) + '.' + ('0' + (d.getMonth() + 1)).slice(-2) + '.' + d.getFullYear();
    }
  },
  mounted() {
    //console.log(PostItem rendered);

  }
})
</script>

<template>
  <header class="wrapper">
    <nav class="wrapper__navigation" id="navigation_header">

    </nav>

    <div class="wrapper__login" id="login_header">
      <NavigationMenu v-bind:isHomePage='isHomePage'></NavigationMenu>
    </div>
  </header>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}

.wrapper__login,
.wrapper__navigation {
  display: flex;
}
</style>

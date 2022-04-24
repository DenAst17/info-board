<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText
      class="searchInput"
      type="text"
      placeholder="Search"
      v-bind="$attrs"
    />
  </span>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
</script>

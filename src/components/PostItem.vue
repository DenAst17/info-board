<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card';
import Button from 'primevue/button';

export default defineComponent({
  data() {
    return {
      count: 1
    } 
  },
  components: {
    Card,
    Button
  },
  methods: {
    test(){
      this.count
    }
  }
})
</script>

<template>
  <Card>
    <template #header>
        <img alt="user header" src="">
    </template>
    <template #title>
        Advanced Card
    </template>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
    </template>
    <template #footer>
        <Button icon="pi pi-check" label="Save" />
        <Button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em" />
    </template>
  </Card>
</template>

<style>

</style>

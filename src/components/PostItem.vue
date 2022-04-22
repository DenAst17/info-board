<script lang="ts">
import { defineComponent } from 'vue'
import Card from 'primevue/card';
import Button from 'primevue/button';
import {PostsCollection} from '../database/posts';
/*let postscollection = new PostsCollection();*/
export default defineComponent({
  data() {
    return {
      count: 1,
      posts: undefined
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
  },
  mounted() {
    //console.log(PostItem rendered);
    
  }
})
</script>

<template>
  <Card>
    <template #header>
        
    </template>
    <template #title>
        Some title
    </template>
    <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis 
        esse, cupiditate neque quas mit deste! This is description!
    </template>
    <template #footer>
      <div class = "postFooter">
        <div>
          denast
        </div>
        <div class = "postDate">
          19.04.22
        </div>
      </div>
    </template>
  </Card>
</template>

<style>
.postFooter{
  display: flex;
  justify-content: space-between;
}
</style>

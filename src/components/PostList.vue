<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
        </div>
        <span class="text-muten">{{post.createdAt}}</span>
      </div>
    </article>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testData, testPosts } from '../testData'
export default defineComponent({
  name: 'PostList',
  setup () {
    const route = useRoute()
    const currentId = +route.params.id
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.filter(post => post.columnId === currentId)
    return {
      list,
      column
    }
  }
})
</script>

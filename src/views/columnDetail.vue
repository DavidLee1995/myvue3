<template>
  <div class="column-datail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img
          :src="column.avatar && column.avatar.url"
          :alt="column.title"
          class="rounded-circle border w-100"
        />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
      <post-list :list="list"></post-list>
    </div>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PostList from '../components/PostList.vue'
import store from '@/store'
export default defineComponent({
  name: 'ColumDetail',
  components: {
    PostList
  },
  setup () {
    const route = useRoute()
    const currentId = route.params.id
    const column = computed(() => store.getters.getColumnById(currentId))
    const list = computed(() => store.getters.getPostsByCid(currentId))
    onMounted(() => {
      store.dispatch('fatchColumn', currentId)
      store.dispatch('fatchPosts', currentId)
    })
    return {
      list,
      column
    }
  }
})
</script>

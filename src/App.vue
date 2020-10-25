<!--
 * @Description:
 * @Version: 2.0
 * @Autor: LXL
 * @Date: 2020-10-07 22:28:31
 * @LastEditors: LXL
 * @LastEditTime: 2020-10-12 10:23:46
-->
<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <h1>{{error.message}}</h1>
    <loader v-if="isLoading"></loader>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader from './components/GlobalHeader.vue'
import Loader from './components/Loader.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    Loader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => {
      return store.state.user
    })
    const isLoading = computed(() => {
      return store.state.loading
    })
    const token = computed(() => {
      return store.state.token
    })
    const error = computed(() => {
      return store.state.error
    })
    onMounted(() => {
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.Authorization = `Bearer ${token.value}`
        store.dispatch('fetchCurrentUser')
      }
    })
    return {
      currentUser,
      isLoading,
      error
    }
  }
})
</script>

<style></style>

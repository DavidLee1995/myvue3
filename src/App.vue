<!--
 * @Description:
 * @Version: 2.0
 * @Autor: LXL
 * @Date: 2020-10-07 22:28:31
 * @LastEditors: LXL
 * @LastEditTime: 2020-10-10 13:22:03
-->
<template>
  <div class="container">
    <CloabalHeader :user="currentUser"></CloabalHeader>
    <ColumnList :list="list"></ColumnList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import CloabalHeader, { UserProps } from './components/GlobalHeader.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'LXL'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段简单的介绍',
    avatar: require('./assets/logo.png')
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2专栏，有一段简单的介绍'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3专栏，有一段简单的介绍',
    avatar: require('./assets/logo.png')
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏，有一段简单的介绍',
    avatar: require('./assets/logo.png')
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    CloabalHeader
  },
  setup () {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<style>
</style>

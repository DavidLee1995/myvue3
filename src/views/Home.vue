<template>
  <div>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1专栏，有一段简单的介绍',
    avatar: require('../assets/logo.png')
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
    avatar: require('../assets/logo.png')
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4专栏，有一段简单的介绍',
    avatar: require('../assets/logo.png')
  }
]
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList
  },
  setup () {
    return {
      list: testData
    }
  }
})
</script>

<template>
  <div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
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

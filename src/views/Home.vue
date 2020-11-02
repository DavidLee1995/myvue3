<template>
  <div>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <a href="#" class="btn btn-primary my-2">开始写文章</a>
          </p>
        </div>
      </div>
    </section>
    <uploader actions="/upload" :beforeUpload="beforeUpload" @file-uploaded="onFileUploaded">
      <h1>点击上传</h1>
      <template #loading>
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </template>
    </uploader>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import ColumnList from '../components/ColumnList.vue'
import uploader from '../components/Uploader.vue'
import { GlobalDataProps, ResponseType, ImageProps } from '../store'
import { useStore } from 'vuex'
import createMessage from '../hooks/createMessage'
export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    uploader
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const list = computed(() => {
      return store.state.columns
    })
    onMounted(() => {
      store.dispatch('fatachColumns')
    })
    const beforeUpload = (file: File) => {
      const isJPG = file.type === 'image/jpeg'
      if (!isJPG) {
        createMessage('上传图片只能是JPG格式', 'error')
      }
      return isJPG
    }
    const onFileUploaded = (rawData: ResponseType<ImageProps>) => {
      createMessage(`上传图片ID ${rawData.data._id}`, 'success')
    }
    return {
      list,
      beforeUpload,
      onFileUploaded
    }
  }
})
</script>

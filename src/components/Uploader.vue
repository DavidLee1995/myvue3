<template>
  <div class="file-upload">
    <button class="btn btn-primary" @click.prevent="triggerUpload">
      <span v-if="fileStatus === 'loading'">正在上传</span>
      <span v-else>点击上传</span>
    </button>
    <input
      type="file"
      class="file-input d-none"
      ref="fileInput"
      @change.prevent="handleFileChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error';
export default defineComponent({
  name: 'Uploader',
  props: {
    actions: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const fileInput = ref<null | HTMLElement>(null)
    const fileStatus = ref<UploadStatus>('ready')
    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.files) {
        fileStatus.value = 'loading'
        const files = Array.from(currentTarget.files)
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('icode', 'BA48C4907208B29B')
        axios.post(props.actions, formData, {
          'Content-Type': 'multipart/form-data'
        })
      }
    }
    return {
      fileInput,
      triggerUpload,
      handleFileChange,
      fileStatus
    }
  }
})
</script>

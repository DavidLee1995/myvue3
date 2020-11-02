<template>
  <div class="file-upload">
    <div class="file-upload-container" @click.prevent="triggerUpload">
      <slot v-if="fileStatus === 'loading'" name="loading">
        <button class="btn btn-primary" disabled>正在上传</button>
      </slot>
      <slot v-else-if="fileStatus === 'success'" name="uploaded">
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
    </div>
    <input
      type="file"
      class="file-input d-none"
      ref="fileInput"
      @change.prevent="handleFileChange"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import axios from 'axios'
type UploadStatus = 'ready' | 'loading' | 'success' | 'error';
type CheckFunction = (file: File) => boolean;
export default defineComponent({
  name: 'Uploader',
  props: {
    actions: {
      type: String,
      required: true
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>
    }
  },
  emits: ['file-uploaded', 'file-uploaded-error'],
  setup (props, context) {
    const fileInput = ref<null | HTMLInputElement>(null)
    const fileStatus = ref<UploadStatus>('ready')
    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    const handleFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement
      if (currentTarget.files) {
        const files = Array.from(currentTarget.files)
        if (props.beforeUpload) {
          const result = props.beforeUpload(files[0])
          if (!result) {
            return
          }
        }
        fileStatus.value = 'loading'

        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('icode', '5466D63AF5785F85')
        axios.post(props.actions, formData, {
          headers: {
            'Content-Type': 'muntipart/form-data'
          }
        }).then(resp => {
          context.emit('file-uploaded', resp.data)
          fileStatus.value = 'success'
        }).catch((error) => {
          fileStatus.value = 'error'
          context.emit('file-uploaded-error', { error })
        }).finally(() => {
          if (fileInput.value) {
            fileInput.value.value = ''
          }
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

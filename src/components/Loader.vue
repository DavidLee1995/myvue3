<template>
<teleport to="#back">
  <div
    class="d-flex justify-content-center align-items-center h-100 loading-container"
  >
    <div class="loading-content">
      <div class="spinner-border text-primary" role="status">
        <!-- <span class="sr-only">{{ text || "loading" }}</span> -->
      </div>
      <p v-if="text" class="text-primary small">{{ text }}</p>
    </div>
  </div>
</teleport>
</template>
<script>
import { defineComponent, onUnmounted } from 'vue'
import useDOMCreate from '../hooks/useDOMCreate'
export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String
    },
    color: {
      type: String
    }
  },
  setup () {
    useDOMCreate('back')
  }
})
</script>
<style>
.loading-container {
  background-color: rgba(255, 255, 266, 0.5);
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.loading-container {
  text-align: center;
}
</style>

<template>
  <teleport to="#message">
    <div class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2" role="alert">
      <strong>Holy guacamole!</strong>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export type MessageType = 'success' | 'error' | 'default'
export default defineComponent({
  name: 'Message',
  props: {
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  setup (props, content) {
    const node = document.createElement('div')
    node.id = 'message'
    document.body.appendChild(node)
  }
})
</script>

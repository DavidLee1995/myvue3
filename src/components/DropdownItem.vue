<!--
 * @Description:
 * @Version: 2.0
 * @Autor: LXL
 * @Date: 2020-10-10 14:38:54
 * @LastEditors: LXL
 * @LastEditTime: 2020-10-10 16:46:44
-->
<template>
  <li class="dropdown-oprion" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style >
.dropdown-oprion.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>

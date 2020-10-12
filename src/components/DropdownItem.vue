<!--
 * @Description:
 * @Version: 2.0
 * @Autor: LXL
 * @Date: 2020-10-12 08:31:06
 * @LastEditors: LXL
 * @LastEditTime: 2020-10-12 08:36:07
-->
<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Drodown',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style>
.dropdown-option.is-disabled * {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>

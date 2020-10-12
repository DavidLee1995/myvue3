<!--
 * @Description:
 * @Version: 2.0
 * @Autor: LXL
 * @Date: 2020-10-07 22:28:31
 * @LastEditors: LXL
 * @LastEditTime: 2020-10-12 10:23:46
-->
<template>
  <div class="container">
    <ClobalHeader :user="currentUser"></ClobalHeader>
    <!-- <ColumnList :list="list"></ColumnList> -->
    <form>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <validate-input type='text' placeholder="请输入邮箱地址" v-model="emailVal" :rules="emailRules"></validate-input>
      </div>
      <div class="form-group mb-3">
        <label for="exampleInputEmail1" class="form-label">密码</label>
        <validate-input type='password' placeholder="请输入密码" v-model="passwordVal" :rules="passwordRules"></validate-input>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ClobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'LXL'
}
// const testData: ColumnProps[] = [
//   {
//     id: 1,
//     title: 'test1的专栏',
//     description: '这是test1专栏，有一段简单的介绍',
//     avatar: require('./assets/logo.png')
//   },
//   {
//     id: 2,
//     title: 'test2的专栏',
//     description: '这是test2专栏，有一段简单的介绍'
//   },
//   {
//     id: 3,
//     title: 'test3的专栏',
//     description: '这是test3专栏，有一段简单的介绍',
//     avatar: require('./assets/logo.png')
//   },
//   {
//     id: 4,
//     title: 'test4的专栏',
//     description: '这是test4专栏，有一段简单的介绍',
//     avatar: require('./assets/logo.png')
//   }
// ]

const emailReg = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    ClobalHeader,
    ValidateInput
  },
  setup () {
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const emailVal = ref(null)
    const passwordVal = ref(null)
    const emailRules: RulesProp = [
      { type: 'required', message: '电子郵箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordRules: RulesProp = [
      { type: 'password', message: '密码不能为空' }
    ]

    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid email'
      } else {
        emailRef.error = false
      }
    }
    return {
      // list: testData,
      currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules
    }
  }
})
</script>

<style></style>

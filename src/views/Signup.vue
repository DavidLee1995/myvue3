<template>
  <div class="signup-page mx-auto p-3 w-330">
    <validate-from @form-submit="onFormSubmit">
      <div class="mb-3">
        <validate-input
          :rules="emailRules"
          v-model="formData.email"
          placeholder="请输入邮箱地址"
          type="text"
        ></validate-input>
      </div>
      <div class="mb-3">
        <validate-input
          :rules="nameRules"
          v-model="formData.nickName"
          placeholder="请输入昵称"
          type="text"
        ></validate-input>
      </div>
      <div class="mb-3">
        <validate-input
          :rules="passwordRules"
          v-model="formData.password"
          placeholder="请输入密码"
          type="password"
        ></validate-input>
      </div>
      <div class="mb-3">
        <validate-input
          :rules="repeatPasswordRules"
          v-model="formData.repeatPassword"
          placeholder="请再次输入密码"
          type="password"
        ></validate-input>
      </div>
      <template #submit>
        <button type="submit" class="btn btn-primary btn-block btn-large">
          注册新用户
        </button>
      </template>
    </validate-from>
  </div>
</template>
<script lang="ts">
import ValidateFrom from '../components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import axios from 'axios'
import createMessage from '../hooks/createMessage'
import { useRouter } from 'vue-router'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'SignUp',
  components: {
    ValidateFrom,
    ValidateInput
  },
  setup () {
    const formData = reactive({
      email: '',
      nickName: '',
      password: '',
      repeatPassword: ''
    })
    const router = useRouter()
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const nameRules: RulesProp = [
      { type: 'required', message: '昵称不能为空' }
    ]
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const repeatPasswordRules: RulesProp = [
      { type: 'required', message: '重复密码不能为空' },
      {
        type: 'custom',
        validator: () => {
          return formData.password === formData.repeatPassword
        },
        message: '密码不相同'
      }
    ]
    const onFormSubmit = async (result: boolean) => {
      if (result) {
        const payload = {
          email: formData.email,
          password: formData.password,
          nickName: formData.nickName,
          icode: 'BA48C4907208B29B'
        }
        axios
          .post('/users/', payload)
          .then((data: any) => {
            createMessage('注册成功 正在跳转页面', 'success')
            setTimeout(() => {
              router.push('/login')
            }, 2000)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
    return {
      formData,
      onFormSubmit,
      emailRules,
      nameRules,
      passwordRules,
      repeatPasswordRules
    }
  }
})
</script>

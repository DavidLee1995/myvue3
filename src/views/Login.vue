<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="form-group mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <validate-input
        type="text"
        placeholder="请输入邮箱地址"
        v-model="emailVal"
        :rules="emailRules"
        ref="inputRef"
      ></validate-input>
    </div>
    <div class="form-group mb-3">
      <label for="exampleInputEmail1" class="form-label">密码</label>
      <validate-input
        type="password"
        placeholder="请输入密码"
        v-model="passwordVal"
        :rules="passwordRules"
      ></validate-input>
    </div>
    <template #submit>
      <button class="btn btn-primary">提交</button>
    </template>
  </validate-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const emailReg = /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
export default defineComponent({
  name: 'Home',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup () {
    const inputRef = ref<any>()
    const router = useRouter()
    const store = useStore()
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
      { type: 'required', message: '密码不能为空' }
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
    const onFormSubmit = (result: boolean) => {
      console.log('result', result)
      if (result) {
        const payload = {
          email: emailVal.value,
          password: passwordVal.value
        }
        store.dispatch('login', payload).then((data) => {
          console.log(data)
          router.push({ path: '/' })
        })
      }
    }
    return {
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

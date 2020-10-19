import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  config.params = { ...config.params, icode: 'BA48C4907208B29B' }
  return config
})

axios.get('/columns').then(resp => {
  console.log(resp.data)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

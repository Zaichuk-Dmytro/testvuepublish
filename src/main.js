import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

const req = require.context('@/components', true, /\.(js|vue)$/i)
req.keys().map(key => {
  if (!(req(key).default || {}).name) {
    return
  }
  Vue.component(req(key).default.name, req(key).default)
})
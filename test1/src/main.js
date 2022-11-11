import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // vuex

Vue.config.productionTip = false

// global component 등록 (Vue 인스턴스가 생성되기전에 new Vue({... })) >> but 대개 안함
// Vue.component('??', {

// })

new Vue({ // public/index.html > #app에 주입
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import './assets/main.css'
let app = new Vue({
  render: (h) => h(App)
}).$mount('#vue-root')

let app2 = new Vue({
  render: (h) => h(App2)
}).$mount('#vue-root-2')

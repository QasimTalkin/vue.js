import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import './assets/main.css'

Vue.component('greeting', {
  template: '<p>Hey there, I am . <button v-on:click="changeName">Change name</button></p>'
})

let app = new Vue({
  render: (h) => h(App)
}).$mount('#vue-root')

let app2 = new Vue({
  render: (h) => h(App2)
}).$mount('#vue-root-2')

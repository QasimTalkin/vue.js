import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'
import Footer from './components/moelcules/Footer.vue'
import './assets/main.css'

Vue.component('site-footer', Footer)

// let app = new Vue({
//   render: (h) => h(App),
//   components: {
//     'app-servers': {
//       template: '<h1>Hello Vue.js!</h1>'
//     }
//   }
// }).$mount('#vue-root')

// let app2 = new Vue({
//   render: (h) => h(App2)
// }).$mount('#vue-root-2')


let app3 = new Vue({
  render: (h) => h(App3)
}).$mount('#vue-root-3')
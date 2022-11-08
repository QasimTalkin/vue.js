<script setup>
  import VueHome2 from './components/VueHome2.vue'
</script>

<template>
  <div>
    <h2> {{ msg }}</h2>
    <p>looping through comps</p>
    <VueHome2 />
    <site-footer/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>
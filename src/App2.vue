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

<style>
  h2{
    text-align: center;
    /* cat pic banner */
    background: url(https://images.unsplash.com/photo-1517436073-3b3b4f3c7f3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80);
  }
</style>
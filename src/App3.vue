<template>
  <div>
    <app-header />
    <app-content />
    <site-footer />
  </div>
</template>

<script>
  import Header from './components/organism/Header.vue';
  import Footer from './components/organism/Footer.vue';
  import Content from './components/organism/Content.vue';
  export default {
    components: {
      'app-header':Header,
      'site-footer':Footer,
      'app-content':Content
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
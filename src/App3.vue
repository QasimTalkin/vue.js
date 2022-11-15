<template>
  <div>
    <app-header />
    <app-content :toDoList="toDoList" />
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
    },
    data() { return {
      toDoList: [{
            title: 'Learn Vue',
            description: 'Learn Vue by building a simple blog app',
            isComplete: true
          },
          {
            title: 'Learn Vue Router',
            description: 'Learn Vue router by adding routing to the blog app',
            isComplete: false
          },
          {
            title: 'Learn Vuex',
            description: 'Learn Vuex by adding state management to the blog app',
            isComplete: false
          },
          {
            title: 'Learn Vue Composition API',
            description: 'Learn Vue Composition API by refactoring the blog app',
            isComplete: false
          },
          {
            title: 'Learn Vue 3',
            description: 'Learn Vue 3 by building a simple blog app',
            isComplete: false
          },
        ]}
    }
  }
</script>

<style lang="scss" scoped>

</style>
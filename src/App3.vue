<template>
  <div>
    <app-header />
    <app-content :toDoList="toDoList" :title="toDoTitle" @changeTitle="titleChange($event)"/>
    <site-footer :toDoTitle="toDoTitle"  />
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
        ],
        toDoTitle: 'To Do List'
      }
    },
    methods: {
      titleChange(title) {
        console.log(title)
        this.toDoTitle = title
      }
    },
    // beforeCreate() {
    //   alert('beforeCreate')
    // },
    // created() {
    //   alert('created')
    // },
    // beforeMount() {
    //   alert('beforeMount')
    // },
    // mounted() {
    //   alert('mounted')
    // },
    // beforeUpdate() {
    //   alert('beforeUpdated')
    // },
    // updated() {
    //   alert('beforeUpdated')
    // },
    // beforeDestroy() {
    //   alert('beforeDestroy')
    // },
    // destroyed() {
    //   alert('destroyed')
    // }
  }
</script>

<style lang="scss" scoped>

</style>
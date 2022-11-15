<template>
  <div>
    <app-header />
    <form-template> 
      <div slot='title'>Add new Task to learn</div>
      <div slot='content'>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="title">
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
        </div>
        <div class="form-group">
          <label for="isComplete">Is Complete</label>
          <input type="checkbox" class="form-control" id="isComplete" v-model="isComplete">
        </div>
      </div>
      <div slot='controls'>
        <button class="btn btn-primary" @click="addTask">Add Task</button>
      </div> 
    </form-template>
    <app-content :toDoList="toDoList" :title="toDoTitle" @changeTitle="titleChange($event)"/>
    <site-footer :toDoTitle="toDoTitle"  />
  </div>
</template>

<script>
  import Header from './components/organism/Header.vue';
  import Footer from './components/organism/Footer.vue';
  import Content from './components/organism/Content.vue';
  import FormTempalte from './components/organism/FormTempalte.vue';
  export default {
    components: {
      'app-header':Header,
      'site-footer':Footer,
      'app-content':Content,
      'form-template':FormTempalte
    },
    data() { return {
      title: '',
      description: '',
      isComplete: false,
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
      },
      addTask() {
        this.toDoList.push({
          title: this.title,
          description: this.description,
          isComplete: this.isComplete
        })
      //  clear fileds and render on screen 
        this.title = '';
        this.description = '';
        this.isComplete = false;    
      }
    },
    beforeCreate() {
      alert('beforeCreate')
    },
    created() {
      alert('created')
    },
    beforeMount() {
      alert('beforeMount')
    },
    mounted() {
      alert('mounted')
    },
    // beforeUpdate() {
    //   alert('beforeUpdated')
    // },
    // updated() {
    //   alert('updated')
    // },
    // beforeDestroy() {
    //   alert('beforeDestroy')
    // },
    // destroyed() {
    //   alert('destroyed')
  }
</script>

<style lang="scss" scoped>

</style>
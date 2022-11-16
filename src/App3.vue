<template>
  <div>

    <app-header @toggleLogin="toggleForm($event)" />
     <component v-show="loggedIn" :is="currentForm">
      <div slot="title">Add new Task to learn</div>
      <div slot="content">
        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Enter title"
            v-model="newTask.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            v-model="newTask.description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="isComplete">Is Complete</label>
          <input
            type="checkbox"
            class="form-control"
            id="isComplete"
            v-model="newTask.isComplete"
          />
        </div>
      </div>
      <div slot="preview-area">
        <h3>Preview</h3>
        <div class="card">
          <div class="card-body">
            <p class="card-title">TASK : {{ newTask.title }}</p>
            <p class="card-text">INFO : {{ newTask.description }}</p>
            <div>is the task complted? {{ newTask.isComplete }}</div>
          </div>
        </div>
      </div>
    </component>
    <button class="btn btn-primary" @click="addTask" v-show="loggedIn">Add Task</button>
    <app-content
      :toDoList="toDoList"
      :title="toDoTitle"
      @changeTitle="titleChange($event)"
    />
    <site-footer :toDoTitle="toDoTitle" />

  </div>
</template>

<script>
import Header from "./components/organism/Header.vue";
import Footer from "./components/organism/Footer.vue";
import Content from "./components/organism/Content.vue";
import FormTempalte from "./components/organism/FormTempalte.vue";
export default {
  components: {
    "app-header": Header,
    "site-footer": Footer,
    "app-content": Content,
    "form-template": FormTempalte,
  },
  data() {
    return {
      newTask: { title: "", description: "", isComplete: false },
      currentForm: null,
      loggedIn: false,
      toDoList: [
        {
          title: "Learn Vue",
          description: "Learn Vue by building a simple blog app",
          isComplete: true,
        },
        {
          title: "Learn Vue Router",
          description: "Learn Vue router by adding routing to the blog app",
          isComplete: false,
        },
        {
          title: "Learn Vuex",
          description: "Learn Vuex by adding state management to the blog app",
          isComplete: false,
        },
        {
          title: "Learn Vue Composition API",
          description: "Learn Vue Composition API by refactoring the blog app",
          isComplete: false,
        },
        {
          title: "Learn Vue 3",
          description: "Learn Vue 3 by building a simple blog app",
          isComplete: false,
        },
      ],
      toDoTitle: "To Do List",
    };
  },
  methods: {
    titleChange(title) {
      console.log(title);
    },
    addTask() {
      //  return if title is empty
      if (!this.newTask.title) return;
      this.$http.post('https://jsonplaceholder.typicode.com/users', this.newTask).then((response) => {
        response.json().then((data) => {
          this.toDoList.push(data);
        });
      });
    },
    toggleForm(loggedIn) {
      this.loggedIn = loggedIn;
      this.currentForm = loggedIn ? "form-template" : null;
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
  //   alert('updated')
  // },
  // beforeDestroy() {
  //   alert('beforeDestroy')
  // },
  // destroyed() {
  //   alert('destroyed')
};
</script>

<style lang="scss" scoped>
// preview aread with balck background white text padding and border
.card {
  background-color: black;
  color: white;
  padding: 1rem;
  border: 1px solid white;
  word-break: break-all;
}
button{
  text-align: center;
  margin: 1rem auto;
  display: block;
  padding: 1rem;

}
</style>

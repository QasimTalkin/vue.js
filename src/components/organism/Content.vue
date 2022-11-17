<template>
  <div>
    <h2 @click="changeTitle"> {{ toDoTitle }} </h2>
   <div class="cards">
    <div v-for="todo in toDoList" :key="todo.id" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ todo.title }}</h5>
          <div class="card-pic" v-if="todo.image">
            <img :src="todo.image" alt="pokemon" />
          </div>
     <div class="card-pic" v-random-color v-else>
              <logo />
          </div>
    
          <p class="card-text"  v-html="todo.description"></p>
          <button class="btn btn-primary" @click="setComplete(todo)">Set Complete</button>
          <div class="complete" :style="{width: todo.isComplete ? '100%' : '2%'}"></div>
        </div>
    </div>
   </div>

  </div>
</template>
<script>
  import logo from "../icons/IconEcosystem.vue";
  export default {
    directives: {
    randomColor: {
        bind(el, binding, vnode) {
          el.style.backgroundColor = '#' + Math.random().toString().slice(2, 8)
          console.log(el.style.backgroundColor)
        }
      }
    },
    components: {
      logo,
    },
    props: {
      toDoList: {
        type: Array,
        default: () => [{
            title: 'Learn Vue',
            description: 'Learn Vue by building a simple blog app',
            isComplete: true
          }]
      },
      toDoTitle:{
        type: String,
        default: 'To Do List'
      }
    },
    methods: {
      setComplete(todo) {
        todo.isComplete = true;
      },
      changeTitle() {
        this.toDoTitle === 'To Do List 2' ? this.toDoTitle = 'To Do List' : this.toDoTitle = 'To Do List 2'
        this.$emit('changeTitle', this.toDoTitle)
      }
    }
  }
  
</script>

<style lang="scss" scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: 100%;
  padding: 0 1rem;
  justify-content: stretch;
}
.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: min(500px, 50%);
  height: min(500px, 50%);

  }
// center cardtitile with all caps
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  margin: 1rem 0;
}

.card-text {
  font-size: 1.2rem;
  font-weight: 400;
  padding: 1rem 0;
  margin: 0;
  
}

.card-body {
  padding: 1rem;
}

.btn {
  background: #f1356d;
  cursor: pointer;
  color: rgb(0, 0, 0);
  border: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
}

.btn-primary {
  background: #35f1c8e7;
}

.complete {
  background: #f1356d;
  height: 5px;
  width: 25%;
  transition: width 0.5s ease-in-out;
}

h2 {
  text-align: center;
  padding: 1rem;
  font-size: 2rem;
}
// set card iamge round with ligt grey border and shadow
.card-img-top {

}

.card-pic {
  min-height: 400px;
  img {
  border-radius: 50%;
  border: 1px solid #ccc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1rem;
  background: #333;
  }
}
</style>
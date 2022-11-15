<template>
  <div>
   <div class="cards">
    <div v-for="todo in toDoList" :key="todo.title" class="card">
        <div class="card-body">
          <h5 class="card-title">{{ todo.title }}</h5>
          <p class="card-text">{{ todo.description }}</p>
          <button class="btn btn-primary" @click="setComplete(todo)">Set Complete</button>
          <div class="complete" :style="{width: todo.isComplete ? '100%' : '2%'}"></div>
        </div>
        
    </div>
   </div>

  </div>
</template>
<script>
  export default {
    props: {
      toDoList: {
        type: Array,
        default: () => [{
            title: 'Learn Vue',
            description: 'Learn Vue by building a simple blog app',
            isComplete: true
          }]
      }
    },
    methods: {
      setComplete(todo) {
        todo.isComplete = true;
      }
    }
  }
  
</script>

<style lang="scss" scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1rem;
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

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
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

</style>
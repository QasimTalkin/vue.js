<!-- create and export vue component that says hello {{ name }} after a prompt -->
  <template>
    <div>
      <h1>Hello {{ name }}!</h1>
      <button @click="changeName">Change Name</button>
    </div>
  </template>

  <script>
  
  export default {
    data() {
      return {
        name: "QasimTalkin",
      }
    },
    methods: {
      changeName() {
        this.name = prompt("What is your name?");
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #f00;
  }
  </style>
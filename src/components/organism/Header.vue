<template>
  <header>
    <h1>{{ title }}</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <button @click="toggleLogin" :class="{loggedIn: loginStatus}"  >{{ loginStatus ? 'LogOut' : 'LogIn' }}</button>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        loginStatus: false,
        title: 'Quick Blog'
      }
    },
    methods: {
      toggleLogin() {
       this.loginStatus = !this.loginStatus
        this.$emit('toggleLogin', this.loginStatus)
      }
    },
  }
</script>

<style lang="scss" scoped>
  header {
    background: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    flex: 1 0 auto;
  }
  nav {
    flex-grow:1;
    text-align: center;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-evenly;
    }
  }
  button {
    background: var(--vue-green); 
    cursor: pointer;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    width: 100px;
  }
  button:hover {
    background: #f1f135;
    opacity: 0.8;
    color: #111
  }
  .loggedIn {
    background: #f1356d;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    
  }
</style>
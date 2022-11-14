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
    <button>Login</button>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Quick Blog'
      }
    }
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
    background: #f1356d;
    cursor: pointer;
    color: #fff;
    border: 0;
    border-radius: 5px;
    padding: 0.5rem 1rem;
  }
  button:hover {
    background: #f1356d;
    opacity: 0.8;
  }
  button:focus {
    outline: none;
  }
  button:active {
    background: #f1356d;
    opacity: 0.6;
  }
</style>
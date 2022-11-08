<!-- import HelloWorld.vue and add it to footer button -->
<template>
  <div class="footer">
    <h2>Footer</h2>
    <button @click="showHelloWorld">{{ showHelloWorldComponent ? 'Hide' : 'Show'}} Hello World</button>
    <HelloWorld v-if="showHelloWorldComponent" />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
 
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      showHelloWorldComponent: false,
    };
  },
  methods: {
    showHelloWorld() {
      this.showHelloWorldComponent = !this.showHelloWorldComponent;
    },
  },
};
</script>

<!-- style fotte to be at the bottom of the page .footer -->
<style>
.footer {
  background-color: #f1f1f1;
  text-align: center;
  bottom: 0;
  width: 100%;
  position: fixed;
}
</style>
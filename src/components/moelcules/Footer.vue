<!-- import HelloWorld.vue and add it to footer button -->
<template>
  <div class="footer">
    <h2>Footer</h2>
    <button @click="showHelloWorld">Show Hello World</button>
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
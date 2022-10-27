<template>
    <!-- button to show eventModifierCards when showModfiderCards is true  -->
    <button @click="toggleEventModifierCards"> {{ showModfierCards ? 'Hide' : 'Show' }} Event Modifier Cards</button>
    <div  v-if="showModfierCards" class="cards">
      <h2>{{ vue.events.titel }}</h2>
      <div class="card" v-for="modifier in vue.events.modifiers" :key="modifier.id">
        <h3>{{ modifier.name }}</h3>
        <p>{{ modifier.description }}</p>
        <pre><code class="js">{{ modifier.code }}</code></pre>
        <button v-if="modifier.name === 'once'" @click.once="add">Click Once</button>
        <button v-else-if="modifier.name === 'stop'" @click.stop="add">Click Stop</button>
        <a href="google.com" v-else-if="modifier.name === 'prevent'" @click.prevent="add">Click Prevent</a>
        <button v-else-if="modifier.name === 'capture'" @click.capture="add">Click Capture</button>
        <button v-else-if="modifier.name === 'self'" @click.self="add">Click Self</button>
        <button v-else-if="modifier.name === 'passive'" @click.passive="add">Click Passive</button>
        <button v-else-if="modifier.name === 'native'" @click.native="add">Click Native</button>
        <button v-else-if="modifier.name === 'double'" @click.double="add">Click Double</button>
        <input type="text" v-else-if="modifier.name === 'enter'" @keyup.enter="add" placeholder="Enter">
        <input type="text" v-else-if="modifier.name === 'tab'" @keyup.tab="add" placeholder="Tab">
        <input type="text" v-else-if="modifier.name === 'delete'" @keyup.delete="add" placeholder="Delete">
        <input type="text" v-else-if="modifier.name === 'down'" @keyup.down="add" placeholder="Down">
      </div>
      <div class="outputBox">
        <h2>{{ vue.events.value }}</h2>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
            title: "Vue Event Modifiers",
            value:'',
            modifiers:[
              {id: 1, name: "once", description: "The event will be triggered at most once.", code: "v-on:click.once='addOneToOutput'"},
              {id: 2, name: "capture", description: "Use capture mode when adding the event listener.", code: "v-on:click.capture='addOneToOutput'"},
              {id: 3, name: "passive", description: "The event listener will never call preventDefault().", code: "v-on:click.passive='addOneToOutput'"},
              {id: 4, name: "self", description: "The event will only be triggered if the event.target is the element itself.", code: "v-on:click.self='addOneToOutput'"},
              {id: 5, name: "native", description: "Listen for a native event on the root element of component." , code: "v-on:click.native='addOneToOutput'"},
              {id: 6, name: "stop", description: "The event propagation will be stopped." , code: "v-on:click.stop='addOneToOutput'"},
              {id: 7, name: "prevent", description: "The event will no longer call its event.preventDefault()." , code: "v-on:click.prevent='addOneToOutput'"},
              {id: 8, name: "capture", description: "Use capture mode when adding the event listener." , code: "v-on:click.capture='addOneToOutput'"},
              {id: 9, name: "double", description: "The event will be triggered at most twice." , code: "v-on:click.double='addOneToOutput'"},
              {id: 10, name: "enter", description: "The event will be triggered when the enter key is pressed." , code: "v-on:keyup.enter='addOneToOutput'"},
              {id: 11, name: "tab", description: "The event will be triggered when the tab key is pressed." , code: "v-on:keyup.tab='addOneToOutput'"},
              {id: 12, name: "delete", description: "The event will be triggered when the delete key is pressed." , code: "v-on:keyup.delete='addOneToOutput'"},
              {id: 13, name: "down", description: "The event will be triggered when the down key is pressed." , code: "v-on:keyup.down='addOneToOutput'"},
            ]
          }
  },
  methods: {
    toggleEventModifierCards() {
      this.showModfierCards = !this.showModfierCards;
    },
    add(){
      this.vue.events.value++;
    }
  },
};

</script>

<!-- import footer -->


<template>
  <div class="item">
    <h2>{{ title }}</h2>
    QasimTalkin is <a :href="gitURL">QasimTalkin</a> on GitHub.
    Works as {{ job }} at {{ company }}.
    <button @click="greet()">Greet</button>
    <button @click="greet('QasimTalkin')">Greet QasimTalkin</button> 
    <button @click="reverseJob">Reverse Job</button>
    <!-- container for cards --> 
    <h2> {{ vue.text }}</h2>
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
        <input type="text" v-else-if="modifier.name === 'enter'" v-model="vue.events.value" placeholder="Enter">
        <input type="text" v-else-if="modifier.name === 'tab'" @keyup.tab="add" placeholder="Tab">
        <input type="text" v-else-if="modifier.name === 'delete'" @keyup.delete="add" placeholder="Delete">
        <input type="text" v-else-if="modifier.name === 'down'" @keyup.down="add" placeholder="Down">
      </div>
      <div class="outputBox">
        <h3>{{ vue.events.value }}</h3>
    </div>
    </div>
    <!-- exmple of two way data binding -->
    <h2> {{ vue.twoWayDataBinding.title }}</h2>
    <input type="text" v-model="vue.twoWayDataBinding.value" placeholder="Enter to see v-model in action">
    <h4> {{ vue.twoWayDataBinding.value }}</h4>
  <!-- example of computed properties -->
   <h2> Vue Computed properties</h2>
   <button @click="computedA++"> add A</button>
   <p> A - {{ computedA }}</p>
   <button @click="computedB++"> add B</button>
   <p> B - {{ computedB }}</p>
    <p> A + B = {{ computedSum }}</p>
  <!-- example of dynamic css property -->
    <h2> Dynaic Css Classes </h2>
    <button @click="isDynamicClass = !isDynamicClass">Toggle</button>
    <p :class="addClasses">isActive - {{ isDynamicClass }}</p>
  <!-- example of dynamic condtionals -->
    <h2> if and show condtional </h2>
    <button v-on:click="show = !show">Toggle</button>
    <div v-if="show">
      <p>Now you see me</p>
    </div>
    <div v-show="show">
      <p>Now you see me</p>
    </div>
  <!-- example of dynamic loops -->
    <h2> Loops </h2>
    <template>
      <div v-for="(item, index ) in items" :key="item.id"> {{ index+1 }} : {{ item.name }}</div>
    </template>

  </div>
</template>

<script>
export default {
  data() {
    return {
        title: "QasimTalkin",
        job: "Software Engineer",
        company: "Google",
        gitURL: "www.github.com/qasimtalkin",
        showModfierCards: true,
        computedA: 0,
        computedB: 0,
        isDynamicClass: true,
        show: true,
        items:[{id: 1, name: 'QasimTalkin'}, {id: 2, name: 'Vue'}, {id: 3, name: 'JavaScript'}],
        text: "Vue is a progressive framework for building user interfaces.",
        vue: {
          events: {
            title: "Vue Event Modifiers",
            value:0,
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
          },
          twoWayDataBinding: {
            title: "Vue Two Way Data Binding",
            value: ''
          }
        },
      
    }
  },
  methods: {
    greet(value='Hi') {
      alert(value);
    },
    reverseJob() {
      this.job = this.job.split("").reverse().join("");
    },
    toggleEventModifierCards() {
      this.showModfierCards = !this.showModfierCards;
    },
    add(){
      this.vue.events.value++;
    }
  },
  computed: {
    computedSum() {
      return this.computedA + this.computedB;
    },
    addClasses() {
      return {
        active: this.isDynamicClass,
        inactive: !this.isDynamicClass
      }
    }
  }
};
</script>

<style scoped>

h2 {
  padding-top: 10px;
  border-top: 1px solid #ccc;
  margin: 5px 0 0 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #f1f1f1;
}

.card {
  width: 30%;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
}

/* code block to show color for js */
pre {
  color: #fff;
  background-color: #000;
  min-width: 100%;
  text-align: center;
}
.outputBox {
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  background-color: hsl(120, 100%, 90%);
}
input {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-align: center;
  margin-top: 1rem
}

h4{
  text-align: center;
}
/* an animated active class with pulse effect */
.active {
  animation: activePulse 3s infinite;
}
@keyframes activePulse {
  0% {
    background-color: hsl(120, 100%, 20%);
  }
  50% {
    background-color: hsl(120, 100%, 30%);
  }
  100% {
    background-color: hsl(120, 100%, 50%);
  }
}

.inactive {
  animation: inActivePulse 3s infinite;
}
@keyframes inActivePulse {
  0% {
    background-color: hsl(10, 41%, 42%);
}
  50% {
    background-color: hsl(10, 41%, 52%);
  }
  100% {
    background-color: hsl(10, 41%, 72%);
  }
}

</style>
---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
---
<!-- headingDivider: 2 -->
<!--fit-->
<!--
theme: gaia
class: lead
-->

<style>
 {
  font-size: 1.75em;
 }

</style>

# Vue.js Essentials

## What is Vue.js?

- A progressive framework for building user interfaces
- No need to make multiple requests to the server
- very lean and lightweight (only 20kb minified)

## Installing Vue.js

Vue.js can be installed in two ways:
  - CDN for version 2.6.10 `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`
  - NPM for version 2.6.10 `npm i vue 2.6.10`


## Vue.js Instance
- A Vue.js instance is created by calling the `Vue` function
  - an instance can controller several components
  - it controls the data, methods, and lifecycle of the components
  - `new Vue({})` is the syntax for creating a Vue.js instance

## Vue.js Instance Options
- `el` - element to mount the instance to. root element! `el: '#app'`
- `data` - data object to be used in the instance `data: {}`
- `methods` - methods to be used in the instance `methods: {}`
- `computed` - computed properties to be used in the instance `computed: {}`
```ts
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
  }
})
```

## this in Vue.js data
- `this` refers to the Vue.js instance
- data is accessed using `this` in the instance
- for example in methods, `this.message` refers to the data object
```ts
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
  }
})
```

## Data Binding
- we can bind data to the DOM using `v-bind` or `:` in the template
- we can bind data to the DOM using `v-on` or `@` in the template
```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <a :href="url">Vue.js</a>
</div>
<script>
  new Vue({
    el: '#app',
    data() return {
      message: 'Hello Vue.js!',
      url: 'https://vuejs.org/'
    }
  })

</script>
```
## vue html element Binding
- we can add html elements to the DOM using `v-html` in the template
```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <a :href="url">Vue.js</a>
  <div v-html="html"></div>
</div>
<script>
  new Vue({
    el: '#app',
    data() return {
      message: 'Hello Vue.js!',
      url: 'https://vuejs.org/',
      html: '<h1>Vue.js</h1>'
    })
</script>
```

## vue event modifiers
- we can add event modifiers to the DOM using `v-on` in the template or `@` in the template
- events are triggered when the user interacts with the DOM
- some list of event modifiers
  - `v-on:click.once` - triggers when the user clicks on the element once and only once
  - `v-on:click.prevent` - prevents the default behavior of the event

## vue keyboard event modifiers
- some list of keyboard event modifiers
  - `v-on:keyup.enter` - triggers when the user presses the enter key
  - `v-on:keyup.esc` - triggers when the user presses the escape key
  - `v-on:keyup.tab` - triggers when the user presses the tab key
  - `v-on:keyup.delete` - triggers when the user presses the delete key
  - `v-on:keyup.backspace` - triggers when the user presses the backspace key
  - `v-on:keyup.space` - triggers when the user presses the space key
  - `v-on:keyup.up` - triggers when the user presses the up arrow key
  - `v-on:keyup.down` - triggers when the user presses the down arrow key
  - `v-on:keyup.left` - triggers when the user presses the left arrow key
  - `v-on:keyup.right` - triggers when the user presses the right arrow key
  - multiple modifiers can be used together
  - `v-on:keyup.enter.space` - triggers when the user presses the enter and space key
  - `v-on:keyup.enter.space.prevent` - triggers when the user presses the enter and space key and prevents the default behavior of the event

## vue two way data binding
- we can bind data to the DOM using `v-model` in the template
- `v-model` is a shorthand for `v-bind:value` and `v-on:input`
- `v-model` is used for input elements like `input`, `textarea`, and `select` this will update the data when the user interacts with the DOM

```html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
  <a :href="url">Vue.js</a>
  <div v-html="html"></div>
  <input type="text" v-model="message">
</div> 
<script>
  new Vue({
    el: '#app',
    data() return {
      message: 'Hello Vue.js!',
      url: 'https://vuejs.org/',
      html: '<h1>Vue.js</h1>'
    })
</script>
```

### vue computed properties
- computed properties are used to cache and filter data
- computed properties are cached based on their dependencies
- `computed` is an object that contains the computed properties
- `
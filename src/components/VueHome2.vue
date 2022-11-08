<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <h2>Local component</h2>
    <HelloWorld />
  </div>
  
</template>

<script>
import HelloWorld from "./moelcules/HelloWorld.vue"
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'getDocumentByElementID'},
          { id: 2, name: 'getDocumentByClassName'},
          { id: 3, name: 'getDocumentByTagName'},
          { id: 4, name: 'getDocumentByQuerySelector'},
          { id: 5, name: 'getDocumentByQuerySelectorAll'},
          { id: 6, name: 'getDocumentByElementName'}
        ]
      }
    },
   components: {
     HelloWorld,
   }
  }
</script>
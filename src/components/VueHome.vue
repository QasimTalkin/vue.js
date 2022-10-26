<template>
  <div class="item">
    <h2>{{ title }}</h2>
    QasimTalkin is <a :href="gitURL">QasimTalkin</a> on GitHub.
    Works as {{ job }} at {{ company }}.
    <button @click="greet()">Greet</button>
    <button @click="greet('QasimTalkin')">Greet QasimTalkin</button> 
    <button @click="reverseJob">Reverse Job</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title: "QasimTalkin",
        job: "Software Engineer",
        company: "Google",
        gitURL: "www.github.com/qasimtalkin"
    }
  },
  methods: {
    greet(value='Hi') {
      alert(value);
    },
    reverseJob() {
      this.job = this.job.split("").reverse().join("");
    }
  },
};

</script>
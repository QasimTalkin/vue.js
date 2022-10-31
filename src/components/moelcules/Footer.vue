<!-- simple footer with qasimtalkin -->
<template>
  <div>
    <h2>QasimTalkin</h2>
    <p>QasimTalkin is <a :href="gitURL">QasimTalkin</a> on GitHub.</p>
    <p>Works as {{ job }} at {{ company }}. {{app1Name}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: "Software Engineer",
      company: "Google",
      gitURL: "www.github.com/qasimtalkin",
      app1Name: app.title,
    };
  }
};
</script>
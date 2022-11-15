<template>
  <div>
    <footer> 
      <p> {{ copyRightsNotice }}</p>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        copyRightsNotice: '© 2021 Quick Blog - All Rights Reserved QasimTech'
      }
    }
  }
</script>

<style lang="scss" scoped>


  footer {
    background: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    flex: 1 0 auto;
  }
  p {
    text-align: center;
  }
</style>
<template>
  <div>
      <form>
        <div class="form-title">
          <slot name="title"></slot>
        </div>
        <div class="form-content">
          <slot name="content"></slot>
        </div>
        <div class="form-controls">
          <slot name="controls"></slot>
        </div>
      </form>
  </div>
</template>

<script>
  export default {
    
    
  }
</script>

<style lang="scss" scoped>
form {
  background: #fff;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
  .form-title {
    text-align: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .form-content {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    label {
      display: block;
      margin: 0.5rem 0;
    }
    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      width: 100%;
    }
    textarea {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;
      width: 100%;
    }
    // diplay inline for checkbox label
     label[for="isComplete"] {
        display: inline;
        padding: 0 0.5rem;
      }
    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      display: inline-block;
      width: 1em;
      height: 1em;
      border: 0.15em solid #000;
      border-radius: 0.2em;
      background-clip: padding-box;
      background-origin: border-box;
      background-color: #fff;
      vertical-align: bottom;
      margin-right: 0.5rem;
      cursor: pointer;
      &:checked {
        background-color: #000;
      }
    }
  }
  .form-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
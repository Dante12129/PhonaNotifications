<template>
  <form v-on:click.prevent="">
    <div class="form-input flow">
      <label for="username">Username: </label>
      <input type="text" id="username">
    </div>
    <div class="form-input flow">
      <label for="password">Password: </label>
      <input type="text" id="password">
    </div>
    <button type="submit" class="form-input">Submit</button>
  </form>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>
  .form-input {
    margin: 5px auto;
  }
  div.form-input {
    width: 250px;
  }
  button.form-input {
    display: block;
    width: 150px;
  }

  .flow {
    display: flex;
    flex-direction: row;
  }
  .flow > * {
    flex: 1;
  }
</style>
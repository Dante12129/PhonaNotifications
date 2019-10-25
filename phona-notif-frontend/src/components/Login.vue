<template>
  <form v-on:click.prevent="onSubmit()">
    <TextField text="Username" class="form-input"></TextField>
    <TextField text="Password" class="form-input"></TextField>
    <button type="submit" class="form-input">Submit</button>
  </form>
</template>

<script>
import TextField from "@/components/TextField";
export default {
  name: "Login",
  components: {TextField}
}
</script>

<style scoped>
  .form-input {
    margin: 5px auto;
  }
  div.form-input {
    width: 35%;
  }
  button.form-input {
    display: block;
    width: 15%;
    padding: 0;
  }
</style>
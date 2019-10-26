<template>
  <form v-on:submit.prevent="onFormSubmit">
    <div class="grid">
      <TextField text="Username"></TextField>
      <TextField text="Password"></TextField>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import TextField from "@/components/TextField";
export default {
  name: "Login",
  components: {TextField},
  methods: {
    onFormSubmit: function () {
      console.log("Form submitted");
    }
  }
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 5px;
  }

  form {
    margin: 0 auto;
    width: 60%
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }

    form {
      width: 100%;
    }
  }

  button {
    display: block;
    margin: 5px auto;
    width: 30%;
  }

  @media (max-width: 500px) {
    button {
      width: 50%;
    }
  }
</style>
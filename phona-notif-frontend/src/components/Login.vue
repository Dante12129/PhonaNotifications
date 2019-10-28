<template>
  <form :id="formID" v-on:submit.prevent="onFormSubmit">
    <div class="grid">
      <TextField text="Username"></TextField>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import TextField from "@/components/TextField";

export default {
  name: "Login",
  components: {TextField},
  computed: {
    formID: function () {
      return `f${this._uid}`;
    }
  },
  methods: {
    onFormSubmit: function () {
      // Get username from form
      console.log("Form submitted");
      let form = document.querySelector(`#${this.formID}`);
      let data = new FormData(form);
      let username = data.get("username");
      console.log(username);

      // Go to appropriate page
      this.$router.push({ path: `user/${username}` });
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
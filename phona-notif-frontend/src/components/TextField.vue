<template>
  <div>
    <label :for="textLowercase">{{ text }}: </label>
    <input type="text" :name="textLowercase" :id="textLowercase">
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
      text: String
  },
  computed: {
    textLowercase: function () {
      // noinspection JSUnresolvedFunction
      return this.text.toLowerCase();
    }
  }
}
</script>

<style scoped>
  div {
    display: contents;
  }
</style>
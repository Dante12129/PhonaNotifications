<template>
  <div>
    <label v-bind:for="text.toLowerCase()">{{ text }}: </label>
    <input type="text" v-bind:id="text.toLowerCase()">
  </div>
</template>

<script>
export default {
  name: "TextField",
  props: {
      text: String
  }
}
</script>

<style scoped>
  div {
    display: contents;
  }
</style>
<template>
  <div class="flow">
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
  .flow {
    display: flex;
    flex-direction: row;
  }
  .flow > * {
    flex: 1;
  }
</style>
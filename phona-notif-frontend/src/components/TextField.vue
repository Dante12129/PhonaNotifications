<template>
  <div>
    <!--suppress JSUnresolvedFunction -->
    <label :for="text.toLowerCase()">{{ text }}: </label>
    <!--suppress JSUnresolvedFunction -->
    <input type="text" :name="text.toLowerCase()" :id="text.toLowerCase()">
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
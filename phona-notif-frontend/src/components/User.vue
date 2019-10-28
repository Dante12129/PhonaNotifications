<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
  export default {
    name: "User",
    props: {
      name: {
        type: String,
        default: "NoUser"
      }
    }
  }
</script>

<style scoped>

</style>
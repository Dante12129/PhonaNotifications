<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
html {
  background: black;
  color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 50%;
}
</style>

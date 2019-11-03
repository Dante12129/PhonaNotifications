<template>
  <div>
    <h1 class="centered">{{ name }}</h1>
    <div class="buttons">
      <NotificationButton kind="gift"></NotificationButton>
      <NotificationButton kind="issue"></NotificationButton>
      <NotificationButton kind="question"></NotificationButton>
    </div>
    <ul class="centered">
      <li v-for="item in $root.$data.notifications" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  import NotificationButton from "@/components/NotificationButton";
  export default {
    name: "User",
    components: {NotificationButton},
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .buttons {
    display: flex;
    margin: 5px auto 20px auto;
  }

  .buttons > button {
    flex-grow: 1;
  }

  .centered {
    margin: 0 auto;
    width: min-content;
  }
</style>
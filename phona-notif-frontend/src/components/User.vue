<template>
  <div class="user">
    <h1>{{ name }}</h1>
    <div class="buttons">
      <NotificationButton kind="gift"></NotificationButton>
      <NotificationButton kind="issue"></NotificationButton>
      <NotificationButton kind="question"></NotificationButton>
    </div>
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
  .user {
    text-align: center;
  }

  .buttons {
    display: flex;
  }

  .buttons > button {
    flex-grow: 1;
  }
</style>
<template>
  <div>
    <h1 class="centered">{{ name }}</h1>
    <div class="buttons">
      <NotificationButton kind="gift"></NotificationButton>
      <NotificationButton kind="issue"></NotificationButton>
      <NotificationButton kind="question"></NotificationButton>
    </div>
    <ul class="centered">
      <NotificationUser v-for="(notif, i) in $root.$data.notifications" :key="i + notif.kind" :notification="notif"></NotificationUser>
    </ul>
  </div>
</template>

<script>
  import NotificationButton from "@/components/NotificationButton";
  import NotificationUser from "@/components/NotificationUser";

  export default {
    name: "User",
    components: {NotificationUser, NotificationButton},
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
    width: max-content;
  }

  ul {
    text-align: center;
    list-style: none;
    padding: 0;
  }
</style>
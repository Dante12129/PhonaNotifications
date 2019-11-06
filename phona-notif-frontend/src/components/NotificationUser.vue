<template>
  <li>{{ notification.kind }} {{ `Outstanding: ${answered}` }}</li>
</template>

<script>
  export default {
    name: "NotificationUser",
    props: {
      notification: {
        type: Notification,
        required: true
      },
    },
    data: function () {
      return {
        answered: false
      }
    }
  }
</script>

<style scoped>

</style>
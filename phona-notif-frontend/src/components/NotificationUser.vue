<template>
  <li><span>{{ notification.kind }}</span> : <span>{{ answered }}</span></li>
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
    },
    mounted: function () {
      setTimeout(function () {
        this.answered = true;
      }.bind(this), 2500);
    }
  }
</script>

<style scoped>
  span {
    width: 200px;
  }
</style>
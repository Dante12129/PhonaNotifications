<template>
  <button @click="sendNotification" :class="kind">
    {{ prettyKind }}
  </button>
</template>

<script>
  import Notification from "@/Notification";

  export default {
    name: "NotificationButton",
    props: {
      kind: {
        type: String,
        required: true
      }
    },
    computed: {
      prettyKind: function () {
        return `${this.kind.charAt(0).toUpperCase()}${this.kind.substr(1, this.kind.length - 1)}`;
      }
    },
    methods: {
      sendNotification: function () {
        console.log(this.prettyKind);
        this.$root.$data.notifications.push(new Notification(this.prettyKind))
      }
    }
  }
</script>

<style scoped lang="scss">
  $gift-color: #00ff00;
  $issue-color: #ffff00;
  $question-color: #00ffff;

  button {
    border: 1px solid black;
    padding: 0;
    height: 2em;
    font-weight: bold;
  }

  .gift {
    background-color: $gift-color;
  }
  .gift:hover {
    background-color: darken($gift-color, 5%);
  }

  .issue {
    background-color: $issue-color;
  }
  .issue:hover {
    background-color: darken($issue-color, 5%);
  }

  .question {
    background-color: $question-color;
  }
  .question:hover {
    background-color: darken($question-color, 5%);
  }
</style>
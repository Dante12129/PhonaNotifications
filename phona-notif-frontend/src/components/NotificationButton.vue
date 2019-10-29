<template>
  <button>
    {{ prettyKind }}
  </button>
</template>

<script>
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
        return `${this.kind.charAt(0).toUpperCase()}${this.kind.substr(1, this.kind.length - 1)}`
      }
    }
  }
</script>

<style scoped>

</style>
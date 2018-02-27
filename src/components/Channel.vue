<template>
  <span class="channel">#{{ name }}</span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
.channel
  color: white
  background: #777777
  border-radius: 3px
  padding: 1px 5px
  white-space: nowrap
</style>

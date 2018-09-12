<template>
  <span class="guest">{{ name }}</span>
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
.guest {
  color: green;
  font-weight: bold;
}
</style>

<template>
  <div class="site-footer">
    &copy; {{ year }} Vue Land • <router-link to="/polls">Polls</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="stylus">
.site-footer
  margin-top: 50px
  font-size: 1.4rem
  color: #52244f
  a
    text-decoration: none
    color: #dd1d64
</style>

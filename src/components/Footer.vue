<template>
  <div class="site-footer">
    &copy; {{ year }} Vue Land &bull; <a href="/guideline">Guideline</a> &bull;
    <a href="https://twitter.com/VueLandDiscord">Twitter</a> &bull;
    <a href="https://github.com/vue-land">GitHub</a>
    <div class="built-with">
      This site is built using <a href="https://saber.land">Saber</a>.
    </div>
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
.site-footer {
  font-size: .7rem;
  color: #52244f;
  padding-top: 30px;
  border-top: 1px solid #e2e2e2;

  a {
    text-decoration: none;
    color: #dd1d64;
  }
}

.built-with {
  font-size: .5rem;
  margin-top: 10px;
}
</style>

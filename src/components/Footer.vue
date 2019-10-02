<template>
  <div class="site-footer">
    &copy; {{ year }} VueLand &bull;
    <saber-link to="/q-and-a">Q&A sessions</saber-link> &bull;
    <saber-link to="/guideline">Guideline</saber-link> &bull;
    <saber-link to="/polls">Polls</saber-link> &bull;
    <a href="https://twitter.com/VueLandDiscord">Twitter</a>
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
  margin-top: 50px;
  font-size: 1.4rem;
  color: #52244f;

  a {
    text-decoration: none;
    color: #dd1d64;
  }
}

.built-with {
  font-size: .85rem;
  margin-top: 10px;
}
</style>

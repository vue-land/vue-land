<template>
  <div class="site-footer">
    &copy; {{ year }} VueLand &bull; <router-link to="/q-and-a">Q&A sessions</router-link> &bull; <router-link to="/guideline">Guideline</router-link> &bull; <router-link to="/polls">Polls</router-link> &bull; <a href="https://twitter.com/VueLandDiscord">Twitter</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
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
</style>

<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <no-ssr><poll-list></poll-list></no-ssr>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import PollList from '../components/PollList.vue'

export default {
  head() {
    return {
      title: 'Polls'
    }
  },
  components: {
    SiteHeader,
    SiteFooter,
    PollList,
    'no-ssr': NoSSR
  }
}
</script>

<style lang="stylus" scoped>

</style>


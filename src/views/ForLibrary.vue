<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <p>
          For popular libraries, we encourage the authors to use a channel on
          our Discord server for users to chat. For example, we have a
          <channel name="nuxtjs" /> channel for Nuxt.js while people might be
          also interested in server-side rendering, so they can use
          <channel name="ssr" /> channel for common SSR topics too.
        </p>
        <p>
          Maybe we can finally have the whole Vue community fit in a single
          place.
        </p>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import Channel from '../components/Channel.vue'

export default {
  head() {
    return {
      title: 'For Library'
    }
  },
  components: {
    SiteHeader,
    SiteFooter,
    Channel
  }
}
</script>

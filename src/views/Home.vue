<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <p>
          We're a chat community of <router-link to="/for-library">library authors, contributors and end users</router-link> from Vue Land.
        </p>
        <p>
          Can you imagine the whole Vue community fit in a single Discord server? Come chat about Vue, JavaScript stuffs or ask for help!
        </p>
      </div>
      <a class="button button-shadow" href="https://discordapp.com/invite/HBherRA">Join us on Discord</a>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'

export default {
  name: 'home',
  head() {
    return {
      meta: [
        {
          name: 'description',
          content: 'A chat community for library authors, contributors, end users on the Vue land.'
        }
      ]
    }
  },
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>

<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <p>
          Like Reactiflux but this is dedicated to <router-link to="/for-library">library</router-link> authors, contributors and end users on Vue Land.
        </p>
        <p>
          Come chat about Vue, JavaScript stuffs or ask for help!
        </p>
      </div>
      <a class="button button-shadow" href="https://discord.gg/eKWPvZ9">Join us on Discord</a>
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
      title: 'Vue Land',
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

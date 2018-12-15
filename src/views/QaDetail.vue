<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content"><component :is="QaContent" /></div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'

export default {
  name: 'q-and-a-detail',
  components: {
    SiteHeader,
    SiteFooter
  },
  computed: {
    QaContent() {
      const id = this.$route.params.slug
      return () => import(`../markdown/q-and-a/${id}.md`)
    }
  }
}
</script>

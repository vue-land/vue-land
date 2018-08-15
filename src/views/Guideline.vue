<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content"><guideline-content /></div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import GuidelineContent from '../markdown/guideline.md'

export default {
  name: 'guideline',
  head: {
    title: 'Guideline'
  },
  components: {
    SiteHeader,
    SiteFooter,
    GuidelineContent
  }
}
</script>

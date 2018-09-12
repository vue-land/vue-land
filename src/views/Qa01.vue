<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content"><qa-content /></div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import QaContent from '../markdown/qa01.md'

export default {
  name: 'q-and-a-01',
  head: {
    title: 'Q&A 01 - Vue CLI 3 with Guillaume Chau and Evan You'
  },
  components: {
    SiteHeader,
    SiteFooter,
    QaContent
  }
}
</script>

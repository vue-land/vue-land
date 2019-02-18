<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="page-title" v-if="page.attributes.title">
        {{ page.attributes.title }}
      </div>
      <div class="site-content"><slot name="default" /></div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import { siteConfig } from 'saber/config'
import SiteHeader from '../components/Header.vue'
import SiteFooter from '../components/Footer.vue'
import Channel from '../components/Channel.vue'
import Guest from '../components/Guest.vue'

export default {
  name: 'layout-page',
  components: {
    SiteHeader,
    SiteFooter,
    Channel,
    Guest
  },
  props: ['page'],
  head() {
    return {
      title: this.page.attributes.title
        ? `${this.page.attributes.title} - ${siteConfig.title}`
        : siteConfig.title,
      meta: [
        {
          name: 'description',
          content: siteConfig.description
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.page-title
  color: #dd1d64
  font-size: 3rem
  font-weight: 700
  margin-bottom: 1.5rem
  line-height: 1.2
</style>

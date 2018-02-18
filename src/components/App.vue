<template>
  <div class="app">
    <media query="(min-width: 768px)">
      <badge slug="egoist/vue-land" />
    </media>
    <router-view />
  </div>
</template>

<script>
import Badge from 'vue-github-badge'
import Media from 'vue-media'

export default {
  head: {
    title: null,
    titleTemplate(title) {
      return title ? `${title} - Vue Land` : 'Vue Land'
    }
  },
  components: {
    Badge,
    Media,
  }
}
</script>

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
    titleTemplate(title) {
      return title ? `${title} - Vue Land` : 'Vue Land'
    },
    meta: [
      {
        name: 'description',
        content: 'A chat community for library authors, contributors, end users on the Vue land.'
      }
    ]
  },
  components: {
    Badge,
    Media,
  }
}
</script>

<template>
  <div id="app">
    <media query="(min-width: 768px)">
      <badge slug="egoist/vue-land" />
    </media>
    <slot />
  </div>
</template>

<script>
import Badge from 'vue-github-badge'
import Media from 'vue-media'

export default {
  components: {
    Badge,
    Media
  }
}
</script>

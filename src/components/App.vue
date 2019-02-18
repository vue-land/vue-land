<template>
  <div id="_saber">
    <media query="(min-width: 768px)"> <badge slug="egoist/vue-land" /> </media>
    <router-view />
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

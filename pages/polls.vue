<template>
  <div class="polls">
    <no-ssr> <poll-list /> </no-ssr>
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr'
import PollList from '#theme/components/PollList.vue'

export const attributes = {
  layout: 'page',
  title: 'Polls'
}

export default {
  components: {
    PollList,
    'no-ssr': NoSSR
  }
}
</script>

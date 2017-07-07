<template>
  <div class="poll-list" v-if="polls.length > 0">
    <div class="poll-item" v-for="poll in polls">
      <h2 class="poll-title">
        <a :href="poll.html_url">{{ getTitle(poll.title) }}</a>
      </h2>
      <div class="poll-body" v-html="toHTML(poll.body)"></div>
    </div>
  </div>
  <svg-icon v-else class="poll-loading" name="hearts"></svg-icon>
</template>

<script>
import axios from 'axios'
import marked from 'marked3'
import SvgIcon from './SvgIcon'

export default {
  name: 'poll-list',
  data() {
    return {
      polls: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    async fetchList() {
      const { data } = await axios.get('https://api.github.com/repos/egoist/vue-land/issues?labels=poll')
      this.polls = data
    },
    toHTML(text) {
      return marked(text)
    },
    getTitle(title) {
      return title.replace(/^\[poll]\s+/, '')
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang="stylus" scoped>
.poll-title
  font-size: 1.25rem

.poll-loading
  >>> svg
    fill: #dd1d64
</style>

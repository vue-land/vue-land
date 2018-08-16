<template>
  <div class="page">
    <div class="tags">
      <router-link
        class="tag"
        :class="{active: state === 'all'}"
        :to="{query: {state: 'all'}}">
        All
      </router-link>
      <router-link
        class="tag"
        :class="{active: state === 'open'}"
        :to="{query: {state: 'open'}}">
        Open
      </router-link>
      <router-link
        class="tag"
        :class="{active: state === 'closed'}"
        :to="{query: {state: 'closed'}}">
        Closed
      </router-link>
    </div>
    <div class="poll-list" v-if="polls.length > 0">
      <div class="poll-item" v-for="poll in polls" :key="poll.id">
        <h2 class="poll-title">
          <a :href="poll.html_url">{{ getTitle(poll.title) }}</a>
        </h2>
        <div class="poll-body" v-html="toHTML(poll.body)"></div>
      </div>
    </div>
    <svg-icon v-if="loading" class="poll-loading" name="hearts"></svg-icon>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked3'
import SvgIcon from './SvgIcon'

export default {
  name: 'poll-list',
  data() {
    return {
      polls: [],
      loading: true
    }
  },
  created() {
    this.fetchList()
  },
  watch: {
    '$route.query.state'() {
      this.fetchList()
    }
  },
  methods: {
    async fetchList() {
      this.loading = true
      const { data } = await axios.get(`https://api.github.com/repos/egoist/vue-land/issues?labels=poll&state=${this.state}`)
      this.polls = data
      this.loading = false
    },
    toHTML(text) {
      return marked(text)
    },
    getTitle(title) {
      return title.replace(/^\[poll]\s+/, '')
    }
  },
  computed: {
    state() {
      return this.$route.query.state || 'all'
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

.poll-body
  font-size: 1rem

.poll-loading
  >>> svg
    fill: #dd1d64

.tags
  display: flex
  margin-bottom: 50px

.tag
  display: flex
  background-color: #e2e2e2
  color: white
  border-radius: 3px
  padding: 5px 10px
  font-size: 17px
  margin-right: 10px
  &:hover
    background-color: #ccc
  &.active
    background-color: #dd1d64
</style>

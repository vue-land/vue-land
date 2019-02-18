<template>
  <div class="q-and-a">
    <p>
      Q&amp;A sessions are the best opportunity to ask your questions directly
      to the stars of Vue.js ecosystem. We're going to organize them once or
      twice a month, on Saturdays, usually at 4pm UTC. Each event will have a
      specific topic and there will be two experts to answer the questions on
      the matter.
    </p>
    <p>
      The events are announced both on the
      <channel name="announcements" /> channel and on our official
      <a href="https://twitter.com/VueLandDiscord">Twitter account</a>.
    </p>

    <p>You can find the transcriptions from our previous events below:</p>
    <p v-for="qa in page.qas" :key="qa.id">
      #{{ leftPad(qa.id) }} -
      <saber-link to="/q-and-a/01-guillaume-chau-evan-you">{{
        qa.title
      }}</saber-link>
      <small>{{ formatDate(qa.date) }}</small>
    </p>
  </div>
</template>

<script>
import tinydate from 'tinydate'
import Channel from '#theme/components/Channel.vue'

const convertDate = tinydate('{YYYY}-{MM}-{DD}')

export const attributes = {
  layout: 'page',
  title: 'Q&A sessions'
}

export default {
  name: 'q-and-a',
  components: {
    Channel
  },
  props: ['page'],
  methods: {
    leftPad(number) {
      return number < 10 ? `0${number}` : number
    },
    formatDate(date) {
      return convertDate(new Date(date))
    }
  }
}
</script>

<style scoped>
small {
  display: block;
}
</style>

<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <h3>Q&amp;A sessions on VueLand</h3>
        <p>Q&amp;A sessions are the best opportunity to ask your questions directly to the stars of Vue.js ecosystem. We're going to organize them once or twice a month, on Saturdays, usually at 4pm UTC. Each event will have a specific topic and there will be two experts to answer the questions on the matter.</p>
        <p>The events are announced both on the <channel name="announcements" /> channel and on our official <a href="https://twitter.com/VueLandDiscord">Twitter account</a>.</p>

        <p>You can find the transcriptions from our previous events below:</p>
        <p>
          #01 - <router-link to="/01-guillaume-chau-evan-you">Vue CLI 3 with Guillaume Chau and Evan You</router-link>
          <small>August the 18th, 2018</small>
        </p>
        <p>
          #02 - <router-link to="/02-damian-dulisz-chris-fritz">Best practices with Damian Dulisz and Chris Fritz</router-link>
          <small>September the 8th, 2018</small>
        </p>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "../components/Header.vue";
import SiteFooter from "../components/Footer.vue";
import Channel from "../components/Channel.vue";

export default {
  name: "q-and-a",
  head: {
    title: "Q&A sessions"
  },
  components: {
    SiteHeader,
    SiteFooter,
    Channel
  }
};
</script>

<style lang="stylus" scoped>
small {
  display: block;
}
</style>

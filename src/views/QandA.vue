<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content">
        <h3>Question & Answers sessions on VueLand</h3>
        <p><router-link to="/q-and-a/01-guillaume-chau-evan-you">#01 - Vue CLI 3 with Guillaume Chau and Evan You</router-link></p>
        <p><router-link to="/q-and-a/02-damian-dulisz-chris-fritz">#02 - Best practices with Damian Dulisz and Chris Fritz</router-link></p>
      </div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "../components/Header.vue";
import SiteFooter from "../components/Footer.vue";

export default {
  name: "q-and-a",
  head: {
    title: "Q&A sessions"
  },
  components: {
    SiteHeader,
    SiteFooter
  }
};
</script>
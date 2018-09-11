<template>
  <div class="page container">
    <site-header />
    <div class="site-main">
      <div class="site-content"><qa-content /></div>
    </div>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "../components/Header.vue";
import SiteFooter from "../components/Footer.vue";
import QaContent from "../markdown/qa02.md";

export default {
  name: "q-and-a-01",
  head: {
    title: "Q&A 02 - best practices with Damian Dulisz and Chris Fritz"
  },
  components: {
    SiteHeader,
    SiteFooter,
    QaContent
  }
};
</script>

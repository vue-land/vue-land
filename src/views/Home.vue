<template>
  <div class="page container">
    <div class="site-brand">
      <span class="site-ins">Welcome to</span>
      <h1 class="site-title">
        Vue Land<sup class="tm">™</sup>
      </h1>
      <div class="site-desc">
        <p>
          Like Reactiflux but this is dedicated to library authors, contributors and end users on Vue Land.
        </p>
        <p>
          Come chat about Vue, JavaScript stuffs or ask for help!
        </p>
      </div>
    </div>
    <div class="site-main">
      <a class="button button-shadow" href="https://discord.gg/eKWPvZ9">Join us on Discord</a>
    </div>
    <div class="site-footer">
      &copy; {{ year }} Vue Land
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  head() {
    return {
      title: 'Vue Land',
      meta: [
        {
          name: 'description',
          content: 'A chat community for library authors, contributors, end users on the Vue land.'
        }
      ]
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped lang="stylus">
.site-brand
  position: relative

.site-title
  color: #4fc08d
  font-size: 7rem
  margin: 0
  font-family: Space Mono
  .tm
    font-family: helvetica
    font-size: 2rem

.site-ins
  color: #dd1d64
  font-size: 1.5rem
  position: absolute
  top: 2.1rem
  left: 5rem
  text-transform: uppercase
  font-weight: 700

.site-desc
  font-size: 1.7rem
  max-width: 80%

.site-main
  margin-top: 50px

.site-footer
  margin-top: 50px
  font-size: 1.4rem
  color: #52244f

@media screen and (max-width: 768px)
  .site-desc
    max-width: 100%
  .site-brand
    margin-top: 20px
  .site-title
    line-height: 1
  .site-ins
    position: initial
</style>

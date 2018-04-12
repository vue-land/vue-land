<template>
  <div class="site-header">
    <span class="site-ins">Welcome to</span>
    <h1 class="site-title">
      <router-link to="/">Vue Land</router-link><sup class="tm">™</sup>
    </h1>
  </div>
</template>

<style lang="stylus" scoped>
.site-header
  position: relative

  .site-title
    color: #4fc08d
    font-size: 7rem
    margin: 0
    font-family: Space Mono
    a
      color: @color
      text-decoration: none
      transition: color .3s ease
    .tm
      font-family: helvetica
      font-size: 2rem
    &:hover
      .tm
        color: #dd1d64

  .site-ins
    color: #dd1d64
    font-size: 1.5rem
    position: absolute
    top: 2.1rem
    left: 5rem
    text-transform: uppercase
    font-weight: 700

@media screen and (max-width: 768px)
  .site-header
    margin-top: 20px
    .site-title
      line-height: 1
    .site-ins
      position: initial
</style>

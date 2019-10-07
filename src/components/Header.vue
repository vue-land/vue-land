<template>
  <div class="site-header">
    <h1 class="site-title">
      <saber-link to="/">Vue Land</saber-link>
    </h1>
    <div class="menu">
      <div class="menu-item">
        <a href="/q-and-a">Q&A</a>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.site-header {
  position: relative;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid #e2e2e2;

  .site-title {
    font-size: inherit;

    a {
      color: #4fc08d;
      margin: 0;
      font-weight: 700;
      text-decoration: none;
    }
  }
}

.menu {
  display: flex;

  a {
    color: #333;

    &.router-link-exact-active {
      color: #dd1d64;
    }
  }
}

.menu-item {
  margin-left: 20px;
}
</style>

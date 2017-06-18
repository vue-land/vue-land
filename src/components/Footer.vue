<template>
  <div class="site-footer">
    &copy; {{ year }} Vue Land
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

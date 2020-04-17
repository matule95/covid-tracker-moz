<template>
  <div class="flex min-h-screen antialiased bg-brown-light">
    <div style="max-width: 82px;" class="w-full fixed left-0 z-40">
      <side-bar class="inset-y-0 sticky h-screen w-full"></side-bar>
    </div>
    <div class="py-16 ml-32 flex-1 max-w-full">
      <nuxt />
    </div>
  </div>
</template>
<script>
import SideBar from '~/components/Sidebar'
export default {
  components: {
    SideBar
  }
}
</script>
<style>
html {
  font-family: 'CircularStd', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

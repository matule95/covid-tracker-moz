<template>
  <div class="flex min-h-screen antialiased bg-brown-light">
    <div
      style="max-width: 82px;"
      class="w-full fixed left-0 z-40 hidden lg:block"
    >
      <side-bar class="inset-y-0 sticky h-screen w-full"></side-bar>
    </div>
    <div class="py-16 lg:ml-32 px-5 lg:px-0 flex-1 max-w-full">
      <nuxt />
    </div>
    <div style="max-width: 420px; right: 0;" class="w-full fixed right-0 z-40">
      <cases-info class="h-screen w-full pt-16 px-6"></cases-info>
    </div>
  </div>
</template>
<script>
import SideBar from '../components/SideBar'
import CasesInfo from '../components/CasesInfo'
export default {
  components: {
    SideBar,
    CasesInfo
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

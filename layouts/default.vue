<template>
  <div class="flex min-h-screen antialiased bg-brown-light">
    <div class="py-16 lg:ml-8 xl:mx-16 px-5 lg:px-0 flex-1 max-w-full">
      <nuxt />
    </div>
  </div>
</template>
<script>
export default {}
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
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background-color: #282b2e;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb {
  background-color: #f6c879;
  border-radius: 50px;
}
</style>

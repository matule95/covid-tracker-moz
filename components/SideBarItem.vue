<template>
  <nuxt-link
    to="/"
    class="flex flex-col items-center justify-center cursor-pointer py-4 w-full hover:bg-brown-light"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SideBarItem'
}
</script>

<style>
a.nuxt-link-active {
  @apply border-r-4 border-gold text-white;
}
</style>

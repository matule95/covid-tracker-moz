<template>
  <section class="container h-full">
    <div class="flex flex-wrap flex-col h-full">
      <div class="w-full">
        <h2 class="text-white">Coronavirus COVID-19</h2>
      </div>
      <div class="w-full mt-2">
        <p class="text-white">Global Cases</p>
      </div>
      <div class="w-full my-12">
        <statistics></statistics>
      </div>
      <div class="w-full flex-grow">
        <maps></maps>
      </div>
    </div>
  </section>
</template>

<script>
import Statistics from '~/components/Statistics'
import Maps from '~/components/Maps'
export default {
  components: {
    Statistics,
    Maps
  },
  async fetch({ store }) {
    await store.dispatch('locations/fetchItems')
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

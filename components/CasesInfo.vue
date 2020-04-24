<template>
  <div class="bg-brown flex flex-wrap flex-col">
    <h2 class="text-gold font-semibold">Evolução dos Casos</h2>
    <div class="w-full">
      <Chart class="pt-4" />
    </div>
  </div>
</template>

<script>
import Chart from '~/components/Chart'
export default {
  components: {
    Chart
  }
}
</script>

<style></style>

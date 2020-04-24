<template>
  <div class="bg-brown flex flex-wrap flex-col">
    <div class="w-full">
      <h3 class="text-white">Situação Moçambique</h3>
    </div>
    <div class="w-full mt-2">
      <p class="text-white">
        Actualizado à: <span class="text-gold">16h20 – 20/04/2020</span>
      </p>
    </div>
    <div class="w-full my-5">
      <calendar></calendar>
    </div>
    <div class="w-full">
      <chart />
    </div>
  </div>
</template>

<script>
import Calendar from '~/components/Calendar'
import Chart from '~/components/Chart'
export default {
  components: {
    Calendar,
    Chart
  }
}
</script>

<style></style>

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
      <date-picker></date-picker>
    </div>
  </div>
</template>

<script>
import DatePicker from '~/components/DatePicker'
export default {
  components: {
    DatePicker
  }
}
</script>

<style></style>

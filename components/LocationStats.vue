<template>
  <div class="flex flex-wrap flex-row">
    <div
      v-for="place in places"
      :key="place.name"
      class="w-full flex flex-wrap flex-row my-1"
    >
      <div class="w-2/3 text-white flex flex-wrap items-center">
        <img
          :alt="`${place.name} Country Flag`"
          :src="place.flag"
          width="25px"
          height="25px"
          class="rounded-full"
        />
        <span class="pl-5">{{ place.name }} </span>
        <span v-if="place.todayCases !== 0" class="pl-2 text-gold text-xs"
          >+{{ formatNumbers(place.todayCases) }}
        </span>
      </div>
      <div class="w-1/3 text-white text-center">
        {{ formatNumbers(place.cases) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    places: {
      type: [Array, Object],
      required: true
    }
  },
  methods: {
    formatNumbers(value) {
      return new Intl.NumberFormat('es-ES').format(value)
    }
  }
}
</script>

<style></style>

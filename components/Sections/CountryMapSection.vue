<template>
  <div class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-128 xl:h-auto my-5">
    <client-only>
      <maps :locations="mapGEOJSON" class="z-30"></maps>
    </client-only>
    <div class="text-gold text-xs pt-3">
      {{ $t('countryMapSection.yellowNote') }}
      <div class="w-full flex flex-row flex-wrap">
        <span class="w-5 h-5 bg-red">&nbsp;</span>
        <span class="text-white text-xs self-center pl-1">{{
          $t('countryMapSection.infected')
        }}</span>
      </div>
      <div class="w-full flex flex-row flex-wrap my-1">
        <span class="w-5 h-5 bg-grey">&nbsp;</span>
        <span class="text-white text-xs self-center pl-1">{{
          $t('countryMapSection.deaths')
        }}</span>
      </div>
      <div class="w-full flex flex-row flex-wrap">
        <span class="w-5 h-5 bg-green">&nbsp;</span>
        <span class="text-white text-xs self-center pl-1">{{
          $t('countryMapSection.recovered')
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Maps: () => (process.client ? import('~/components/Maps.vue') : null)
  },
  data: () => ({
    mozGeoJson: require('~/map'),
    provinces: require('~/provinces')
  }),
  computed: {
    mapGEOJSON() {
      const geoJson = {
        type: 'FeatureCollection',
        features: this.mozGeoJson.features.concat(
          this.$store.state.statistics.dailyInformation[0].province_stats.map(
            province => {
              const position = this.provinces.provinces.find(
                item => item.name === province.province
              )
              return {
                type: 'Feature',
                properties: {
                  ...province
                },
                geometry: {
                  type: 'Point',
                  coordinates: [position.lng, position.lat]
                }
              }
            }
          )
        )
      }
      return geoJson
    }
  }
}
</script>

<style></style>

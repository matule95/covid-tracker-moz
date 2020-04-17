<template>
  <div ref="map-wrap" style="width: 100%; height: 100%">
    <l-map :zoom="2" :center="[21.12549763660629, 27.773437500000004]">
      <l-tile-layer
        url="https://api.mapbox.com/styles/v1/matule/ck94rgiyu21wy1itbehq23za6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dWxlIiwiYSI6ImNrOTRyZTFkZTAya3gzbHFwOHgxN3ViYWMifQ.l_H5aQ85wmhyMEK0qFwf2A"
      ></l-tile-layer>
      <l-marker :lat-lng="[-25.9692, 32.5732]"></l-marker>
    </l-map>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$L)
  }
}
</script>

<style></style>

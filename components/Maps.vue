<template>
  <l-map :zoom="2" :center="[21.12549763660629, 27.773437500000004]">
    <l-tile-layer
      url="https://api.mapbox.com/styles/v1/matule/ck94rgiyu21wy1itbehq23za6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dWxlIiwiYSI6ImNrOTRyZTFkZTAya3gzbHFwOHgxN3ViYWMifQ.l_H5aQ85wmhyMEK0qFwf2A"
    ></l-tile-layer>
    <!-- <l-marker :lat-lng="[-25.9692, 32.5732]"></l-marker> -->
    <l-geo-json :geojson="locations" :options="options"></l-geo-json>
  </l-map>
</template>

<script>
export default {
  props: {
    locations: {
      type: Object,
      required: true
    }
  },
  computed: {
    options() {
      return {
        pointToLayer: this.pointToLayer
        // onEachFeature: this.onEachFeatureFunction
      }
    },
    pointToLayer() {
      return (feature, latlng) => {
        const { properties = {} } = feature
        let updatedFormatted
        let casesString

        const { country, updated, cases, deaths, recovered } = properties

        casesString = `${cases}`

        if (cases > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`
        }

        if (updated) {
          updatedFormatted = new Date(updated).toLocaleString()
        }

        const html = `
      <span class="icon-marker">
        <span class="icon-marker-tooltip">
          <h2>${country}</h2>
          <ul>
            <li><strong>Confirmed:</strong> ${cases}</li>
            <li><strong>Deaths:</strong> ${deaths}</li>
            <li><strong>Recovered:</strong> ${recovered}</li>
            <li><strong>Last Update:</strong> ${updatedFormatted}</li>
          </ul>
        </span>
        ${casesString}
      </span>
    `

        return this.$L.marker(latlng, {
          icon: this.$L.divIcon({
            className: 'icon',
            html
          }),
          riseOnHover: true
        })
      }
    }
    // onEachFeatureFunction() {
    //   return (feature, layer) => {
    //     layer.bindTooltip(
    //       `<div class="flex flex-wrap px-6 py-3 text-2xl bg-gold" style="font-family: CircularStd">
    //     <div class="w-full">
    //      <img class="w-5" src="${feature.properties.countryInfo.flag}" />${feature.properties.country}
    //     </div>
    //     <div class="w-full">
    //     <span class="text-red font-bold">${feature.properties.cases}</span> Infectados
    //     </div>
    //     </div>`,
    //       { permanent: false, sticky: true, opacity: 1 }
    //     )
    //   }
    // }
  }
}
</script>

<style lang="scss">
.icon-marker {
  font-family: CircularStd;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: white;
  width: 3.6em;
  height: 3.6em;
  font-size: 0.8em;
  font-weight: bold;
  @apply bg-red;
  border-radius: 100%;
  &:hover {
    .icon-marker-tooltip {
      display: block;
    }
  }
}

.icon-marker-tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  width: 16em;
  font-size: 1.4em;
  padding: 1em;
  background-color: blue;
  border-radius: 0.4em;
  margin-bottom: 1em;
  box-shadow: 0 3px 5px rgba(black, 0.9);

  &:before {
    display: block;
    position: absolute;
    bottom: -0.6em;
    left: 50%;
    content: '';
    width: 1.4em;
    height: 1.4em;
    background-color: blue;
    transform: rotate(45deg);
    margin-left: -0.7em;
  }

  h2 {
    font-size: 1.5em;
    line-height: 1.2;
    margin-bottom: 0.1em;
    margin-top: 0;
  }

  h3 {
    font-size: 1.2em;
    margin: 0.1em 0;
    font-weight: normal;
    color: gray;
  }

  ul,
  p {
    font-weight: normal;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0.6em 0 0;
  }
}
</style>

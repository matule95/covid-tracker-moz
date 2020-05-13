<template>
  <client-only>
    <l-map :zoom="5" :center="[-18.6696553, 35.5273354]">
      <l-tile-layer
        url="https://api.mapbox.com/styles/v1/matule/ck94rgiyu21wy1itbehq23za6/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWF0dWxlIiwiYSI6ImNrOTRyZTFkZTAya3gzbHFwOHgxN3ViYWMifQ.l_H5aQ85wmhyMEK0qFwf2A"
      ></l-tile-layer>
      <!-- <l-marker :lat-lng="[-25.9692, 32.5732]"></l-marker> -->
      <l-geo-json
        :geojson="locations"
        :options="options"
        :options-style="mapStyles"
      ></l-geo-json>
    </l-map>
  </client-only>
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
    mapStyles() {
      return {
        weight: 2,
        color: '#F6C879',
        opacity: 1,
        fillColor: '#F6C879',
        fillOpacity: 0.1
      }
    },
    pointToLayer() {
      return (feature, latlng) => {
        const { properties = {} } = feature
        const { confirmed } = properties
        let html = ''
        if (confirmed > 0) {
          html = `
      <span class="icon-marker ${confirmed > 0 ? 'bg-red' : 'bg-blue'}">
        ${confirmed}
      </span>
    `
        }

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
  border-radius: 100%;
  &:hover {
    .icon-marker-tooltip {
      display: block;
    }
  }
}

// .icon-marker-tooltip {
//   display: none;
//   position: absolute;
//   bottom: 100%;
//   width: 16em;
//   font-size: 1.4em;
//   padding: 1em;
//   // background-color: blue;
//   border-radius: 0.4em;
//   margin-bottom: 1em;
//   box-shadow: 0 3px 5px rgba(black, 0.9);

//   &:before {
//     display: block;
//     position: absolute;
//     bottom: -0.6em;
//     left: 50%;
//     content: '';
//     width: 1.4em;
//     height: 1.4em;
//     background-color: blue;
//     transform: rotate(45deg);
//     margin-left: -0.7em;
//   }
//   &.hasCases {
//     @apply bg-red;
//     :before {
//       display: block;
//       position: absolute;
//       bottom: -0.6em;
//       left: 50%;
//       content: '';
//       width: 1.4em;
//       height: 1.4em;
//       @apply bg-red;
//       transform: rotate(45deg);
//       margin-left: -0.7em;
//     }
//   }
//   &.noCases {
//     @apply bg-blue;
//     :before {
//       display: block;
//       position: absolute;
//       bottom: -0.6em;
//       left: 50%;
//       content: '';
//       width: 1.4em;
//       height: 1.4em;
//       @apply bg-red;
//       transform: rotate(45deg);
//       margin-left: -0.7em;
//       @apply bg-blue;
//     }
//   }

//   h2 {
//     font-size: 1.5em;
//     line-height: 1.2;
//     margin-bottom: 0.1em;
//     margin-top: 0;
//   }

//   h3 {
//     font-size: 1.2em;
//     margin: 0.1em 0;
//     font-weight: normal;
//     color: gray;
//   }

//   ul,
//   p {
//     font-weight: normal;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0.6em 0 0;
//   }
// }
</style>

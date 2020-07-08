<template>
  <l-map :zoom="6" :center="[-18.6696553, 35.5273354]" :max-bounds="maxBounds">
    <l-tile-layer
      url="https://api.mapbox.com/styles/v1/hozzah95/ckcceqz5l0yo71io91yjt0ypu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaG96emFoOTUiLCJhIjoiY2tjY2VoY2Z0MDN4OTJ0cGdxbDAxcXJ0ZSJ9.y1SsevyWmOJmcOUhpri9Og"
    ></l-tile-layer>
    <!-- <l-marker :lat-lng="[-25.9692, 32.5732]"></l-marker> -->
    <l-geo-json
      :geojson="locations"
      :options="options"
      :options-style="mapStyles"
    ></l-geo-json>
  </l-map>
</template>

<script>
import { latLngBounds } from 'leaflet'
export default {
  props: {
    locations: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    bounds: latLngBounds([
      [-28.875855, 29.273413],
      [-10.36705, 42.954591]
    ]),
    maxBounds: latLngBounds([
      [-28.875855, 29.273413],
      [-10.36705, 42.954591]
    ])
  }),
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
        const { confirmed, deaths, recovered, province } = properties
        let html = ''
        if (confirmed > 0) {
          html = `
          <div class="marker flex flex-row flex-wrap rounded-lg">
            <div class="marker--confirmed px-2 w-1/3 rounded-tl-lg"> ${confirmed}</div>
            <div class="marker--deaths px-2 w-1/3 text-black"> ${deaths} </div>
            <div class="marker--recovered px-2 w-1/3 rounded-tr-lg"> ${recovered} </div>
            <div class="w-full truncate bg-white text-black text-xs rounded-b-lg text-center" style="font-size:0.65rem">${province}</div>
          </div>
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
.marker {
  font-family: CircularStd;
  width: 120px;
  height: 3.6em;
  color: white;
  font-weight: bold;
  // display: flex;
  // flex-direction: row;
  border-radius: 10px;
  padding: 10px;
}
.marker--confirmed {
  @apply bg-red;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.marker--deaths {
  @apply bg-grey;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.marker--recovered {
  @apply bg-green;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
  // border-radius: 100%;
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

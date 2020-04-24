<template>
  <section class="container h-full">
    <div class="flex flex-wrap flex-col h-full">
      <div class="flex-initial w-full mb-2">
        <h2 class="text-white">Coronavirus COVID-19</h2>
      </div>
      <div class="w-full mt-2">
        <p class="text-white">
          Global Cases (Latest Update: {{ latestUpdate }})
        </p>
      </div>
      <div class="w-full my-5">
        <statistics :stats="dashboardStats"></statistics>
      </div>
      <div class="w-full flex-grow flex flex-row flex-wrap">
        <div class="w-full xl:w-2/3 flex-grow h-64 xl:h-auto">
          <maps :locations="mapGEOJSON" class="z-30"></maps>
        </div>
        <div class="flex flex-wrap flex-row w-full xl:w-1/3 xl:pl-5">
          <div class="w-full mt-5 lg:mt-0 mb-2">
            <span class="text-white font-bold"
              >Distribuição <span class="text-gold">Provincial</span> 📍</span
            >
          </div>
          <div class="w-full overflow-y-auto mt-3 mb-5">
            <location-stats :places="localPlaces"></location-stats>
          </div>
          <div class="w-full mb-5">
            <span class="text-white font-bold"
              >Resumo <span class="text-gold">Global</span> 🌍</span
            >
          </div>
          <div class="w-full overflow-y-auto h-64">
            <location-stats :places="places"></location-stats>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Statistics from '~/components/Statistics'
import LocationStats from '~/components/LocationStats'
import Maps from '~/components/Maps'
export default {
  components: {
    Statistics,
    Maps,
    LocationStats
  },
  data: () => ({
    mozGeoJson: null,
    provinces: [
      {
        name: 'Maputo',
        lat: -25.974873,
        lng: 32.581416,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Sofala',
        lat: -19.84361,
        lng: 34.83889,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Manica',
        lat: -19.11639,
        lng: 33.48333,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Gaza',
        lat: -25.05194,
        lng: 33.64417,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Inhambane',
        lat: -23.865,
        lng: 35.38333,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Tete',
        lat: -16.15639,
        lng: 33.58667,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Zambézia',
        lat: -17.87861,
        lng: 36.88833,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Nampula',
        lat: -15.11646,
        lng: 39.2666,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Niassa',
        lat: -13.31278,
        lng: 35.24056,
        totalCases: 10,
        deaths: 0
      },
      {
        name: 'Cabo Delgado',
        lat: -12.97395,
        lng: 40.51775,
        totalCases: 10,
        deaths: 0
      }
    ]
  }),
  computed: {
    mapData() {
      const geoJson = {
        type: 'FeatureCollection',
        features: this.$store.state.locations.all.map((country = {}) => {
          const { countryInfo = {} } = country
          const { lat, long: lng } = countryInfo
          return {
            type: 'Feature',
            properties: {
              ...country
            },
            geometry: {
              type: 'Point',
              coordinates: [lng, lat]
            }
          }
        })
      }
      return geoJson
    },
    dashboardStats() {
      return this.$store.state.statistics.all
    },
    latestUpdate() {
      return new Date(this.dashboardStats.updated).toLocaleString()
    },
    places() {
      return this.$store.state.locations.all
        .map(item => {
          return {
            name: item.country,
            cases: item.cases,
            flag: item.countryInfo.flag,
            todayCases: item.todayCases
          }
        })
        .sort((a, b) => (a.cases > b.cases ? -1 : 1))
    },
    localPlaces() {
      const provinces = [
        {
          name: 'Cabo Delgado',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Niassa',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Nampula',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Zambézia',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Tete',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Sofala',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Manica',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Inhambane',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Gaza',
          cases: 12,
          todayCases: 5
        },
        {
          name: 'Maputo',
          cases: 12,
          todayCases: 5
        }
      ]
      return provinces
    },
    mapGEOJSON() {
      const geoJson = {
        type: 'FeatureCollection',
        features: this.mozGeoJson.features.concat(
          this.provinces.map(province => {
            return {
              type: 'Feature',
              properties: {
                ...province
              },
              geometry: {
                type: 'Point',
                coordinates: [province.lng, province.lat]
              }
            }
          })
        )
      }
      return geoJson
    }
  },
  head() {
    return {
      title: 'Início - Rastreador COVID-19 Moçambique',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Rastreador do COVID-19 para Moçambique 🇲🇿'
        },
        {
          name: 'title',
          content: 'Inicio - Rastreador do COVID-19 para Moçambique 🇲🇿'
        }
      ]
    }
  },
  async asyncData({ axios }) {
    const response = await fetch(
      'https://raw.githubusercontent.com/matule95/covid-tracker-moz/master/map.geojson'
    )
    const geoJSON = await response.json()
    return {
      mozGeoJson: geoJSON
    }
  },
  async fetch({ store }) {
    await store.dispatch('locations/fetchItems')
    await store.dispatch('statistics/fetchItems')
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

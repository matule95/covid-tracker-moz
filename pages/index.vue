<template>
  <section class="container h-full" style="max-width: 100%">
    <div class="flex flex-wrap flex-col h-full">
      <div class="flex-initial w-full mb-2">
        <h2 class="text-white">COVID-19 - Moçambique</h2>
      </div>
      <div class="w-full mt-2">
        <p class="text-white">
          {{ latestUpdate }} - Fonte:
          <a class="text-gold" href="https://covid19.ins.gov.mz/">INS</a>
        </p>
      </div>
      <div class="w-full my-5">
        <statistics :stats="dashboardStats"></statistics>
      </div>
      <div class="w-full flex-grow flex flex-row flex-wrap">
        <div
          class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-64 xl:h-auto my-5 hidden xl:block"
        >
          <maps :locations="mapGEOJSON" class="z-30"></maps>
          <span class="text-gold text-xs pt-3"
            >*Os pontos no mapa não representam localização exacta dos
            casos</span
          >
        </div>
        <div
          class="flex flex-wrap flex-row w-full  xl:w-2/3 xxl:w-2/3 xl:pl-5 mt-5"
        >
          <div
            class="flex flex-wrap flex-row w-full my-5 order-3 xl:order-1 overallChart"
          >
            <chart style="width: 100%" />
          </div>
          <div
            class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-64 xl:h-auto my-5 block xl:hidden provincesMap"
          >
            <maps :locations="mapGEOJSON" class="z-30"></maps>
            <span class="text-gold text-xs pt-3"
              >*Os pontos no mapa não representam localização exacta dos
              casos</span
            >
          </div>
          <div class="w-full md:w-1/2 mt-5 mb-2 order-1 xl:order-2 provinces">
            <span class="text-white font-bold"
              >Distribuição <span class="text-gold">Provincial</span> 📍</span
            >
            <location-stats
              :places="localPlaces"
              class="w-full mt-3 mb-5"
            ></location-stats>
          </div>
          <div class="w-full md:w-1/2 mt-5 order-2 xl:order-3 nearbyCountries">
            <span class="text-white font-bold"
              >Países <span class="text-gold">Vizinhos</span> 🌍</span
            >
            <location-stats
              :places="places"
              class="w-full mt-3 mb-5"
            ></location-stats>
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
import Chart from '~/components/Chart'
export default {
  components: {
    Statistics,
    Maps,
    LocationStats,
    Chart
  },
  data: () => ({
    mozGeoJson: null,
    provinces: [
      {
        name: 'Maputo',
        lat: -25.974873,
        lng: 32.581416,
        totalCases: 15,
        deaths: 0
      },
      {
        name: 'Sofala',
        lat: -19.84361,
        lng: 34.83889,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Manica',
        lat: -19.11639,
        lng: 33.48333,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Gaza',
        lat: -25.05194,
        lng: 33.64417,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Inhambane',
        lat: -23.865,
        lng: 35.38333,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Tete',
        lat: -16.15639,
        lng: 33.58667,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Zambézia',
        lat: -17.87861,
        lng: 36.88833,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Nampula',
        lat: -15.11646,
        lng: 39.2666,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Niassa',
        lat: -13.31278,
        lng: 35.24056,
        totalCases: 0,
        deaths: 0
      },
      {
        name: 'Cabo Delgado',
        lat: -12.97395,
        lng: 40.51775,
        totalCases: 45,
        deaths: 0
      }
    ],
    neighbourCountries: [
      'South Africa',
      'Tanzania',
      'Swaziland',
      'Zimbabwe',
      'Malawi',
      'Zambia'
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
      const statistics = this.$store.state.statistics.all.stats
      return {
        tested: statistics[2].total,
        infected: statistics[4].total,
        active:
          Number.parseInt(statistics[4].total) -
          Number.parseInt(statistics[7].total),
        deaths: statistics[6].total,
        recovered: statistics[7].total,
        local_transmission: '62',
        foreign_transmission: '8'
      }
    },
    latestUpdate() {
      return this.$store.state.statistics.all.date
    },
    places() {
      return this.$store.state.locations.all
        .map(item => {
          return {
            name: item.country,
            cases: item.cases,
            flag: item.countryInfo.flag,
            todayCases: item.todayCases,
            continent: item.continent
          }
        })
        .filter(item => this.neighbourCountries.includes(item.name))
        .sort((a, b) => (a.cases > b.cases ? -1 : 1))
    },
    localPlaces() {
      const provinces = [
        {
          name: 'Cabo Delgado',
          cases: 45,
          todayCases: 5,
          flag: '/icons/cabodelgado.svg'
        },
        {
          name: 'Niassa',
          cases: 0,
          todayCases: 0,
          flag: '/icons/niassa.svg'
        },
        {
          name: 'Nampula',
          cases: 0,
          todayCases: 0,
          flag: '/icons/nampula.svg'
        },
        {
          name: 'Zambézia',
          cases: 0,
          todayCases: 0,
          flag: '/icons/zambezia.svg'
        },
        {
          name: 'Tete',
          cases: 0,
          todayCases: 0,
          flag: '/icons/sofala.svg'
        },
        {
          name: 'Sofala',
          cases: 0,
          todayCases: 0,
          flag: '/icons/sofala.svg'
        },
        {
          name: 'Manica',
          cases: 0,
          todayCases: 0,
          flag: '/icons/manica.svg'
        },
        {
          name: 'Inhambane',
          cases: 0,
          todayCases: 0,
          flag: '/icons/inhambane.svg'
        },
        {
          name: 'Gaza',
          cases: 0,
          todayCases: 0,
          flag: '/icons/gaza.svg'
        },
        {
          name: 'Província de Maputo',
          cases: 12,
          flag: '/icons/maputo.svg',
          todayCases: 5
        },
        {
          name: 'Maputo',
          cases: 15,
          flag: '/icons/maputo.svg',
          todayCases: 5
        }
      ]
      return provinces.sort((a, b) => (a.cases > b.cases ? -1 : 1))
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
.provincesMap {
  order: 2;
}
.overallChart {
  order: 1;
}
.provinces {
  order: 3;
}
.nearbyCountries {
  order: 4;
}
@media (min-width: 1399px) {
  .overallChart {
    order: 1;
  }
  .provinces {
    order: 2;
  }
  .nearbyCountries {
    order: 3;
  }
}
</style>

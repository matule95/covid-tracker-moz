<template>
  <div>
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
            class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-128 xl:h-auto my-5 hidden xl:block"
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
              class="flex flex-wrap flex-row w-full my-5 xl:mt-0 order-3 xl:order-1 overallChart"
            >
              <span class="text-white font-bold mb-5"
                >Progressos dos <span class="text-gold">Casos</span> 📈</span
              >
              <chart :info="chartData" style="width: 100%" />
            </div>
            <div
              class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-128 xl:h-auto my-10 block xl:hidden provincesMap"
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
            <div
              class="w-full md:w-1/2 mt-5 order-2 xl:order-3 nearbyCountries"
            >
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
    <div
      class="flex flex-col flex-wrap w-full justify-center items-center bg-brown mt-16 pb-20 px-5"
    >
      <div class="w-full flex justify-center mt-10">
        <img src="/Gladiator.png" width="250px" height="170px" />
      </div>
      <h2 class="mt-5 text-gold text-center">
        Ajude-nos a combater o COVID-19!
      </h2>
      <span
        class="mt-5 text-white w-full lg:w-1/2 text-center"
        style="line-height: 2.1rem;"
      >
        Além dos
        <a class="text-gold" href="https://covid19.ins.gov.mz/prevencao/"
          >métodos de prevenção indicados pelo INS</a
        >, a nossa única maneira de ajudar a impedir a propagação do COVID-19 é
        através da codificação de aplicativos. Essa é a parte mais fácil. O
        difícil é obter informações locais confiáveis portanto precisamos da sua
        ajuda para que possamos manter as pessoas conscientes do que está a
        acontecer.<br />
        Contacte-nos em:
        <a class="text-gold" href="mailto:covidmozinfo@gmail.com"
          >covidmozinfo@gmail.com</a
        >
      </span>
    </div>
  </div>
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
    mozGeoJson: require('~/map'),
    provinces: require('~/provinces'),
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
      return this.$store.state.statistics.dailyInformation[0].province_stats.map(
        province => {
          const yesterday = this.$store.state.statistics.dailyInformation[1].province_stats.find(
            item => item.province === province.province
          )
          return {
            name: province.province,
            cases: province.confirmed,
            flag: this.getFlag(province.province),
            todayCases: Number.parseInt(
              Number.parseInt(province.confirmed) -
                Number.parseInt(yesterday.confirmed)
            )
          }
        }
      )
    },
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
    },
    chartData() {
      return this.$store.state.statistics.dailyInformation
    }
  },
  async fetch({ store }) {
    await store.dispatch('locations/fetchItems')
    await store.dispatch('statistics/fetchItems')
    await store.dispatch('statistics/fetchDailyInformation')
  },
  methods: {
    getFlag(province) {
      const flags = {
        'Cabo Delgado': `/icons/cabodelgado.svg`,
        Niassa: `/icons/niassa.svg`,
        Nampula: `/icons/nampula.svg`,
        Zambézia: `/icons/zambezia.svg`,
        Sofala: `/icons/sofala.svg`,
        Manica: `/icons/manica.svg`,
        Tete: `/icons/tete.svg`,
        Gaza: `/icons/gaza.svg`,
        Inhambane: `/icons/inhambane.svg`,
        'Província de Maputo': `/icons/maputo.svg`,
        'Cidade de Maputo': `/icons/maputo.svg`
      }

      return flags[province]
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

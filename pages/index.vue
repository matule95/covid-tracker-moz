<template>
  <div>
    <section class="container h-full pb-5" style="max-width: 100%">
      <div class="flex flex-wrap flex-col h-full">
        <MainStatisticsSection />
        <div
          class="block lg:hidden w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 lg:provinces"
        >
          <span class="text-white font-bold"
            >Distribuição <span class="text-gold">Provincial</span> 📍</span
          >
          <div class="w-full mt-3 mb-5 overflow-auto">
            <province-distribution :provinces="localPlaces" />
          </div>
        </div>
        <div class="w-full flex-grow flex flex-row flex-wrap">
          <div
            class="w-full xl:w-1/3 xxl:w-1/3 flex-grow h-128 xl:h-auto my-5 hidden xl:block"
          >
            <client-only>
              <maps :locations="mapGEOJSON" class="z-30"></maps>
            </client-only>
            <div class="text-gold text-xs pt-3">
              *Os pontos no mapa não representam localização exacta dos casos
              <div class="w-full flex flex-row flex-wrap">
                <span class="w-5 h-5 bg-red">&nbsp;</span>
                <span class="text-white text-xs self-center pl-1"
                  >Infectados</span
                >
              </div>
              <div class="w-full flex flex-row flex-wrap my-1">
                <span class="w-5 h-5 bg-grey">&nbsp;</span>
                <span class="text-white text-xs self-center pl-1">Óbitos</span>
              </div>
              <div class="w-full flex flex-row flex-wrap">
                <span class="w-5 h-5 bg-green">&nbsp;</span>
                <span class="text-white text-xs self-center pl-1"
                  >Recuperados</span
                >
              </div>
            </div>
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
              <client-only>
                <maps :locations="mapGEOJSON" class="z-30"></maps>
              </client-only>
              <div class="text-gold text-xs pt-3">
                *Os pontos no mapa não representam localização exacta dos casos
                <div class="flex flex-row flex-wrap">
                  <div class="w-full flex flex-row flex-wrap">
                    <span class="w-5 h-5 bg-red">&nbsp;</span>
                    <span class="text-white text-xs self-center pl-1"
                      >Infectados</span
                    >
                  </div>
                  <div class="w-full flex flex-row flex-wrap my-1">
                    <span class="w-5 h-5 bg-grey">&nbsp;</span>
                    <span class="text-white text-xs self-center pl-1"
                      >Óbitos</span
                    >
                  </div>
                  <div class="w-full flex flex-row flex-wrap">
                    <span class="w-5 h-5 bg-green">&nbsp;</span>
                    <span class="text-white text-xs self-center pl-1"
                      >Recuperados</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              class="hidden lg:block w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 provinces"
            >
              <span class="text-white font-bold"
                >Distribuição <span class="text-gold">Provincial</span> 📍</span
              >
              <div class="w-full mt-3 mb-5 overflow-auto">
                <province-distribution :provinces="localPlaces" />
              </div>
            </div>
            <div
              class="w-full flex flex-wrap flex-row lg:w-1/3 mt-24 xl:mt-5 order-2 xl:order-3 nearbyCountries"
            >
              <div class="w-full flex flex-row flex-wrap">
                <span class="text-white font-bold mb-10 text-center w-full"
                  >Distribuição por <span class="text-gold">Sexo</span></span
                >
                <PieChart
                  :chart-data="genderDistribution"
                  class="justify-left h-64 w-full flex flex-wrap justify-center content-center items-center"
                />
              </div>
              <div class="w-full flex flex-row flex-wrap mt-16">
                <span class="text-white font-bold mb-10 text-center w-full"
                  >Distribuição por
                  <span class="text-gold">Nacionalidade</span></span
                >
                <PieChart
                  :chart-data="originDistribution"
                  :background-color="['#F6C879', '#A7D3A6']"
                  class="justify-left h-64 w-full flex flex-wrap justify-center content-center items-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ChartsSection class="w-full h-full pt-5" />
    <FooterSection />
  </div>
</template>

<script>
import ChartsSection from '~/components/Partials/ChartsSection'
import PieChart from '~/components/PieChart'
import ProvinceDistribution from '~/components/ProvinceDistribution'
import MainStatisticsSection from '~/components/Partials/MainStatisticsSection.vue'
import FooterSection from '~/components/Partials/FooterSection.vue'
// import Maps from '~/components/Maps'
import Chart from '~/components/Chart'
export default {
  components: {
    ChartsSection,
    Maps: () => (process.client ? import('~/components/Maps.vue') : null),
    PieChart,
    Chart,
    ProvinceDistribution,
    MainStatisticsSection,
    FooterSection
  },
  data: () => ({
    mozGeoJson: require('~/map'),
    provinces: require('~/provinces')
  }),
  computed: {
    localPlaces() {
      return this.$store.state.statistics.dailyInformation[0].province_stats
        .map(province => {
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
            ),
            active: province.active,
            todayActive: Number.parseInt(
              Number.parseInt(province.active) -
                Number.parseInt(yesterday.active)
            ),
            todayRecovered: Number.parseInt(
              Number.parseInt(province.recovered) -
                Number.parseInt(yesterday.recovered)
            ),
            recovered: province.recovered,
            todayDeaths: Number.parseInt(
              Number.parseInt(province.deaths) -
                Number.parseInt(yesterday.deaths)
            ),
            deaths: province.deaths
          }
        })
        .sort((a, b) => {
          if (Number.parseInt(a.cases) < Number.parseInt(b.cases)) {
            return 1
          }
          if (Number.parseInt(a.cases) > Number.parseInt(b.cases)) {
            return -1
          }
        })
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
    },
    genderDistribution() {
      const newRatioByGender = {
        data: [],
        labels: []
      }
      const gender = this.$store.state.statistics.weeklyInformation
        .genderDistribution
      gender.forEach(item => {
        newRatioByGender.labels.push(item.gender)
        newRatioByGender.data.push(item.cases)
      })
      return newRatioByGender
    },
    originDistribution() {
      const newRatioByOrigin = {
        data: [],
        labels: []
      }
      const gender = this.$store.state.statistics.weeklyInformation
        .originDistribution
      gender.forEach(item => {
        newRatioByOrigin.labels.push(item.gender)
        newRatioByOrigin.data.push(item.cases)
      })
      return newRatioByOrigin
    }
  },
  async fetch({ store }) {
    await store.dispatch('statistics/fetchDailyInformation')
    await store.dispatch('statistics/fetchWeeklyInformation')
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
      title: 'Início - COVID 19 Moçambique',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'COVID 19 em Moçambique 🇲🇿'
        },
        {
          name: 'title',
          content: 'Inicio - COVID 19 em Moçambique 🇲🇿'
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

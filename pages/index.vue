<template>
  <div>
    <section class="container h-full pb-5" style="max-width: 100%">
      <div class="flex flex-wrap flex-col h-full">
        <MainStatisticsSection />
        <ProvinceDistributionSection
          class="block lg:hidden w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 lg:provinces"
        />
        <div class="w-full flex-grow flex flex-row flex-wrap">
          <CountryMapSection class="hidden xl:block" />
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
            <CountryMapSection class="block xl:hidden provincesMap" />
            <ProvinceDistributionSection
              class="hidden lg:block w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 provinces"
            />
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
import CountryMapSection from '~/components/Sections/CountryMapSection.vue'
import FooterSection from '~/components/Sections/FooterSection.vue'
import MainStatisticsSection from '~/components/Sections/MainStatisticsSection.vue'
import ProvinceDistributionSection from '~/components/Sections/ProvinceDistributionSection.vue'

import Chart from '~/components/Chart'
export default {
  components: {
    ChartsSection,
    PieChart,
    Chart,
    CountryMapSection,
    FooterSection,
    MainStatisticsSection,
    ProvinceDistributionSection
  },
  computed: {
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

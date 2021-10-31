<template>
  <div>
    <section class="container h-full pb-5" style="max-width: 100%">
      <div class="flex flex-wrap flex-col h-full">
        <I18NSection class="flex w-full mb-4" />
        <MainStatisticsSection />
        <ProvinceDistributionSection
          class="block lg:hidden w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 lg:provinces"
        />
        <div class="w-full flex-grow flex flex-row flex-wrap">
          <CountryMapSection
            v-if="this.$store.state.statistics.countryMap !== []"
            class="hidden xl:block"
          />
          <div
            class="flex flex-wrap flex-row w-full  xl:w-2/3 xxl:w-2/3 xl:pl-5 mt-5"
          >
            <CasesProgressChartSection
              v-if="chartsData !== []"
              class="order-3 xl:order-1 overallChart"
            />
            <CountryMapSection
              v-if="this.$store.state.statistics.countryMap !== []"
              class="block xl:hidden provincesMap"
            />
            <ProvinceDistributionSection
              class="hidden lg:block w-full lg:w-2/3 mt-24 xl:mt-5 mb-2 order-1 xl:order-2 provinces"
            />
            <GenderAndNationalityChartSection
              v-if="chartsData !== []"
              class="w-full flex flex-wrap flex-row lg:w-1/3 mt-24 xl:mt-5 order-2 xl:order-3 nearbyCountries"
            />
          </div>
        </div>
      </div>
    </section>
    <ChartsSection v-if="chartsData !== []" class="w-full h-full pt-5" />
    <FooterSection />
  </div>
</template>

<script>
import CasesProgressChartSection from '~/components/Sections/CasesProgressChartSection.vue'
import ChartsSection from '~/components/Sections/ChartsSection'
import CountryMapSection from '~/components/Sections/CountryMapSection.vue'
import FooterSection from '~/components/Sections/FooterSection.vue'
import GenderAndNationalityChartSection from '~/components/Sections/GenderAndNationalityChartSection.vue'
import MainStatisticsSection from '~/components/Sections/MainStatisticsSection.vue'
import ProvinceDistributionSection from '~/components/Sections/ProvinceDistributionSection.vue'
import I18NSection from '~/components/Sections/I18NSection.vue'

export default {
  components: {
    CasesProgressChartSection,
    ChartsSection,
    CountryMapSection,
    FooterSection,
    GenderAndNationalityChartSection,
    MainStatisticsSection,
    ProvinceDistributionSection,
    I18NSection
  },
  computed: {
    chartsData() {
      return this.$store.state.statistics.charts
    }
  },
  async fetch({ store }) {
    // await store.dispatch('statistics/fetchAll')
    await store.dispatch('statistics/fetchOverall')
  },
  mounted() {
    this.$store.dispatch('statistics/fetchCharts')
    this.$store.dispatch('statistics/fetchCountryMap')
  },
  head() {
    return {
      title: this.$t('pageHead.title'),
      meta: this.$t('pageHead.meta')
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

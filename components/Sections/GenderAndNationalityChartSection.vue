<template>
  <div>
    <div class="w-full flex flex-row flex-wrap">
      <span class="text-white font-bold mb-10 text-center w-full"
        >{{ $t('genderAndNationalityChartSection.genderSection.whiteTitle') }}
        <span class="text-gold">{{
          $t('genderAndNationalityChartSection.genderSection.goldTitle')
        }}</span></span
      >
      <PieChart
        :chart-data="genderDistribution"
        :labels="$t('genderDistribution.labels')"
        class="justify-left h-64 w-full flex flex-wrap justify-center content-center items-center"
      />
    </div>
    <div class="w-full flex flex-row flex-wrap mt-16">
      <span class="text-white font-bold mb-10 text-center w-full"
        >{{
          $t('genderAndNationalityChartSection.nationalitySection.whiteTitle')
        }}
        <span class="text-gold">{{
          $t('genderAndNationalityChartSection.nationalitySection.goldTitle')
        }}</span></span
      >
      <PieChart
        :chart-data="originDistribution"
        :labels="$t('originDistribution.labels')"
        :background-color="['#F6C879', '#A7D3A6']"
        class="justify-left h-64 w-full flex flex-wrap justify-center content-center items-center"
      />
    </div>
  </div>
</template>

<script>
import PieChart from '~/components/PieChart'
export default {
  components: {
    PieChart
  },
  computed: {
    genderDistribution() {
      return this.$store.state.statistics.all.charts.gender_and_nationality_info
        .gender_distribution
    },
    originDistribution() {
      return this.$store.state.statistics.all.charts.gender_and_nationality_info
        .origin_distribution
    }
  }
}
</script>

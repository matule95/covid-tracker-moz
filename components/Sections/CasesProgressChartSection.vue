<template>
  <div class="flex flex-wrap flex-row w-full my-5 xl:mt-0 ">
    <span class="text-white font-bold mb-5"
      >{{ $t('casesProgressChartSection.whiteTitle') }}
      <span class="text-gold">{{
        $t('casesProgressChartSection.goldTitle')
      }}</span>
      📈</span
    >
    <chart :info="chartData" style="width: 100%" />
  </div>
</template>

<script>
import Chart from '~/components/Chart'

export default {
  components: {
    Chart
  },
  computed: {
    chartData() {
      return this.$store.state.statistics.all.charts.progress_chart_info
    }
  }
}
</script>

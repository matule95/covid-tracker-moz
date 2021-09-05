<template>
  <div>
    <div class="flex-initial w-full mb-2">
      <h2 class="text-white">{{ $t('mainStatistics.title') }}</h2>
    </div>
    <div class="w-full mt-2">
      <p class="text-white">
        {{ $t('mainStatistics.latestUpdate') }}
        {{ dashboardData.last_updated }} {{ $t('mainStatistics.at') }}
        {{ dashboardData.last_updated }} -
        {{ $t('mainStatistics.source') }}
        <a class="text-gold" href="http://www.misau.gov.mz/" target="_blank"
          >MISAU</a
        >
      </p>
    </div>
    <div class="w-full my-5">
      <Statistics :stats="dashboardData" />
      <span class="text-gold text-xs pt-3">{{
        $t('mainStatistics.yellowNote')
      }}</span>
      <span class="flex text-red text-xs pt-3"
        >* {{ dashboardData.other_deaths }}
        {{ $t('mainStatistics.redNote') }}</span
      >
    </div>
  </div>
</template>

<script>
import Statistics from '~/components/Statistics'
export default {
  components: {
    Statistics
  },
  computed: {
    dashboardData() {
      return this.$store.state.statistics.all.dashboard_info.dashboardInfo
    }
  }
}
</script>

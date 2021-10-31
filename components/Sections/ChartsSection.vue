<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap justify-left w-full ">
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >{{ $t('chartSection.ageRange.whiteTitle') }}
        <span class="text-gold"
          >{{ $t('chartSection.ageRange.goldTitle') }}
        </span></span
      >
      <AgeRangeChart
        :chart-data="ageDistributionData"
        class="justify-left w-full pt-10 lg:pt-16"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >{{ $t('chartSection.monthlyTestedPositive.whiteTitleStart') }}
        <span class="text-gold">{{
          $t('chartSection.monthlyTestedPositive.goldTitle')
        }}</span>
        {{ $t('chartSection.monthlyTestedPositive.whiteTitleEnd') }}</span
      >
      <div class="w-full flex flex-end">
        <select-input
          :options="testedAndPositiveYears"
          v-model="testedAndPositiveSelectedYear"
          :label="$t('chartSection.inputLabel')"
        />
      </div>
      <TestedAndPositiveChart
        :chart-data="testedAndPositiveData"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >{{ $t('chartSection.weeklyCases.whiteTitle') }}
        <span class="text-gold">{{
          $t('chartSection.weeklyCases.goldTitle')
        }}</span></span
      >
      <div class="w-full flex flex-end">
        <select-input
          :options="weeklyDistributionYears"
          v-model="weeklyDistributionSelectedYear"
          :label="$t('chartSection.inputLabel')"
        />
      </div>
      <WeeklyCasesChart
        :chart-data="weeklyDistributionData"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-wrap flex-row w-full">
      <span class="text-gold text-xs pt-3">{{
        $t('chartSection.yellowNote')
      }}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import SelectInput from '../SelectInput'
import AgeRangeChart from '~/components/Partials/charts/AgeRangeChart'
import TestedAndPositiveChart from '~/components/Partials/charts/TestedAndPositiveChart'
import WeeklyCasesChart from '~/components/Partials/charts/WeeklyCasesChart'
export default {
  components: {
    SelectInput,
    AgeRangeChart,
    TestedAndPositiveChart,
    WeeklyCasesChart
  },
  data: () => ({
    genders: ['Masculino', 'Feminino'],
    origins: ['Moçambicana', 'Outras'],
    testedAndPositiveSelectedYear: moment().year(),
    weeklyDistributionSelectedYear: moment().year()
  }),
  computed: {
    ageDistributionData() {
      return this.$store.state.statistics.charts.charts.age_chart_info
    },
    testedAndPositiveData() {
      let returnData = {}
      this.$store.state.statistics.charts.charts.tested_and_positive_info.map(
        yearData => {
          if (yearData.year === this.testedAndPositiveSelectedYear) {
            returnData = yearData
          }
        }
      )
      return returnData
    },
    testedAndPositiveYears() {
      const years = []
      this.$store.state.statistics.charts.charts.tested_and_positive_info.map(
        yearData => {
          years.push(yearData.year)
        }
      )
      return years
    },
    weeklyDistributionData() {
      let returnData = {}
      this.$store.state.statistics.charts.charts.weekly_cases_info.map(
        yearData => {
          if (yearData.year === this.weeklyDistributionSelectedYear) {
            returnData = yearData
          }
        }
      )
      return returnData
    },
    weeklyDistributionYears() {
      const years = []
      this.$store.state.statistics.charts.charts.weekly_cases_info.map(
        yearData => {
          years.push(yearData.year)
        }
      )
      return years
    }
  }
}
</script>

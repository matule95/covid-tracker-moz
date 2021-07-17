<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap justify-left w-full ">
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Faixa Etária</span></span
      >
      <AgeRangeChart
        :chart-data="ageDistribution"
        class="justify-left w-full pt-10 lg:pt-16"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Cumulativo de
        <span class="text-gold">Testados e Positivos</span> Mensalmente</span
      >
      <div class="w-full flex flex-end">
        <select-input
          :options="monthlyInformation.years"
          v-model="selectedYear"
          label="Escolha o ano"
        />
      </div>
      <TestedAndPositiveChart
        :chart-data="monthlyInformation"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Casos positivos por <span class="text-gold">Semana</span></span
      >
      <div class="w-full flex flex-end">
        <select-input
          :options="weeklyDistribution.years"
          v-model="selectedYear2"
          label="Escolha o ano"
        />
      </div>
      <WeeklyCasesChart
        :chart-data="weeklyDistribution"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-wrap flex-row w-full">
      <span class="text-gold text-xs pt-3"
        >*Alguns dos gráficos apresentados acima são actualizados no início de
        cada semana e não diariamente.</span
      >
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import SelectInput from '../SelectInput'
import AgeRangeChart from '~/components/Partials/AgeRangeChart'
import TestedAndPositiveChart from '~/components/Partials/TestedAndPositiveChart'
import WeeklyCasesChart from '~/components/Partials/WeeklyCasesChart'
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
    selectedYear: moment().year(),
    selectedYear2: moment().year()
  }),
  computed: {
    weeklyInformation() {
      return this.$store.state.statistics.weeklyInformation
    },
    monthlyDistribution() {
      const chartData = {
        tested: [],
        cases: [],
        labels: []
      }
      const monthly = this.$store.state.statistics.weeklyInformation
        .monthlyDistribution
      monthly.forEach(item => {
        chartData.labels.push(item.month)
        chartData.tested.push(item.tested)
        chartData.cases.push(item.cases)
      })
      return chartData
    },
    ageDistribution() {
      const chartData = {
        data: [],
        labels: []
      }
      const ages = this.$store.state.statistics.weeklyInformation
        .ageDistribution
      ages.forEach(item => {
        chartData.labels.push(item.age)
        chartData.data.push(item.cases)
      })
      return chartData
    },
    positivityDistribution() {
      const chartData = {
        data: [],
        labels: []
      }
      const data = this.$store.state.statistics.weeklyInformation
        .positivityDistribution
      data.forEach(item => {
        chartData.labels.push(item.week)
        chartData.data.push(item.cases)
      })
      return chartData
    },
    monthlyInformation() {
      const data = this.$store.state.statistics.dailyInformation.map(
        (dailyInfo, index) => {
          const stats = this.$store.state.statistics.dailyInformation
          const daily = {}
          const yesterday =
            // eslint-disable-next-line camelcase
            // eslint-disable-next-line camelcase
            stats[index + 1]?.country_stats || 0
          daily.date = dailyInfo.date
          daily.tested =
            parseInt(dailyInfo.country_stats.tested) -
            parseInt(yesterday?.tested)
          daily.infected = parseInt(dailyInfo.country_stats.infected)
          daily.cases =
            parseInt(dailyInfo.country_stats.infected) -
            parseInt(yesterday?.infected)
          return daily
        }
      )
      const monthlyData = []
      data.reverse().forEach(daily => {
        const date = daily.date.split('/')
        const newDate = date[1] + '/' + date[0] + '/' + date[2]
        const month = new Date(newDate).getMonth()
        const year = new Date(newDate).getFullYear()
        const monthName = new Intl.DateTimeFormat('pt', {
          month: 'short'
        }).format(new Date(newDate))
        const index = monthlyData.findIndex(
          mt => mt.month === month && mt.year === year
        )
        if (index !== -1) {
          monthlyData[index].tested += daily.tested || 0
          monthlyData[index].infected += daily.cases || 0
        } else {
          monthlyData.push({
            month,
            monthName,
            year,
            tested: daily.tested || 0,
            infected: daily.cases || 0
          })
        }
      })
      return {
        cases: monthlyData
          .filter(md => md.year === this.selectedYear)
          .map(md => md.infected),
        tested: monthlyData
          .filter(md => md.year === this.selectedYear)
          .map(md => md.tested),
        labels: monthlyData
          .filter(md => md.year === this.selectedYear)
          .map(md => md.monthName),
        years: Array.from(new Set(monthlyData.map(md => md.year)))
      }
    },
    weeklyDistribution() {
      const data = this.$store.state.statistics.dailyInformation.map(
        (dailyInfo, index) => {
          const stats = this.$store.state.statistics.dailyInformation
          const daily = {}
          const yesterday =
            // eslint-disable-next-line camelcase
            // eslint-disable-next-line camelcase
            stats[index + 1]?.country_stats || 0
          daily.date = dailyInfo.date
          daily.tested =
            parseInt(dailyInfo.country_stats.tested) -
            parseInt(yesterday?.tested)
          daily.infected = parseInt(dailyInfo.country_stats.infected)
          daily.cases =
            parseInt(dailyInfo.country_stats.infected) -
            parseInt(yesterday?.infected)
          return daily
        }
      )
      const weeklyData = []
      data.reverse().forEach(daily => {
        const date = daily.date.split('/')
        // eslint-disable-next-line no-console
        const newDate = date[1] + '/' + date[0] + '/' + date[2]
        const momentDate = date[2] + '-' + date[1] + '-' + date[0]
        const month = new Date(newDate).getMonth()
        const year = new Date(newDate).getFullYear()
        const week = moment(newDate).isoWeek()
        // eslint-disable-next-line no-console
        const monthName = new Intl.DateTimeFormat('pt', {
          month: 'short'
        }).format(new Date(newDate))
        const selectedDate = moment(momentDate, 'YYYY-MM-DD')
        const fromDate = selectedDate.startOf('isoWeek').format('DD-MM')
        const toDate = selectedDate.endOf('isoWeek').format('DD-MM')
        const weekName = `${fromDate} - ${toDate}`
        const index = weeklyData.findIndex(
          mt => mt.month === month && mt.year === year && mt.week === week
        )
        if (index !== -1) {
          weeklyData[index].tested += daily.tested || 0
          weeklyData[index].infected += daily.cases || 0
        } else {
          weeklyData.push({
            month,
            monthName,
            year,
            week,
            weekName,
            tested: daily.tested || 0,
            infected: daily.cases || 0
          })
        }
      })
      const chartData = {
        data: [],
        labels: [],
        years: []
      }
      weeklyData.forEach(data => {
        if (data.year === this.selectedYear2) {
          chartData.data.push(data.infected)
          chartData.labels.push(data.weekName)
          chartData.years.push(data.year)
        }
      })
      chartData.years = Array.from(new Set(weeklyData.map(md => md.year)))
      return chartData
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.weeklyDistribution)
  },
  methods: {
    getNumberOfWeek(date) {
      // Copy date so don't modify original
      const d = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
      )
      // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
      // Get first day of year
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
      // Calculate full weeks to nearest Thursday
      const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
      // Return array of year and week number
      // eslint-disable-next-line no-console
      return weekNo
    }
  }
}
</script>

<style></style>

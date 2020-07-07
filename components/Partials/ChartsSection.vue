<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap justify-left w-full ">
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Faixa Etária</span></span
      >
      <AgeRangeChart
        :chart-data="ageDistribution"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Cumulativo de
        <span class="text-gold">Testados e Positivos</span> Mensalmente</span
      >
      <TestedAndPositiveChart
        :chart-data="monthlyDistribution"
        class="justify-left w-full pt-10"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-24">
      <span class="text-white font-bold mb-3 text-center"
        >Casos positivos por <span class="text-gold">Semana</span></span
      >
      <WeeklyCasesChart
        :chart-data="positivityDistribution"
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
import AgeRangeChart from '~/components/Partials/AgeRangeChart'
import TestedAndPositiveChart from '~/components/Partials/TestedAndPositiveChart'
import WeeklyCasesChart from '~/components/Partials/WeeklyCasesChart'
export default {
  components: {
    AgeRangeChart,
    TestedAndPositiveChart,
    WeeklyCasesChart
  },
  data: () => ({
    genders: ['Masculino', 'Feminino'],
    origins: ['Moçambicana', 'Outras']
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
    }
  }
}
</script>

<style></style>

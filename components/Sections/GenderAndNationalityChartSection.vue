<template>
  <div>
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
        >Distribuição por <span class="text-gold">Nacionalidade</span></span
      >
      <PieChart
        :chart-data="originDistribution"
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
  }
}
</script>

<style></style>

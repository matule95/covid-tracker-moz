<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap justify-left w-full ">
    <div class="flex flex-col lg:w-1/3 pt-4">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Sexo</span></span
      >
      <PieChart
        :data="ratioByGender"
        :labels="genders"
        :backgroundColor="['#57E2E5', '#E08DAC']"
        class="justify-left h-64 w-full"
      />
    </div>

    <div class="flex flex-col justify-left lg:w-1/3 pt-10 lg:pt-4">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Nacionalidade </span></span
      >
      <PieChart
        :data="ratioByOrigin"
        :labels="origins"
        :backgroundColor="['#F6C879', '#A7D3A6']"
        class="justify-left h-64 w-full"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Sintomologia</span></span
      >
      <PieChart
        :data="ratioBySymptomatology"
        :labels="symptomatology"
        :backgroundColor="['#5cc1ac', '#57E2E5', '#F6C879', '#ba3131']"
        class="justify-left h-64 w-full"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-8">
      <span class="text-white font-bold mb-3 text-center"
        >Distribuição por <span class="text-gold">Faixa Etária</span></span
      >
      <BarChart
        :data="ratioByAgeRange"
        :labels="ageRange"
        :backgroundColor="[
          '#5cc1ac',
          '#57E2E5',
          '#F6C879',
          '#ba3131',
          '#ba3131',
          '#ba3131'
        ]"
        class="justify-left h-64 w-full"
      />
    </div>
  </div>
</template>

<script>
import PieChart from '~/components/PieChart'
import BarChart from '~/components/Charts/BarChart'
export default {
  components: {
    BarChart,
    PieChart
  },
  data: () => ({
    symptomatology: ['Assintomático', 'Leve', 'Moderada', 'Grave'],
    ageRange: ['<5', '5-9', '10-19', '20-29', '30-39', '40-49', '50-59', '>60'],
    genders: ['Masculino', 'Feminino'],
    origins: ['Moçambicana', 'Outras']
  }),
  computed: {
    weeklyInformation() {
      return this.$store.state.statistics.weeklyInformation
    },
    ratioByAgeRange() {
      const ageRange = this.$store.state.statistics.weeklyInformation
        .ratioByAgeRange
      const newAgeRange = []
      ageRange.filter(item => {
        newAgeRange.push(item.value)
      })
      return newAgeRange
    },
    ratioBySymptomatology() {
      const ratioBySymptomatology = []
      const sintomology = this.$store.state.statistics.weeklyInformation
        .ratioBySymptomatology
      sintomology.filter(item => {
        ratioBySymptomatology.push(item.value)
      })
      return ratioBySymptomatology
    },
    ratioByOrigin() {
      const newRatioByOrigin = []
      const origin = this.$store.state.statistics.weeklyInformation
        .ratioByOrigin
      origin.filter(item => {
        newRatioByOrigin.push(item.value)
      })
      return newRatioByOrigin
    },
    ratioByGender() {
      const newRatioByGender = []
      const gender = this.$store.state.statistics.weeklyInformation
        .ratioByGender
      gender.filter(item => {
        newRatioByGender.push(item.value)
      })
      return newRatioByGender
    }
  }
}
</script>

<style></style>

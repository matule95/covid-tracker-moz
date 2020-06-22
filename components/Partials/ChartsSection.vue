<template>
  <div class="flex flex-col lg:flex-row lg:flex-wrap justify-left w-full ">
    <div class="w-full">
      <h2>
        <span class="text-white">Dados</span>
        <span class="text-gold">Adicionais</span>
      </h2>
    </div>
    <span class="w-full text-white"
      >Última Actualização:
      {{ this.$store.state.statistics.weeklyInformation.date }} às
      {{ this.$store.state.statistics.weeklyInformation.updatedAt }}</span
    >
    <span class="w-full text-gold"
      >*Estes dados são actualizados semanalmente</span
    >
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
          '#89023E',
          '#57E2E5',
          '#F6C879',
          '#ba3131',
          '#5F5566',
          '#8CD867',
          '#12664F',
          '#624CAB'
        ]"
        class="justify-left h-64 w-full"
      />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-8">
      <span class="text-white font-bold mb-3 text-center"
        >Cumulativo de
        <span class="text-gold">Testados e Positivos</span> Mensalmente</span
      >
      <TestedAndPositiveChart class="justify-left h-64 w-full" />
    </div>
    <div class="flex flex-col lg:w-1/3 pt-4 lg:pt-8">
      <span class="text-white font-bold mb-3 text-center"
        >Casos por <span class="text-gold">Semana</span></span
      >
      <BarChart
        :data="testWeeks"
        :labels="weeks"
        :backgroundColor="'#ba3131'"
        class="justify-left h-64 w-full"
      />
    </div>
  </div>
</template>

<script>
import PieChart from '~/components/PieChart'
import BarChart from '~/components/Charts/BarChart'
import TestedAndPositiveChart from '~/components/Partials/TestedAndPositiveChart'
export default {
  components: {
    BarChart,
    PieChart,
    TestedAndPositiveChart
  },
  data: () => ({
    symptomatology: ['Assintomático', 'Leve', 'Moderada', 'Grave'],
    ageRange: ['<5', '5-9', '10-19', '20-29', '30-39', '40-49', '50-59', '>60'],
    genders: ['Masculino', 'Feminino'],
    origins: ['Moçambicana', 'Outras'],
    weeks: [
      '22/03 - 28/03',
      '29/03 - 04/04',
      '05/04 - 11/04',
      '12/04 - 18-04',
      '19/04 - 25/04',
      '26/04 - 02/05',
      '03/05 - 09/05',
      '10/05 - 16/05',
      '17/05 - 23/05',
      '24/05 - 30/05',
      '31/05 - 06/06',
      '07/06 - 13/06',
      '14/06 - 20/06',
      '21/06 - 27/06'
    ],
    testWeeks: [8, 2, 10, 15, 35, 9, 8, 42, 39, 76, 165, 144, 135, 49]
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

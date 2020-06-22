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
      <AgeRangeChart :data="ratioByAgeRange" class="justify-left h-64 w-full" />
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
      <WeeklyCasesChart class="justify-left h-64 w-full" />
    </div>
  </div>
</template>

<script>
import AgeRangeChart from '~/components/Partials/AgeRangeChart'
import PieChart from '~/components/PieChart'
import TestedAndPositiveChart from '~/components/Partials/TestedAndPositiveChart'
import WeeklyCasesChart from '~/components/Partials/WeeklyCasesChart'
export default {
  components: {
    AgeRangeChart,
    PieChart,
    TestedAndPositiveChart,
    WeeklyCasesChart
  },
  data: () => ({
    symptomatology: ['Assintomático', 'Leve', 'Moderada', 'Grave'],
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

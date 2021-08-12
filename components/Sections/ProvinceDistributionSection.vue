<template>
  <div>
    <span class="block lg:hidden w-full pb-1 text-gold text-sm"
      >*Arraste a tabela para o lado para ver mais detalhes →</span
    >
    <span class="text-white font-bold"
      >Distribuição <span class="text-gold">Provincial</span> 📍</span
    >
    <div class="w-full mt-3 mb-5 overflow-auto">
      <province-distribution :provinces="localPlaces" />
    </div>
  </div>
</template>

<script>
import ProvinceDistribution from '~/components/ProvinceDistribution'
export default {
  components: {
    ProvinceDistribution
  },
  computed: {
    localPlaces() {
      return this.$store.state.statistics.dailyInformation[0].province_stats
        .map(province => {
          const yesterday = this.$store.state.statistics.dailyInformation[1].province_stats.find(
            item => item.province === province.province
          )
          return {
            name: province.province,
            cases: province.confirmed,
            flag: this.getFlag(province.province),
            todayCases: Number.parseInt(
              Number.parseInt(province.confirmed) -
                Number.parseInt(yesterday.confirmed)
            ),
            active: province.active,
            todayActive: Number.parseInt(
              Number.parseInt(province.active) -
                Number.parseInt(yesterday.active)
            ),
            todayRecovered: Number.parseInt(
              Number.parseInt(province.recovered) -
                Number.parseInt(yesterday.recovered)
            ),
            recovered: province.recovered,
            todayDeaths: Number.parseInt(
              Number.parseInt(province.deaths) -
                Number.parseInt(yesterday.deaths)
            ),
            deaths: province.deaths
          }
        })
        .sort((a, b) => {
          if (Number.parseInt(a.cases) < Number.parseInt(b.cases)) {
            return 1
          }
          if (Number.parseInt(a.cases) > Number.parseInt(b.cases)) {
            return -1
          }
        })
    }
  },
  methods: {
    getFlag(province) {
      const flags = {
        'Cabo Delgado': `/icons/cabodelgado.svg`,
        Niassa: `/icons/niassa.svg`,
        Nampula: `/icons/nampula.svg`,
        Zambézia: `/icons/zambezia.svg`,
        Sofala: `/icons/sofala.svg`,
        Manica: `/icons/manica.svg`,
        Tete: `/icons/tete.svg`,
        Gaza: `/icons/gaza.svg`,
        Inhambane: `/icons/inhambane.svg`,
        'Província de Maputo': `/icons/maputo.svg`,
        'Cidade de Maputo': `/icons/maputo.svg`
      }

      return flags[province]
    }
  }
}
</script>

<style></style>

<template>
  <div>
    <div class="flex-initial w-full mb-2">
      <h2 class="text-white">COVID-19 - Moçambique</h2>
    </div>
    <div class="w-full mt-2">
      <p class="text-white">
        Última actualização: {{ latestUpdateDate }} às {{ latestUpdateTime }} -
        Fonte:
        <a class="text-gold" href="http://www.misau.gov.mz/" target="_blank"
          >MISAU</a
        >
      </p>
    </div>
    <div class="w-full my-5">
      <statistics :stats="dashboardStats" :data="chartData"></statistics>
      <span class="text-gold text-xs pt-3"
        >*O número em amarelo representa a diferença comparado ao dia de
        ontem.</span
      >
      <span class="flex text-red text-xs pt-3"
        >* {{ otherDeaths }} óbitos por outras causas não foram incluídos.</span
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
    chartData() {
      return this.$store.state.statistics.dailyInformation
    },
    otherDeaths() {
      return this.$store.state.statistics.dailyInformation[0].country_stats
        .other_deaths
    },
    latestUpdateDate() {
      return this.$store.state.statistics.dailyInformation[0].date
    },
    latestUpdateTime() {
      return this.$store.state.statistics.dailyInformation[0].updatedAt
    },
    dashboardStats() {
      const statistics = this.$store.state.statistics.dailyInformation[0]
        .country_stats
      const yesterday = this.$store.state.statistics.dailyInformation[1]
        .country_stats
      return {
        tested: {
          today: statistics.tested,
          variation:
            Number.parseInt(statistics.tested) -
            Number.parseInt(yesterday.tested)
        },
        infected: {
          today: statistics.infected,
          variation:
            Number.parseInt(statistics.infected) -
            Number.parseInt(yesterday.infected)
        },
        active: {
          today:
            Number.parseInt(statistics.infected) -
            Number.parseInt(statistics.recovered) -
            Number.parseInt(statistics.deaths) -
            Number.parseInt(statistics.other_deaths),
          variation:
            Number.parseInt(statistics.infected) -
            Number.parseInt(statistics.recovered) -
            Number.parseInt(statistics.deaths) -
            [
              Number.parseInt(yesterday.infected) -
                Number.parseInt(yesterday.recovered) -
                Number.parseInt(yesterday.deaths)
            ]
        },
        deaths: {
          today: statistics.deaths,
          variation:
            Number.parseInt(statistics.deaths) -
            Number.parseInt(yesterday.deaths)
        },
        recovered: {
          today: statistics.recovered,
          variation:
            Number.parseInt(statistics.recovered) -
            Number.parseInt(yesterday.recovered)
        },
        local_transmission: {
          today: statistics.local_transmissions,
          variation:
            Number.parseInt(statistics.local_transmissions) -
            Number.parseInt(yesterday.local_transmissions)
        },
        foreign_transmission: {
          today: statistics.foreign_transmissions,
          variation:
            Number.parseInt(statistics.foreign_transmissions) -
            Number.parseInt(yesterday.foreign_transmissions)
        },
        hospitalized: {
          today: statistics.hospitalized,
          variation:
            Number.parseInt(statistics.hospitalized) -
            Number.parseInt(yesterday.hospitalized)
        }
      }
    }
  }
}
</script>

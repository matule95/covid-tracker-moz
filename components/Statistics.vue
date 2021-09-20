<template>
  <div class="w-full flex flex-wrap flex-1">
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 ">
      <stats-counter
        :stats="{
          type: 'countries',
          label: `${$t('mainStatistics.statistics.tested')}`,
          value: stats.tested.today,
          today: stats.tested.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <TestedFlagIcon />
        </template>
      </stats-counter>
    </div>
    <div
      class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 xxs:mt-5 lg:mt-0"
    >
      <stats-counter
        :stats="{
          type: 'infected',
          label: `${$t('mainStatistics.statistics.infected')}`,
          value: stats.infected.today,
          today: stats.infected.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <PlagueInfectedIcon />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'active',
          label: `${$t('mainStatistics.statistics.active')}`,
          value: stats.active.today,
          today: stats.active.variation
        }"
      >
        <template v-slot:icon>
          <CovidActiveIcon />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'recovered',
          label: `${$t('mainStatistics.statistics.recovered')}`,
          value: stats.recovered.today,
          today: stats.recovered.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <PlusRecoveredIcon />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5 xl:mt-0">
      <stats-counter
        :stats="{
          type: 'deaths',
          label: `${$t('mainStatistics.statistics.deaths')}`,
          value: stats.deaths.today,
          today: stats.deaths.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <CrossDeathIcon />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5 xxl:mt-0">
      <StatsCounter
        :stats="{
          type: 'hospitalized',
          label: `${$t('mainStatistics.statistics.hospitalized')}`,
          value: stats.hospitalized.today,
          today: stats.hospitalized.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <HospitalAdmittedIcon />
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5 xxl:mt-0">
      <StatsCounter
        :stats="{
          type: 'local_transmissions',
          label: `${$t('mainStatistics.statistics.localTransmission')}`,
          value: stats.local_transmission.today,
          today: stats.local_transmission.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <HouseLocalTransmissionsIcon />
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 xl:w-1/5 lg:w-1/3 xxl:w-1/6 mt-5">
      <StatsCounter
        :stats="{
          type: 'foreign_transmission',
          label: `${$t('mainStatistics.statistics.foreignTransmission')}`,
          value: stats.foreign_transmission.today,
          today: stats.foreign_transmission.variation
        }"
        absolute
      >
        <template v-slot:icon>
          <PlaneForeignTransmissionsIcon />
        </template>
      </StatsCounter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'recovered',
          label: `${$t('mainStatistics.statistics.recoveredPercentage')}`,
          value: stats.recovered_percentage.value,
          today: stats.recovered_percentage.variation,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <PercentageIcon style="fill: white;" class="h-5" />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'countries',
          label: `${$t('mainStatistics.statistics.totalPositivityPercentage')}`,
          value: stats.all_time_infected_percentage.value,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <PercentageIcon style="fill: white;" class="h-5" />
        </template>
      </stats-counter>
    </div>
    <div class="xxs:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 xxl:w-1/6 mt-5">
      <stats-counter
        :stats="{
          type: 'countries',
          label: `${$t('mainStatistics.statistics.dailyPositivityPercentage')}`,
          value: stats.today_infected_percentage.value,
          noFormat: true
        }"
        absolute
      >
        <template v-slot:icon>
          <PercentageIcon style="fill: white;" class="h-5" />
        </template>
      </stats-counter>
    </div>
  </div>
</template>

<script>
import TestedFlagIcon from '~/assets/icons/flag-icon.svg?inline'
import PlagueInfectedIcon from '~/assets/icons/plague-icon.svg?inline'
import CovidActiveIcon from '~/assets/icons/covid-icon.svg?inline'
import PlusRecoveredIcon from '~/assets/icons/plus-icon.svg?inline'
import CrossDeathIcon from '~/assets/icons/cross-icon.svg?inline'
import HospitalAdmittedIcon from '~/assets/icons/hospital-icon.svg?inline'
import HouseLocalTransmissionsIcon from '~/assets/icons/house-icon.svg?inline'
import PlaneForeignTransmissionsIcon from '~/assets/icons/plane-icon.svg?inline'
import PercentageIcon from '~/assets/icons/percentage-icon.svg?inline'
import StatsCounter from '~/components/StatsCounter'
export default {
  components: {
    TestedFlagIcon,
    PlagueInfectedIcon,
    CovidActiveIcon,
    PlusRecoveredIcon,
    CrossDeathIcon,
    HospitalAdmittedIcon,
    HouseLocalTransmissionsIcon,
    PlaneForeignTransmissionsIcon,
    PercentageIcon,
    StatsCounter
  },
  props: {
    stats: {
      required: true,
      type: Object
    }
  }
}
</script>

<template>
  <div class="flex flex-row overflow-x-auto h-24 relative">
    <div class="flex flex-row w-full justify-between h-full">
      <div
        v-for="(date, index) in dates"
        :key="index"
        class="w-16 flex flex-col justify-center items-center z-10 text-white"
        style="flex-shrink: 0; flex-grow: 0"
      >
        <div
          :class="{ 'text-gold': isCurrentDate(date.date) }"
          class="weekday text-sm font-bold capitalized"
        >
          {{ date.name }}
        </div>
        <div
          :class="{
            'rounded-l-full': index === 0,
            'rounded-r-full': index === dates.length - 1
          }"
          class="w-full weekday text-sm mt-3 bg-brown-light py-2 text-center relative cursor-pointer"
        >
          <div
            v-if="isCurrentDate(date.date)"
            class="relative flex justify-center items-center"
          >
            <div class="active-selector z-0"></div>
            <div class="active-value z-10">
              {{ date.day }}
            </div>
          </div>
          <span v-else> {{ date.day }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('pt')
export default {
  computed: {
    dates() {
      const datesArray = []
      let daysBetween = moment()
        .startOf('day')
        .diff(moment('2020-03-10', 'YYYY-MM-DD'), 'days')
      while (daysBetween !== 0) {
        const newDate = {
          date: moment().subtract(daysBetween, 'days'),
          name: moment()
            .subtract(daysBetween, 'days')
            .format('ddd'),
          day: moment()
            .subtract(daysBetween, 'days')
            .format('D'),
          month: moment()
            .subtract(daysBetween, 'days')
            .format('MMM')
        }
        datesArray.push(newDate)
        daysBetween--
      }
      const newDate = {
        date: moment(),
        name: moment().format('ddd'),
        day: moment().format('D'),
        month: moment().format('MMM')
      }
      datesArray.push(newDate)
      return datesArray
    },
    currentDate() {
      return moment().format('YYYY-MM-DD')
    }
  },
  methods: {
    isCurrentDate(date) {
      // eslint-disable-next-line no-console
      const currentDate = moment().format('YYYY-MM-DD')
      return currentDate === moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>

<style scoped>
.active {
  z-index: 2;
}
.active-selector {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  @apply bg-gold;
}
</style>

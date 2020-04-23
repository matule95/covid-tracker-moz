<template>
  <div class="flex flex-wrap flex-row -mx-4 lg:mx-0">
    <div class="w-full text-white mb-5">
      Abril 2020
    </div>
    <div
      class="w-full flex flex-row flex-wrap flex-no-shrink flex-no-grow justify-center text-center"
    >
      <div class="w-full flex-row flex flex-wrap justify-between text-sm">
        <span class="font-bold text-white w-10">Seg</span>
        <span class="font-bold text-white w-10">Ter</span>
        <span class="font-bold text-white w-10">Qua</span>
        <span class="font-bold text-white w-10">Qui</span>
        <span class="font-bold text-white w-10">Sex</span>
        <span class="font-bold text-white w-10">Sáb</span>
        <span class="font-bold text-white w-10">Dom</span>
      </div>
      <div
        v-for="week in currentMonth"
        :key="week"
        class="w-full flex-row flex flex-wrap justify-between my-1"
      >
        <span
          v-for="day in week"
          :key="day"
          :class="{
            'text-brown': day === 0,
            'text-white hover:bg-gold cursor-pointer': day !== 0,
            'bg-gold font-bold shadow': isCurrentDate(day)
          }"
          class="w-8 h-8 flex justify-center items-center rounded-full select-none"
          style="transition: all 0.2s ease-in-out;"
          >{{ day ? day : '' }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('pt')
export default {
  data: () => ({
    isDown: false,
    startX: null,
    scrollLeft: null,
    calendar: null
  }),
  computed: {
    currentMonth() {
      let daysInMonth = moment().daysInMonth()
      const monthDays = [[], [], [], [], []]
      monthDays.forEach(month => {
        let count = 0
        while (count <= 6) {
          month.push(0)
          count++
        }
      })
      while (daysInMonth > 0) {
        monthDays[this.getWeekOfMonth(moment().date(daysInMonth))].splice(
          this.weekdays.indexOf(
            moment()
              .date(daysInMonth)
              .format('dddd')
          ),
          1,
          Number.parseInt(
            moment()
              .date(daysInMonth)
              .format('D')
          )
        )
        daysInMonth--
      }
      return monthDays
    },
    weekdays() {
      return moment.weekdays(true)
    }
  },
  methods: {
    getWeekOfMonth(date) {
      const weekInYear = date.isoWeek()
      const result = weekInYear - date.startOf('month').isoWeek()
      return result < 0 ? weekInYear : result
    },
    isCurrentDate(date) {
      return date === Number.parseInt(moment().format('D'))
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

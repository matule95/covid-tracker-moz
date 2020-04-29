<template>
  <div class="flex flex-row flex-wrap w-full">
    <div
      id="calendar"
      class="flex flex-wrap flex-row overflow-x-hidden h-24 relative select-none w-full"
    >
      <div
        @mousedown="mouseDown"
        @mouseleave="isDown = false"
        @mouseup="isDown = false"
        @mousemove="mouseMove"
        class="flex flex-row w-full justify-between h-full"
      >
        <div
          v-for="(date, index) in dates"
          :key="index"
          :class="{
            'cursor-pointer': !isDown,
            'cursor-move': isDown
          }"
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
              'rounded-r-full': index === dates.length - 1,
              'cursor-pointer': !isDown,
              'cursor-move': isDown
            }"
            class="w-full weekday text-sm mt-3 bg-brown-light py-2 text-center relative"
          >
            <div
              v-if="isCurrentDate(date.date)"
              class="relative flex justify-center items-center"
            >
              <div class="active-selector z-0"></div>
              <div class="active-value z-10">{{ date.day }}</div>
            </div>
            <span v-else>{{ date.day }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col relative">
      <div class="separator absolute"></div>
      <div
        class="w-full flex flex-row flex-wrap h-10 bg-brown-light relative my-5"
      >
        <div class="w-1/5 text-white self-center text-sm font-bold">
          16:24
        </div>
        <div
          class="w-4/5 self-center text-white"
          style="border: 1px solid dashed;"
        >
          When the Twilio messages webhook triggers a new POST request to your
          server we include
        </div>
        <div class="separator absolute"></div>
        <div class="separator-ball absolute"></div>
      </div>
      <div
        class="w-full flex flex-row flex-wrap h-10 bg-brown-light relative my-5"
      >
        <div class="w-1/5 text-white self-center text-sm font-bold">
          16:24
        </div>
        <div
          class="w-4/5 self-center text-white"
          style="border: 1px solid dashed;"
        >
          When the Twilio messages webhook triggers a new POST request to your
          server we include
        </div>
        <div class="separator absolute"></div>
        <div class="separator-ball absolute"></div>
      </div>
      <div
        class="w-full flex flex-row flex-wrap h-10 bg-brown-light relative my-5"
      >
        <div class="w-1/5 text-white text-sm self-center font-bold">
          16:24
        </div>
        <div class="w-4/5 self-center text-white border border-b-2 border-gold">
          When the Twilio messages webhook triggers a new POST request to your
          server we include
        </div>
        <div class="separator absolute"></div>
        <div class="separator-ball absolute"></div>
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
    },
    currentMounth() {
      let daysInMonth = moment().daysInMonth()
      const arrDays = {
        'Segunda-feira': [],
        'Terça-feira': [],
        'Quarta-feira': [],
        'Quinta-feira': [],
        'Sexta-feira': [],
        Sábado: [],
        Domingo: []
      }
      while (daysInMonth) {
        const current = moment().date(daysInMonth)
        arrDays[current.format('dddd')].push({
          day: current.format('D'),
          date: current
        })
        daysInMonth--
      }
      return arrDays
    }
  },
  mounted() {
    this.calendar = document.getElementById('calendar')
    this.calendar.scrollLeft = this.calendar.scrollWidth
  },
  methods: {
    isCurrentDate(date) {
      const currentDate = moment().format('YYYY-MM-DD')
      return currentDate === moment(date).format('YYYY-MM-DD')
    },
    mouseDown(event) {
      this.isDown = true
      this.startX = event.pageX - this.calendar.offsetLeft
      this.scrollLeft = this.calendar.scrollLeft
    },
    mouseMove(event) {
      if (!this.isDown) return
      event.preventDefault()
      const x = event.pageX - this.calendar.offsetLeft
      const walk = (x - this.startX) * 1.5 // scroll-fast
      this.calendar.scrollLeft = this.scrollLeft - walk

      // eslint-disable-next-line no-console
      console.log(walk)
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
.separator {
  width: 3px;
  height: 100%;
  @apply bg-gold;
  top: 0;
  left: 13%;
}
.separator-ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 3px solid #f6c879;
  background-color: #222529;
  top: 31%;
  left: 11.8%;
}
</style>

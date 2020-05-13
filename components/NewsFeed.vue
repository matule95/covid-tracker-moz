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
          @click="active = date.date"
          :class="{
            'cursor-pointer': !isDown,
            'cursor-move': isDown
          }"
          class="w-16 flex flex-col justify-center items-center z-10 text-white"
          style="flex-shrink: 0; flex-grow: 0"
        >
          <div
            :class="{ 'text-gold font-bold': isActive(date.date) }"
            class="w-full text-xs md:text-sm text-center"
          >
            {{ date.month }}
          </div>
          <div
            :class="{
              'rounded-l-full': index === 0,
              'rounded-r-full': index === dates.length - 1,
              'cursor-pointer': !isDown,
              'cursor-move': isDown
            }"
            class="w-full weekday text-sm my-3 bg-brown py-2 text-center relative"
          >
            <div
              v-if="isActive(date.date)"
              class="relative flex justify-center items-center"
            >
              <div class="active-selector z-0"></div>
              <div class="active-value z-10">{{ date.day }}</div>
            </div>
            <div v-else class="relative flex justify-center items-center">
              <div
                class="selector z-0 border border-4 border-brown hover:border-gold border-solid"
              ></div>
              <div class="z-10 pointer-events-none">{{ date.day }}</div>
            </div>
          </div>
          <div
            :class="{ 'text-gold font-bold': isActive(date.date) }"
            class="weekday text-xs md:text-sm capitalized"
          >
            {{ date.name }}
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
    calendar: null,
    active: null
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
        date: moment().format('YYYY-MM-DD'),
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
    this.active = moment().format('YYYY-MM-DD')
    this.calendar = document.getElementById('calendar')
    this.calendar.scrollLeft = this.calendar.scrollWidth
    document.getElementById('calendar').addEventListener('touchmove', event => {
      this.mouseMove(event)
    })
    document
      .getElementById('calendar')
      .addEventListener('touchstart', event => {
        this.mouseDown(event)
      })
    document.getElementById('calendar').addEventListener('touchend', event => {
      this.isDown = false
    })
  },
  methods: {
    isActive(date) {
      // const currentDate = moment().format('YYYY-MM-DD')
      return this.active === date
    },
    mouseDown(event) {
      this.isDown = true
      this.startX = event.pageX
        ? event.pageX - this.calendar.offsetLeft
        : event.touches[0].pageX - this.calendar.offsetLeft
      this.scrollLeft = this.calendar.scrollLeft
    },
    mouseMove(event) {
      if (!this.isDown) return
      event.preventDefault()
      const x = event.pageX
        ? event.pageX - this.calendar.offsetLeft
        : event.touches[0].pageX - this.calendar.offsetLeft
      const walk = (x - this.startX) * 1.2 // scroll-fast
      this.calendar.scrollLeft = this.scrollLeft - walk
    }
  }
}
</script>

<style scoped>
.active {
  z-index: 2;
}
.active-selector {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  @apply bg-gold;
}
.selector {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
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

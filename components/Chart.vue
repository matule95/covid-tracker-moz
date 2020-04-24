<script>
import { Line } from 'vue-chartjs'
import moment from 'moment'
import tinycolor2 from 'tinycolor2'
export default {
  extends: Line,
  computed: {
    dates() {
      const datesArray = []
      let daysBetween = moment()
        .startOf('day')
        .diff(moment('2020-03-10', 'YYYY-MM-DD'), 'days')
      while (daysBetween !== 0) {
        const newDate = `${moment()
          .subtract(daysBetween, 'days')
          .format('D')} ${moment()
          .subtract(daysBetween, 'days')
          .format('MMM')}`
        datesArray.push(newDate)
        daysBetween--
      }
      return datesArray
    },
    chartData() {
      return {
        labels: this.dates,
        datasets: [
          {
            label: 'Infectados',
            borderColor: '#e3342f',
            data: [
              0,
              3,
              3,
              3,
              5,
              5,
              5,
              5,
              8,
              8,
              8,
              10,
              10,
              10,
              10,
              12,
              12,
              13,
              13,
              15,
              15,
              0,
              3,
              3,
              3,
              5,
              5,
              5,
              5,
              8,
              8,
              8,
              10,
              10,
              10,
              10,
              12,
              12,
              13,
              13,
              15,
              15
            ],
            borderWidth: 3,
            lineTension: 0.15,
            pointBackgroundColor: '#e3342f',
            pointStyle: 'circle',
            pointRadius: 0,
            fill: true,
            backgroundColor: this.setGradient('#e3342f')
          },
          {
            label: 'Recuperados',
            borderColor: '#5CC1AC',
            data: [
              0,
              0,
              0,
              0,
              1,
              1,
              1,
              4,
              4,
              4,
              4,
              6,
              6,
              6,
              8,
              8,
              8,
              8,
              8,
              10,
              11
            ],
            borderWidth: 3,
            lineTension: 0.1,
            pointBackgroundColor: '#5CC1AC',
            pointStyle: 'circle',
            pointRadius: 0,
            fill: true,
            backgroundColor: this.setGradient('#5CC1AC')
          }
        ]
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              color: '#333639',
              borderDash: [3, 3],
              zeroLineColor: 'transparent'
            },
            barPercentage: 0.05,
            ticks: {
              fontFamily: 'CircularStd'
            }
          }
        ]
      },
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 5,
          fontFamily: 'CircularStd',
          padding: 20,
          fontColor: '#ffffff',
          usePointStyle: true,
          backgroundColor: '#ffffff'
        }
      }
    })
  },
  methods: {
    setGradient(color) {
      const bg = tinycolor2(color)
      bg.setAlpha(0.3)
      const gradient = this.$refs.canvas
        .getContext('2d')
        .createLinearGradient(150.0, 0.0, 150.0, 300.0)
      gradient.addColorStop(0, bg.toString())
      gradient.addColorStop(1, 'rgba(34,37,41')
      return gradient
    }
  }
}
</script>

<style></style>

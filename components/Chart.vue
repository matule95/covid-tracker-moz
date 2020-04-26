<script>
import { Line } from 'vue-chartjs'
import tinycolor2 from 'tinycolor2'
export default {
  extends: Line,
  props: {
    info: {
      type: [Array, Object],
      required: true
    }
  },
  data: () => ({
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
  }),
  computed: {
    chartData() {
      let data = {}
      const infected = []
      const active = []
      const recovered = []
      const deaths = []
      const labels = []
      this.$store.state.statistics.dailyInformation.forEach(info => {
        labels.push(this.getDate(info.date))
        infected.push(info.country_stats.infected)
        active.push(info.country_stats.active)
        recovered.push(info.country_stats.recovered)
        deaths.push(info.country_stats.deaths)
      })
      data = {
        labels: labels.reverse(),
        datasets: [
          {
            label: 'Infectados',
            borderColor: '#e3342f',
            data: infected.reverse(),
            borderWidth: 3,
            lineTension: 0.15,
            pointBackgroundColor: '#ffffff',
            pointStyle: 'circle',
            pointHitRadius: 15,
            fill: true,
            spanGaps: true,
            borderCapStyle: 'round',
            backgroundColor: this.setGradient('#e3342f')
          },
          {
            label: 'Recuperados',
            borderColor: '#5CC1AC',
            data: recovered.reverse(),
            borderWidth: 3,
            lineTension: 0.15,
            pointBackgroundColor: '#ffffff',
            pointStyle: 'circle',
            pointHitRadius: 15,
            fill: true,
            spanGaps: true,
            borderCapStyle: 'round',
            backgroundColor: this.setGradient('#5CC1AC')
          },
          {
            label: 'Activos',
            borderColor: '#F6C879',
            data: active.reverse(),
            borderWidth: 3,
            lineTension: 0.15,
            pointBackgroundColor: '#ffffff',
            pointStyle: 'circle',
            pointHitRadius: 15,
            fill: true,
            spanGaps: true,
            borderCapStyle: 'round',
            backgroundColor: this.setGradient('#F6C879')
          },
          {
            label: 'Óbitos',
            borderColor: '#8795a1',
            data: deaths.reverse(),
            borderWidth: 3,
            lineTension: 0.15,
            pointBackgroundColor: '#ffffff',
            pointStyle: 'circle',
            pointHitRadius: 15,
            fill: true,
            spanGaps: true,
            borderCapStyle: 'round',
            backgroundColor: this.setGradient('#8795a1')
          }
        ]
      }
      return data
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
    },
    getDate(date) {
      const splitDate = date.split('/')
      const day = splitDate[0]
      const month = splitDate[1]
      return `${day} ${this.months[Number.parseInt(month - 1)].substring(0, 3)}`
    }
  }
}
</script>

<style></style>

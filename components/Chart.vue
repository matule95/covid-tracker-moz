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
      const infected = JSON.parse(JSON.stringify(this.info.infected))
      const active = JSON.parse(JSON.stringify(this.info.active))
      const recovered = JSON.parse(JSON.stringify(this.info.recovered))
      const deaths = JSON.parse(JSON.stringify(this.info.deaths))
      const labels = JSON.parse(JSON.stringify(this.info.labels))
      data = {
        labels: labels.reverse(),
        datasets: [
          {
            label: this.$t('casesProgressChartSection.chart.infected'),
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
            backgroundColor: this.setGradient('#e3342f'),
            pointRadius: 0,
            datalabels: {
              display: false
            }
          },
          {
            label: this.$t('casesProgressChartSection.chart.recovered'),
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
            backgroundColor: this.setGradient('#5CC1AC'),
            pointRadius: 0,
            datalabels: {
              display: false
            }
          },
          {
            label: this.$t('casesProgressChartSection.chart.active'),
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
            backgroundColor: this.setGradient('#F6C879'),
            pointRadius: 0,
            datalabels: {
              display: false
            }
          },
          {
            label: this.$t('casesProgressChartSection.chart.deaths'),
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
            backgroundColor: this.setGradient('#8795a1'),
            pointRadius: 0,
            datalabels: {
              display: false
            }
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
      tooltips: {
        mode: 'x-axis'
      },
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

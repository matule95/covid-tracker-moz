<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  props: {
    chartData: { type: [Array, Object], required: true }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale
    }
  },
  watch: {
    $props: {
      handler(newValue) {
        this.initializeChart(newValue.chartData)
      },
      deep: true
    },
    currentLanguage: function() {
      this.initializeChart(this.chartData)
    }
  },
  mounted() {
    this.initializeChart(this.chartData)
  },
  methods: {
    initializeChart(data) {
      this.renderChart(
        {
          plugins: [ChartJsPluginDataLabels],
          labels: data.labels,
          datasets: [
            {
              label: this.$t('weeklyCases.label'),
              backgroundColor: '#e84a5f',
              data: data.data,
              datalabels: {
                display: false
              }
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 8,
              fontFamily: 'CircularStd',
              padding: 20,
              fontSize: 16,
              fontColor: '#ffffff',
              usePointStyle: false,
              backgroundColor: '#ffffff'
            }
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontSize: 10,
                  fontFamily: 'CircularStd',
                  fontColor: '#ffffff'
                },
                stacked: false,
                gridLines: {
                  color: '#333639',
                  borderDash: [3, 3],
                  zeroLineColor: 'transparent'
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontSize: 13,
                  fontFamily: 'CircularStd'
                },
                stacked: false,
                gridLines: {
                  color: '#333639',
                  borderDash: [3, 3],
                  zeroLineColor: 'transparent'
                }
              }
            ]
          }
        }
      )
    }
  }
}
</script>

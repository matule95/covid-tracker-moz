<script>
import { Pie } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

export default {
  extends: Pie,
  props: {
    chartData: { type: [Array, Object], required: true },
    backgroundColor: { type: [Array], default: () => null },
    customFormat: { type: String, default: '' }
  },
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.chartData.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColor
              ? this.backgroundColor
              : ['#57E2E5', '#E08DAC'],
            data: this.chartData.data,
            datalabels: {
              align: 'center',
              anchor: 'top',
              borderRadius: 4,
              color: '#000000',
              font: {
                weight: 'bold',
                size: 14
              }
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
            boxWidth: 7,
            fontFamily: 'CircularStd',
            fontSize: 12,
            padding: 20,
            fontColor: '#ffffff',
            usePointStyle: true
          }
        },
        plugins: {
          datalabels: {
            formatter: function(value, context) {
              return `${value}`
            }
          }
        }
      }
    )
  }
}
</script>

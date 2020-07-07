<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  props: {
    chartData: { type: [Array, Object], required: true }
  },
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.chartData.labels,
        datasets: [
          {
            label: 'Testados',
            backgroundColor: '#8c79f6',
            data: this.chartData.tested,
            datalabels: {
              align: 'top',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                fontSize: 12
              }
            }
          },
          {
            label: 'Positivos',
            backgroundColor: '#e84a5f',
            data: this.chartData.cases,
            datalabels: {
              align: 'top',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                fontSize: 12
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
            boxWidth: 8,
            fontFamily: 'CircularStd',
            padding: 20,
            fontColor: '#ffffff',
            fontSize: 16,
            usePointStyle: false,
            backgroundColor: '#ffffff'
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 13,
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
</script>

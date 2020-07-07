<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  props: {
    chartData: { type: [Array, Object], required: true }
  },
  data: () => ({
    bgColors: [
      '#99b898',
      '#feceab',
      '#ff847c',
      '#e84a5f',
      '#0e9aa7',
      '#a2de96',
      '#f6cd61',
      '#fe8a71'
    ]
  }),
  mounted() {
    const datasets = this.chartData.data.map((item, index) => {
      return {
        label: this.chartData.labels[index],
        backgroundColor: this.bgColors[index],
        data: [item],
        datalabels: {
          align: 'top',
          borderRadius: 4,
          color: '#ffffff',
          font: {
            weight: 'bold',
            fontSize: 12
          },
          anchor: 'end'
        }
      }
    })
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        datasets
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

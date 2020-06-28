<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  props: {
    data: { type: [Array, Object], required: true }
  },
  data: () => ({
    ageRange: ['<5', '5-9', '10-19', '20-29', '30-39', '40-49', '50-59', '>60']
  }),
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.ageRange,
        datasets: [
          {
            label: '<5',
            backgroundColor: [
              '#89023E',
              '#57E2E5',
              '#7D4E57',
              '#ba3131',
              '#5F5566',
              '#586A6A',
              '#12664F',
              '#624CAB'
            ],
            data: this.data,
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                size: 18
              },
              anchor: 'end'
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
          },
          display: false
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 14,
                fontColor: '#ffffff'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 16,
                fontColor: '#ffffff'
              }
            }
          ]
        }
      }
    )
  }
}
</script>

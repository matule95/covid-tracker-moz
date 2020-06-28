<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  data: () => ({
    months: ['Março', 'Abril', 'Maio', 'Junho']
  }),
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.months,
        datasets: [
          {
            label: 'Testados',
            backgroundColor: ['#1B4079', '#1B4079', '#1B4079', '#1B4079'],
            data: [267, 1809, 8802, 13470],
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                size: 16
              },
              anchor: 'end'
            }
          },
          {
            label: 'Positivos',
            backgroundColor: ['#ba3131', '#ba3131', '#ba3131', '#ba3131'],
            data: [8, 68, 178, 483],
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                size: 14
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

<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  data: () => ({
    weeks: [
      '22/03 - 28/03',
      '29/03 - 04/04',
      '05/04 - 11/04',
      '12/04 - 18-04',
      '19/04 - 25/04',
      '26/04 - 02/05',
      '03/05 - 09/05',
      '10/05 - 16/05',
      '17/05 - 23/05',
      '24/05 - 30/05',
      '31/05 - 06/06',
      '07/06 - 13/06',
      '14/06 - 20/06',
      '21/06 - 27/06'
    ]
  }),
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.weeks,
        datasets: [
          {
            label: 'N° de Casos',
            backgroundColor: [
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6',
              '#93B5C6'
            ],
            data: [8, 2, 10, 15, 35, 9, 8, 42, 39, 76, 165, 144, 135, 49],
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#000000',
              font: {
                weight: 'bold',
                size: 18
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

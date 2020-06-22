<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'
export default {
  extends: Bar,
  data: () => ({
    data: [
      {
        processType: 'Processo 1',
        data: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
      },
      {
        processType: 'Processo 2',
        data: []
      }
    ],
    months: ['Março', 'Abril', 'Maio', 'Junho']
  }),
  computed: {
    // barLabels() {
    //   let labels = [];
    //   this.data[0].sectorData.filter((item) => {
    //     labels.push(item.sector);
    //   });
    //   return labels;
    // },
  },
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.months,
        datasets: [
          {
            label: 'Testados',
            backgroundColor: ['#6CD4FF', '#6CD4FF', '#6CD4FF', '#6CD4FF'],
            data: [267, 1809, 8802, 13470],
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#000000',
              font: {
                weight: 'bold',
                size: 16
              }
            }
          },
          {
            label: 'Positivos',
            backgroundColor: ['#ba3131', '#ba3131', '#ba3131', '#ba3131'],
            data: [8, 68, 178, 483],
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#000000',
              font: {
                weight: 'bold',
                size: 16
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
            usePointStyle: false,
            backgroundColor: '#ffffff'
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontSize: 18
              },
              stacked: false
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 18
              },
              stacked: false
            }
          ]
        }
      }
    )
  }
}
</script>

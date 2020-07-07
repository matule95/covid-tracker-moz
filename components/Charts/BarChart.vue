<script>
import { Bar } from 'vue-chartjs'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

export default {
  extends: Bar,
  props: {
    data: { type: [Array, Object], required: true },
    labels: { type: [Array, Object], required: true },
    backgroundColor: { type: [Array, Object, String], required: true }
  },
  mounted() {
    this.renderChart(
      {
        plugins: [ChartJsPluginDataLabels],
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColor,
            data: this.data,
            datalabels: {
              align: 'center',
              borderRadius: 4,
              color: '#ffffff',
              font: {
                weight: 'bold',
                size: 20
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
        }
      }
    )
  }
}
</script>

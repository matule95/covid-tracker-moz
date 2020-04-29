<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    data: { type: [Array, Object], required: true },
    labels: { type: [Array, Object], required: true },
    backgroundColor: { type: [Array, Object], required: true }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColor,
            data: this.data
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>

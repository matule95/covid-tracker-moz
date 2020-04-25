<template>
  <div id="placeholder"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    segments: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: `/animations/${this.src}.json`
    })
  }
}
</script>

<style></style>

<template>
  <div>
    <span class="block lg:hidden w-full pb-1 text-gold text-sm">{{
      $t('provinceDistributionSection.mobileDragNote')
    }}</span>
    <span class="text-white font-bold"
      >{{ $t('provinceDistributionSection.whiteTitle') }}
      <span class="text-gold">{{
        $t('provinceDistributionSection.goldTitle')
      }}</span>
      📍</span
    >
    <div class="w-full mt-3 mb-5 overflow-auto">
      <province-distribution :provinces="provinceData" />
    </div>
  </div>
</template>

<script>
import ProvinceDistribution from '~/components/ProvinceDistribution'
export default {
  components: {
    ProvinceDistribution
  },
  computed: {
    provinceData() {
      return this.$store.state.statistics.overall.province_distribution
    }
  }
}
</script>

<style></style>

<template>
  <div class="flex flex-wrap justify-between">
    <div class="w-1/5 sm:w-1/3 self-center flex">
      <div
        :class="getClassName"
        :style="getStyles"
        class="h-12 w-12 rounded-lg flex justify-center items-center z-10"
      >
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="w-4/5 sm:w-2/3 flex flex-wrap self-center">
      <div class="w-full mb-1">
        <span class="text-md text-white">{{ stats.label || '' }}</span>
        <span v-if="stats.type === 'deaths'" class="text-red">*</span>
      </div>
      <div
        class="w-full text-2xl text-white font-semibold flex flex-wap flex-row"
      >
        {{ stats.value || 0 }}
        <span v-if="stats.today" class="ml-2 text-gold text-sm self-center"
          ><span v-if="stats.today > 0">+</span>{{ stats.today }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Object,
      required: true
    },
    absolute: { type: Boolean, required: false }
  },
  computed: {
    getClassName() {
      const className = {}
      if (this.stats.type === 'infected') className['bg-red-dark'] = true
      else if (this.stats.type === 'active') className['bg-gold'] = true
      else if (this.stats.type === 'deaths') className['bg-grey-dark'] = true
      else if (this.stats.type === 'recovered') className['bg-green'] = true
      else if (this.stats.type === 'countries') className['bg-purple'] = true
      else if (this.stats.type === 'local_transmissions')
        className['bg-blue'] = true
      else if (this.stats.type === 'foreign_transmission')
        className['bg-orange'] = true
      return className
    },
    getStyles() {
      const style = {}
      if (this.stats.type === 'infected')
        style.boxShadow = '0px 0px 15px -2px #BA3131'
      else if (this.stats.type === 'active')
        style.boxShadow = '0px 0px 15px -2px #F6C879'
      else if (this.stats.type === 'deaths')
        style.boxShadow = '0px 0px 15px -2px #8795a1'
      else if (this.stats.type === 'recovered')
        style.boxShadow = '0px 0px 15px -2px #5CC1AC'
      else if (this.stats.type === 'countries')
        style.boxShadow = '0px 0px 15px -2px #8C79F6'
      else if (this.stats.type === 'local_transmissions')
        style.boxShadow = '0px 0px 15px -2px #3490dc'
      else if (this.stats.type === 'foreign_transmission')
        style.boxShadow = '0px 0px 15px -2px #f6993f'
      return style
    }
  }
}
</script>

<style></style>

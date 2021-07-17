<template>
  <div>
    <label class="text-white font-medium pr-2" for="field">{{ label }}: </label>
    <select
      id="field"
      v-model="inputValue"
      class="h-8 px-2 bg-brown border-2 border-gold text-white rounded cursor-pointer"
    >
      <option v-for="option in options" :value="option" :key="option">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: 'Label'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>

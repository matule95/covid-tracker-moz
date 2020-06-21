<template>
  <table
    class="w-full"
    style="table-layout: auto; border-collapse: fixed; border-spacing: 0 15px;"
  >
    <thead>
      <tr>
        <th class="pr-5">&nbsp;</th>
        <th class="pr-5">&nbsp;</th>
        <th class="text-red px-3">Infectados</th>
        <th class="text-gold px-3">Activos</th>
        <th class="text-grey px-3">Óbitos</th>
        <th class="text-green">Recuperados</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="province in provinces" :key="province.name">
        <td>
          <img
            :alt="`${province.name} Country Flag`"
            :src="province.flag"
            width="20px"
            height="20px"
            class="rounded-full"
          />
        </td>
        <td>
          <div class="flex flex-row flex-wrap whitespace-no-wrap text-white">
            <span class="pl-2 truncate">{{ province.name }} </span>
          </div>
        </td>
        <td>
          <span class="pl-5 text-white">{{ province.cases }} </span>
          <span
            v-if="province.todayCases !== 0"
            class="pl-2 text-red text-xs font-bold"
            >+{{ formatNumbers(province.todayCases) }}
          </span>
        </td>
        <td>
          <span class="pl-5 text-white">{{ province.active }} </span>
          <span
            v-if="province.todayActive !== 0"
            class="pl-2 text-gold text-xs font-bold"
            >+{{ formatNumbers(province.todayActive) }}
          </span>
        </td>
        <td>
          <span class="pl-5 text-white">{{ province.deaths }} </span>
          <span
            v-if="province.todayDeaths !== 0"
            class="pl-2 text-grey text-xs font-bold"
            >+{{ formatNumbers(province.todayDeaths) }}
          </span>
        </td>
        <td>
          <span class="pl-5 text-white">{{ province.recovered }} </span>
          <span
            v-if="province.todayRecovered !== 0"
            class="pl-2 text-green text-xs"
            >+{{ formatNumbers(province.todayRecovered) }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    provinces: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatNumbers(value) {
      return new Intl.NumberFormat('es-ES').format(value)
    }
  }
}
</script>

<style>
th,
td {
  white-space: nowrap;
}
</style>

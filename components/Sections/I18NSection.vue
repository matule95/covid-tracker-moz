<template>
  <div class="flex-grow flex items-center justify-end">
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="mx-2"
    >
      <div @click.prevent.stop="$i18n.setLocale(locale.code)">
        <div v-if="locale.code === 'pt'" class="flex items-center">
          <span class="text-gold font-bold">PT</span>
          <PtFlag class="h-6 w-6 ml-1" />
        </div>
        <div v-if="locale.code === 'en'" class="flex items-center">
          <span class="text-gold font-bold">EN</span>
          <UkFlag class="h-6 w-6 ml-1" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import PtFlag from '~/assets/icons/pt-flag.svg?inline'
import UkFlag from '~/assets/icons/uk-flag.svg?inline'
export default {
  components: {
    PtFlag,
    UkFlag
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        locale => locale.code !== this.$i18n.locale
      )
    }
  }
}
</script>

<style></style>

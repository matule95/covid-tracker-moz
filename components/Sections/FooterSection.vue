<template>
  <div
    class="flex flex-col flex-wrap w-full justify-center items-center bg-brown mt-16 pb-20 px-5"
  >
    <div class="w-full flex justify-center mt-10">
      <img
        src="/gladiator-optimized-min.png"
        width="250px"
        height="170px"
        alt="Gladiator Fighting Corona Virus"
      />
    </div>
    <h2 class="mt-5 text-gold text-center">
      {{ $t('footerSection.title') }}
    </h2>
    <span
      class="mt-5 text-white w-full lg:w-1/2 text-center"
      style="line-height: 2.1rem;"
    >
      {{ $t('footerSection.whiteDescriptionStart') }}
      <a class="text-gold" href="https://covid19.ins.gov.mz/prevencao/">{{
        $t('footerSection.goldDescription')
      }}</a
      >{{ $t('footerSection.whiteDescriptionEnd') }}<br />
      {{ $t('footerSection.contactUs') }}
      <a class="text-gold" href="mailto:covidmozinfo@gmail.com"
        >covidmozinfo@gmail.com</a
      >
    </span>
  </div>
</template>

<script>
export default {}
</script>

<style></style>

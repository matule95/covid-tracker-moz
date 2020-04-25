<template>
  <div class="flex flex-row flex-wrap min-h-screen antialiased bg-brown-light">
    <div class="py-16 lg:ml-8 xl:mx-16 px-5 lg:px-0 flex-1 max-w-full">
      <nuxt />
    </div>
    <div
      class="flex flex-col flex-wrap w-full justify-center items-center bg-brown pb-20 px-5"
    >
      <animation-player src="fighter" style="max-width: 400px; width: 100%" />
      <h2 class="-mt-16 text-gold text-center">
        Ajude-nos a combater o COVID-19!
      </h2>
      <span
        class="mt-5 text-white w-full lg:w-1/2 text-center"
        style="line-height: 2.1rem;"
      >
        Além dos
        <a class="text-gold" href="https://covid19.ins.gov.mz/prevencao/"
          >métodos de prevenção indicados pelo INS</a
        >, a nossa única maneira de ajudar a impedir a propagação do COVID-19 é
        através da codificação de aplicativos. Essa é a parte mais fácil. O
        difícil é obter informações locais confíaveis portanto precisamos da sua
        ajuda para que possamos manter as pessoas conscientes do que está a
        acontecer.<br />
        Contacte-nos em:
        <a class="text-gold" href="mailto:covidmozinfo@gmail.com"
          >covidmozinfo@gmail.com</a
        >
      </span>
      <div class="mt-16 text-center">
        <span class="text-white font-bold text-sm">
          Feito com ❤️ por: <br />
          <span class="text-gold">
            Clayton Matule <span class="text-white">&</span> Luís Pereira</span
          ></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import AnimationPlayer from '../components/AnimationPlayer'
export default {
  components: {
    AnimationPlayer
  }
}
</script>
<style>
html {
  font-family: 'CircularStd', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background-color: #282b2e;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb {
  background-color: #f6c879;
  border-radius: 50px;
}
</style>

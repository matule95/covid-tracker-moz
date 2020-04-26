<template>
  <div
    class="flex flex-row flex-wrap bg-brown-light justify-center items-center h-full text-center"
  >
    <div class="w-full">
      <img src="/robot.svg" style="max-width: 300px" />
    </div>
    <div class="w-full mt-5">
      <h2 class="text-gold">Oops!</h2>
    </div>
    <div class="w-full text-white text-md mt-5">
      {{ message }}
    </div>
    <div class="w-full mt-10">
      <button @click="goToPage">Ir à Página Inicial</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      required: true,
      type: Object
    }
  },
  computed: {
    message() {
      let message = ''
      if (this.error.statusCode && this.error.statusCode === 404) {
        message = 'A página solicitada não encontra-se disponível.'
      } else if (this.error.statusCode && this.error.statusCode === 500) {
        message = 'Erro ao solicitar dados no servidor'
      } else message = 'Erro ao solicitar dados no servidor'
      return message
    }
  },
  mounted() {
    this.$el.parentElement.style =
      ' display:flex; justify-content: center; align-items: center'
  },
  methods: {
    goToPage() {
      window.location.reload(true)
    }
  }
}
</script>

<style lang="scss">
button {
  border: 1px solid;
  border-color: #f6c879;
  background-color: transparent;
  @apply text-gold;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: all 0.3 ease-in-out;
  &:hover {
    @apply bg-gold text-white;
    cursor: pointer;
  }
}
</style>

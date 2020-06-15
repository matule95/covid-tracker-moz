<template>
  <div
    @click="$emit('close')"
    class="absolute w-full h-full z-30 flex flex-row flex-wrap"
    style="top:0; left:0;"
  >
    <div class="w-full h-full bg-brown opacity-75 absolute z-40"></div>
    <div
      class="fixed text-white z-50 w-full h-full flex flex-row flex-wrap justify-center items-center"
    >
      <div
        class="w-64 h-64 bg-white rounded-lg flex flex-row flex-wrap content-start relative"
        style="width: 360px; height: 460px;"
      >
        <div
          @click="$emit('close')"
          class="absolute text-black w-8 pt-2 mr-2"
          style="top:0; right:0;"
        >
          <img src="/icons/close-outline.svg" />
        </div>
        <div class="w-full text-center mt-10">
          <img class="w-32" src="/bell.svg" />
        </div>
        <div class="w-full text-black text-center mt-5">
          <h3>Notificações</h3>
        </div>
        <div
          class="w-full text-black text-sm px-5 text-center leading-loose mt-5"
        >
          {{ message }}
        </div>
        <div class="w-full text-center mt-8 flex justify-center items-center">
          <button
            v-if="!askingForPermission"
            @click="requestPermission"
            class="bg-purple border-purple text-white rounded-sm"
          >
            Activar Notificações
          </button>
          <Spinner v-else />
        </div>
        <div class="w-full text-xs text-black text-center mt-8 px-5">
          *Requer uma conexão à internet. Poderá cancelar à subscrição a
          qualquer momento.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '~/components/Spinner'
export default {
  components: {
    Spinner
  },
  data: () => ({
    listenersStarted: false,
    permissionGranted: false,
    idToken: '',
    showModal: false,
    askingForPermission: false
  }),
  computed: {
    message() {
      return this.askingForPermission
        ? 'Por favor aceite a solicitação do seu navegador.'
        : 'Receba actualizações diárias sobre casos da COVID-19 directamente no seu telemóvel.'
    }
  },
  methods: {
    async requestPermission() {
      try {
        this.askingForPermission = true
        const permission = await Notification.requestPermission()
        this.permissionGranted = permission === 'granted'
        await this.getIdToken()
      } catch (e) {
        return e
      }
    },
    async getIdToken() {
      let currentToken
      try {
        currentToken = await this.$fireMess.getToken()
      } catch (e) {
        this.idToken = ''
      }
      if (currentToken) {
        this.idToken = currentToken
        window.localStorage.setItem('notificationToken', currentToken)
        window.localStorage.setItem('subscribed', true)
        this.subscribed = true
        this.askingForPermission = false
      } else {
        // Show permission request.
        // Show permission UI.
        this.idToken = ''
      }
    }
  }
}
</script>

<style>
.blurred {
  backdrop-filter: blur(5px);
}
button:hover {
  background-color: #5848af;
}
</style>

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
        class="w-64 h-64 bg-white rounded-lg flex flex-row flex-wrap content-start"
        style="width: 360px; height: 460px;"
      >
        <div class="w-full text-center mt-10">
          <img class="w-32" src="/notification.jpg" />
        </div>
        <div class="w-full text-black text-center mt-5">
          <h3>Notificações</h3>
        </div>
        <div
          class="w-full text-black text-sm px-5 text-center leading-loose mt-5"
        >
          {{ message }}
        </div>
        <div class="w-full text-center mt-12">
          <button
            @click="requestPermission"
            class="bg-purple border-purple text-white"
          >
            Activar Notificações
          </button>
        </div>
        <div class="w-full text-xs text-black text-center mt-5 px-5">
          *Requer uma conexão à internet. Poderá cancelar à subscrição a
          qualquer momento.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        : 'Receba actualizações diárias sobre casos do COVID-19 directamente no seu telemóvel.'
    }
  },
  methods: {
    async requestPermission() {
      try {
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

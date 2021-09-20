<template>
  <div class="nuxt-loading-container">
    <div class="loading-icon">
      <img src="virus-logo-mini.svg" />
    </div>
    <div class="description">
      <h4>
        {{ $t('loading.loading') }}
      </h4>
    </div>
    <div
      style="position: absolute; bottom: 15%; font-size: 14px; color:white; display: flex;
    flex-direction: column;"
    >
      <span style="color:white; font-weight: bold; text-align: center;">
        {{ $t('loading.madeWith') }} ❤️ {{ $t('loading.by') }}: <br
      /></span>
      <span style="color: #F6C879">
        Clayton Matule <span class="text-white">&</span> Luís Pereira</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator'
}
</script>

<style scoped>
html,
body {
  font-family: 'CircularStd', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.nuxt-loading-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222529;
  position: relative;
  font-family: CircularStd;
  flex-grow: 1;
}

.loading-icon {
  width: 65px;
  height: 65px;
  -webkit-animation: rotatingIcon 1.5s infinite;
  /* Safari 4+ */
  -moz-animation: rotatingIcon 1.5s infinite;
  /* Fx 5+ */
  -o-animation: rotatingIcon 1.5s infinite;
  /* Opera 12+ */
  animation: rotatingIcon 1.5s infinite;
  /* IE 10+, Fx 29+ */
}

.description {
  color: white;
  margin-top: 25px;
}

@-webkit-keyframes rotatingIcon {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }

  50% {
    opacity: 0.7;
    transform: rotate(3deg) scale(1);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }
}

@-moz-keyframes rotatingIcon {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }

  50% {
    opacity: 0.7;
    transform: rotate(3deg) scale(1);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }
}

@-o-keyframes rotatingIcon {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }

  50% {
    opacity: 0.7;
    transform: rotate(3deg) scale(1);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }
}

@keyframes rotatingIcon {
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }

  50% {
    opacity: 0.7;
    transform: rotate(3deg) scale(1);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg) scale(1.1);
  }
}
</style>

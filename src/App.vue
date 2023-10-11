<template>
  <div id="app">
    <div>
      <iframe
        src="https://cam.camstage.org/grafana9/d/ru1eHxUGz/netvalue-overview-fund?orgId=1&kiosk=tv&df=df&var-company=qb&var-lang=en&var-dept=qb/default&from=now-24h&to=now"
        title="autoLoginGrafana"
        frameborder="0"
        class="test-iframe"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createViewport: () => {
      const viewportDom = document.querySelector('meta[name=viewport]')
      if (viewportDom) {
        return viewportDom
      }
      const viewport = document.createElement('meta')
      viewport.setAttribute('name', 'viewport')
      document.getElementsByTagName('head')[0].appendChild(viewport)
      return viewport
    },
  },
  created() {
    // const viewportDom = this.createViewport()
    // viewportDom.setAttribute('content', `width=1200`)
  },
}
</script>

<style scoped>
.test-iframe {
  /* width: 1200px; */
  width: 100%;
  height: 100vh;
}

#app {
  /* width: 1200px; */
  /* height: 3000px; */
  height: 100%;
}

/* .main-container {
  min-height: 100%;
  transition: 0.28s;
  margin-left: 212px;
  min-width: 990px;
  position: relative;
} */
</style>

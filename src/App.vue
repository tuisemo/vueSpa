<template>
  <div id="app">
    <layout-header></layout-header>
    <layout-container>
      <router-view slot="main"></router-view>
    </layout-container>
  </div>
</template>

<script>
import layoutHeader from './components/layout/header.vue'
import layoutContainer from './components/layout/container.vue'

export default {
  name: 'app',
  components: {
    layoutHeader,
    layoutContainer,
  },
}
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

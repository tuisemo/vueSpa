<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <fixtable></fixtable>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import fixtable from '@/components/fixtable.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    fixtable
  }
}
</script>

<template>
  <div>
    <h2>子组件</h2>
    <Grandson />
  </div>
</template>

<script>
import Grandson from './grandson.vue'
export default {
  inject: ['getParentsText'],
  components: {
    Grandson,
  },
}
</script>

<style>
</style>
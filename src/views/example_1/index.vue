<template>
  <div>
    <h1>父组件与子孙组件间调用（多层级）</h1>
    <Children />
  </div>
</template>

<script>
import Children from './children.vue'
export default {
  provide: {
    getParentsText: () => {
      return '父组件'
    },
  },
  components: {
    Children,
  },
}
</script>

<style>
</style>
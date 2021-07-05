<template>
  <div>
    <h3 @click="handleClick()">孙子组件</h3>
  </div>
</template>

<script>
export default {
  inject: ['getParentsText'],
  methods: {
    handleClick () {
      const vm = this
      console.log('🚀 ~ file: grandson.vue ~ line 13 ~ this', this)
      const text = vm.getParentsText()
      alert(text)
    },
  },
}
</script>

<style>
</style>
<template>
  <div>
    <!---->
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data () {
    return {
      selected: new Map()
    }
  },
  provide () {
    return { selectEvent: this.handleCheck, selected: this.selected }
  },
  methods: {
    handleCheck (id, val) {
      if (this.selected.has(id)) {
        this.selected.delete(id)
      } else {
        this.selected.set(id, val)
      }
      console.log(
        '🚀 ~ file: checkbox-group.vue ~ line 27 ~ handleCheck ~ this.selected.keys()',
        this.selected.keys()
      )
      console.log(
        '🚀 ~ file: checkbox-group.vue ~ line 28 ~ handleCheck ~ this.selected',
        this.selected
      )
    }
  }
}
</script>
<style scoped lang="less">
</style>

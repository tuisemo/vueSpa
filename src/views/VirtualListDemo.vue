<template>
  <div>
   <!---->
   <VirtualList :data="list"></VirtualList>
  </div>
</template>
<script type="text/ecmascript-6">
import VirtualList from '../components/VirtualList'
export default {
  components: {
    VirtualList
  },
  data () {
    return {
      list: Array.from(new Array(200).keys())
    }
  }
}
</script>
<style scoped lang="less">
</style>

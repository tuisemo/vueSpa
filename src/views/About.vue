<template>
  <div class="page">
    <!---->
    <AMapPlugin></AMapPlugin>
  </div>
</template>
<script type="text/ecmascript-6">
import AMapPlugin from '@/components/aMapPlugin.vue'
export default {
  components: {
    AMapPlugin
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.page{
  display: block;
  position: relative;
  height: 500px;
  width: 500px;
}
</style>

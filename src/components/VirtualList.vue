<template>
    <div class="list-view" @scroll="handleScroll">
      <div class="list-view-phantom" :style="{height:contentHeight}"></div>
      <div ref="content" class="list-view-content">
        <div class="list-view-item" :style="{height:itemHeight}" v-for="item in visibleData" :key="item">
          {{item}}
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'VirtualList', // 虚拟列表
  props: {
    data: {
      type: Array,
      default: () => []
    },
    itemHeight: {
      type: Number,
      default: 30
    }
  },
  mounted () {
    this.updateVisibleData()
  },
  computed: {
    contentHeight () {
      return `${this.data.length * this.itemHeight}px`
    }
  },
  data () {
    return {
      visibleData: []
    }
  },
  methods: {
    updateVisibleData (scrollTop = 0) {
      const visibleCount = Math.ceil(this.$el.clientHeight / this.itemHeight) // 计算当前容器下可见数据数量
      const start = Math.floor(scrollTop / this.itemHeight) // 已滚动高度计算得出已滚出视口的数据数量（作为可视数据的起始位）
      const end = start + visibleCount // 可视数据的末位
      this.visibleData = this.data.slice(start, end)
      this.$refs.content.style.webkitTransform = `translate3d(0,${start * this.itemHeight}px,0)` // 模拟视口滚动
    },
    handleScroll (e) {
      const scrollTop = this.$el.scrollTop
      this.updateVisibleData(scrollTop)
    }
  }
}
</script>
<style scoped lang="less">
.list-view{
  height: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid #aaa;
  .list-view-phantom{
    position: absolute;
    left:0;
    top:0;
    right: 0;
    z-index: -1;
  }
  .list-view-content{
    position: absolute;
    left:0;
    top:0;
    right: 0;
  }
  .list-view-item{
    padding: 5px;
    color: #666;
    line-height: 30px;
    box-sizing: border-box;
  }
}
</style>

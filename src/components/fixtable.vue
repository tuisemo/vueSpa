<template>
  <div class="wrap">
    <!---->
    <div class="fix-top">
      <table :style="{ transform: `translateX(${-scrollLeft}px)` }">
        <thead>
          <tr>
            <th v-for="(item, i) in thead" :key="i">
              <div class="th">{{ item }}</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="table-wrap" ref="tableWrap" @scroll="onTableScroll">
      <table class="table">
        <tbody>
          <tr v-for="(tr, i) in tbody" :key="i">
            <td v-for="(td, j) in tr" :key="j">
              <div class="td">{{ td }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fix-left">
      <table>
        <thead>
          <th v-for="(item, i) in thead" :key="i">
            <div class="th">{{ item }}</div>
          </th>
        </thead>
      </table>
      <table>
        <tbody :style="{ transform: `translateY(${-scrollTop}px)` }">
          <tr v-for="(tr, i) in tbody" :key="i">
            <td v-for="(td, j) in tr" :key="j">
              <div class="td">{{ td }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data () {
    return {
      thead: new Array(15).fill(1),
      tbody: new Array(15).fill([9, ...new Array(14).fill(1)]),
      scrollTop: 0,
      scrollLeft: 0
    }
  },
  methods: {
    onTableScroll (e) {
      const { scrollLeft, scrollTop } = e.target
      this.scrollTop = scrollTop
      this.scrollLeft = scrollLeft
    }
  }
}
</script>
<style scoped lang="less">
.wrap {
  position: relative;
  width: 600px;
  height: 400px;
  overflow: hidden;
}
table {
  table-layout: fixed;
  border-collapse: separate;
  font-family: verdana, arial, sans-serif;
  font-size: 11px;
  color: #333333;
  border-width: 1px;
  //   border-color: #666666;
  //   border-collapse: collapse;
  thead {
    th {
      border-width: 1px;
      //   padding: 8px;
      border-style: solid;
      //   border-color: #666666;
      background-color: #dedede;
      .th {
        width: 80px;
        height: 30px;
        background: #fff;
      }
    }
  }
  tbody {
    tr {
      td {
        border-width: 1px;
        // padding: 8px;
        border-style: solid;
        // border-color: #666666;
        background-color: #ffffff;
        .td {
          width: 80px;
          height: 30px;
          background: #fff;
        }
      }
    }
  }
}
.fix-top {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.fix-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 86px;
  height: ~"calc(100% - 7px)";
  overflow: hidden;
}
.table-wrap {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: ~"calc(100% - 38px)";
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: #f5f5f5;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #c8c8c8;
  }
}
.table {
  overflow: scroll;
}
</style>

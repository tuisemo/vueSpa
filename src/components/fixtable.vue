<template>
  <div class="wrap">
    <!---->
    <div class="table-head">
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
    <div class="table-body" ref="tableWrap" @scroll="onTableScroll">
      <table>
        <tbody>
          <tr v-for="(tr, i) in tbody" :key="i">
            <td v-for="(td, j) in tr" :key="j">
              <div class="td">{{ td }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-fix" :class="{ shadow: scrollLeft > 0 }">
      <table class="fix-top">
        <thead>
          <tr>
            <th v-for="(item, i) in thead" :key="i">
              <div class="th"></div>
            </th>
          </tr>
        </thead>
      </table>
      <table class="fix-left">
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
  thead {
    th {
      border: 1px solid transparent;
      .th {
        width: 80px;
        height: 30px;
        background: #fff;
        white-space: normal;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid #ddd;
        .td {
          width: 80px;
          height: 30px;
          background: #fff;
        }
      }
    }
  }
}
.table-head {
  position: relative;
  width: 100%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
  }
}
.table-body {
  position: relative;
  overflow-x: auto;
  overflow-y: auto;
  width: 100%;
  height: ~"calc(100% - 48px)";
  padding-bottom: 10px;
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
  table {
    overflow: scroll;
  }
}
.table-fix {
  position: absolute;
  top: 0;
  left: 0;
  width: 86px;
  height: ~"calc(100% - 7px)";
  overflow: hidden;
  background: #fff;
  &.shadow {
    box-shadow: ~"0 0 10px rgb(0 0 0 /12%)";
  }
  .fix-top {
    position: absolute;
    top: 0;
    z-index: 9;
    background: #fff;
  }
  .fix-left {
    position: absolute;
    top: 38px;
    z-index: 8;
  }
  table {
    border: none;
    thead,
    tbody {
      tr {
        th,
        td {
          border-color: transparent;
        }
      }
    }
  }
}
</style>

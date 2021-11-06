<template>
  <checkboxGroup>
    <table class="table table-bordered">
      <thead>
        <th></th>
        <th v-for="(area, index) in xAxis" :key="area.id ?? index">
          {{ area.name }}
        </th>
      </thead>
      <tbody>
        <tr v-for="(yAxis, index) in series" :key="yAxis.id ?? index">
          <td>
            <span class="yAxisMarker">{{ yAxis.name }}</span>
          </td>
          <td v-for="(area, index) in xAxis" :key="area.id ?? index">
            <checkboxButton
              :id="`${yAxis.id}_${area.id}`"
              :value="{ yAxis, area }"
              :disabled="yAxis.disabled.includes(area.id)"
            ></checkboxButton>
          </td>
        </tr>
      </tbody>
    </table>
  </checkboxGroup>
</template>
<script type="text/ecmascript-6">
import checkboxGroup from '@/components/checkBox/checkbox-group.vue'
import checkboxButton from '@/components/checkBox/checkbox-button.vue'
export default {
  props: {
    xAxis: {
      type: Array,
      default: () => []
    },
    series: {
      type: Array,
      default: () => []
    }
  },
  components: {
    checkboxGroup,
    checkboxButton
  },
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.table {
  width: 100%;
  background-color: transparent;
  td {
    height: 40px;
    width: 100px;
    line-height: 2;
  }
}
.table-bordered {
  border-collapse: separate;
  border-radius: 4px;
  border-left: 0;
  border-spacing: 1px;
  tr {
    td {
      &:first-child {
        position: relative;
        .yAxisMarker {
          position: absolute;
          width: 100%;
          top: -7px;
          left: 0;
          padding-right: 5px;
          box-sizing: border-box;
        }
      }
    }
    // 最后截止时间一行不显示
    &:last-child {
      td {
        border-bottom: 1px solid #ddd;
        &:not(:first-child) {
          display: none;
        }
      }
    }
    // 倒数第二行充当最后一行
    &:nth-last-child(2) {
      td {
        border-bottom: 1px solid #ddd;
      }
    }
    td {
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      &:first-child {
        text-align: end;
        vertical-align: baseline;
        padding: 0;
        line-height: 1;
        border-top: 0;
        border-left: 0;
        border-bottom: 0;
        font-size: 14px;
        color: rgb(136, 136, 136);
      }
      &:last-child {
        border-right: 1px solid #ddd;
      }
    }
  }
}
</style>

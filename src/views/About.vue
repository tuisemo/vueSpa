<template>
  <div class="page">
    <!---->
    <AMapPlugin></AMapPlugin>
    <checkboxGroup>
      <table class="table table-bordered">
        <thead>
          <th></th>
          <th v-for="(area, index) in areas" :key="index">{{ area.name }}</th>
        </thead>
        <tbody>
          <tr v-for="time in times" :key="time.id">
            <td>
              <span class="timeRule">{{ time.name }}</span>
            </td>
            <td v-for="(area, index) in areas" :key="index">
              <checkboxButton
                :id="`${time.id}_${area.id}`"
                :value="{ time, area }"
                :disabled="time.disabled.includes(area.id)"
              ></checkboxButton>
            </td>
          </tr>
        </tbody>
      </table>
    </checkboxGroup>
  </div>
</template>
<script type="text/ecmascript-6">
import AMapPlugin from '@/components/aMapPlugin.vue'
import checkboxGroup from '@/components/checkBox/checkbox-group.vue'
import checkboxButton from '@/components/checkBox/checkbox-button.vue'
export default {
  components: {
    AMapPlugin,
    checkboxGroup,
    checkboxButton
  },
  data () {
    return {
      areas: [
        {
          id: '1',
          name: '场地1'
        },
        {
          id: '2',
          name: '场地2'
        },
        {
          id: '3',
          name: '场地3'
        },
        {
          id: '4',
          name: '场地4'
        },
        {
          id: '5',
          name: '场地5'
        }
      ],
      times: [
        {
          id: '09:00',
          name: '09:00',
          order: [],
          disabled: []
        },
        {
          id: '09:30',
          name: '09:30',
          order: [],
          disabled: ['3', '5']
        },
        {
          id: '10:00',
          name: '10:00',
          order: [],
          disabled: []
        },
        {
          id: '10:30',
          name: '10:30',
          order: [],
          disabled: []
        },
        {
          id: '11:00',
          name: '11:00',
          order: [],
          disabled: []
        },
        {
          id: '11:30',
          name: '11:30',
          order: [],
          disabled: ['2', '3']
        },
        {
          id: '12:00',
          name: '12:00',
          order: [],
          disabled: []
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.page {
  display: block;
  position: relative;
  // height: 800px;
  // width: 900px;
}
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
        .timeRule {
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

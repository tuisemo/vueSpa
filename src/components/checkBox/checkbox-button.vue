<template>
  <label class="checkbox-button">
    <input
      class="checkbox-button__original"
      type="checkbox"
      name="vehicle"
      :value="id"
      :checked="checked"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="checkbox-button__inner"></span>
  </label>
</template>
<script type="text/ecmascript-6">
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  inject: ['selectEvent', 'selected'],
  computed: {
    isSelected () {
      return this.selected.has(this.id)
    }
  },
  data () {
    return {}
  },
  methods: {
    handleChange () {
      this.selectEvent(this.id, this.value)
    }
  }
}
</script>
<style scoped lang="less">
.checkbox-button {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  .checkbox-button__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    z-index: -1;
  }
  .checkbox-button__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    background: #fff;
    text-align: center;
    margin: 0;
  }
  input[type="checkbox"]:checked + .checkbox-button__inner {
    background: #409eff;
    color: #fff;
    &::after {
      content: "已选择";
    }
  }
  input[type="checkbox"]:disabled + .checkbox-button__inner {
    cursor: not-allowed;
    background: #d3d3d3;
    color: #5a5a5a;
    &::after {
      content: "不可选择";
    }
  }
}
</style>

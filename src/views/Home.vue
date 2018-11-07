<!-- 公共容器 -->
<template>
        <el-collapse v-model="activeNames" @change="handleChange">
          <template v-for="(item,index) in topicList">
          <el-collapse-item :title="item.title" :name="index" :key="index">
            <!-- <div v-html="item.content"></div> -->
          </el-collapse-item>
          </template>
        </el-collapse>
</template>

<script>
import api from "@/api/user";
export default {
  data() {
    return {
      activeNames: 0,
      topicList: []
    };
  },

  components: {},

  computed: {},

  methods: {
    handleChange() {},
    getTopics() {
      api.getTopics({limit:20}).then(res => {
        console.log(res);
        this.topicList = res.data.data;
      });
    }
  },
  beforeMount() {
    this.getTopics();
  }
};
</script>
<style lang='less' scoped>
</style>
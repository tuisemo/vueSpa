<!-- 公共容器 -->
<template>
  <!-- <el-collapse v-model="activeNames" @change="handleChange">
          <template v-for="(item,index) in topicList">
          <el-collapse-item :title="item.title" :name="index" :key="index">
          </el-collapse-item>
          </template>
        </el-collapse> -->
  <div class="collapse">
    <template v-for="(item, index) in topicList">
      <div class="collapse-item" :key="index">
        <div class="left-part">
          <img
            class="user_avatar"
            :src="item.author.avatar_url"
            :alt="item.author.avatar_url"
          />
          <span class="reply_count">{{
            item.reply_count + "/" + item.visit_count
          }}</span>
          <span class="mark"
            ><el-tag size="mini">{{ item.tab }}</el-tag></span
          >
          <span>{{ item.title }}</span>
        </div>
        <div class="right-part">
          <span class="last_active_time"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from '@/api/user'
export default {
  data () {
    return {
      activeNames: 0,
      topicList: [],
    }
  },

  components: {},

  computed: {},

  methods: {
    handleChange () {},
    getTopics () {
      api.getTopics({ limit: 20 }).then((res) => {
        console.log(res)
        this.topicList = res.data.data
      })
    },
  },
  beforeMount () {
    this.getTopics()
  },
}
</script>
<style lang='less' scoped>
.collapse {
  border-top: 1px solid #ebeef5;
  border-bottom: 1px solid #ebeef5;
  .collapse-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    line-height: 48px;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #ebeef5;
    font-size: 13px;
    font-weight: 500;
    -webkit-transition: border-bottom-color 0.3s;
    transition: border-bottom-color 0.3s;
    outline: 0;
    .left-part {
      display: flex;
      flex: 1;
      align-items: center;
    }
    .right-part {
      width: 80px;
    }
  }
  .user_avatar {
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  .reply_count {
    width: 80px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }
  .mark {
    width: 50px;
    justify-content: center;
  }
}
</style>
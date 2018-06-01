<template>
  <div class="application">
    <!-- 内容 -->
    <div class="leavetenter" v-bind:key="item.id" v-for="(item) in currentdatanew" @click="details(item)">
        <div class="name"><p class="leaveName">{{item.name}} 的请假</p><p class="data">{{item.dataTime}}</p></div>
        <div class="leaveType"><p>请假类型：</p><p>{{item.leaveType}}</p></div>
        <div class="startTime"><p>开始时间：</p><p>{{item.startTime}}</p></div>
        <div class="endedTime"><p>结束时间：</p><p>{{item.endedTime}}</p></div>
        <div class="state">{{item.state}}</div>
        <!-- <leavelist :item="item"></leavelist> -->
    </div>
  </div>
</template>

<script>
// import leavelist from './leaveList'
export default {
  // component: {
  //   leavelist
  // },
  props: {
    currentdatanew: {
      type: Array,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // 搜索框的点击 隐藏图标
    details: function (item) {
      console.info(item.id)
      console.info(this.currentTab)
      this.$router.push({ path: '/leavedetails', params: { id: item.id, tabtype: this.currentTab } })
    }

  }
}
</script>

<style lang="stylus" scoped>
.leavetenter
  width 85%
  border 1px solid #ccc
  margin 5px auto 10px auto
  padding 10px
  background-color #ffffff
  .name
    position relative
    padding-bottom 10px
    .leaveName
      font-size 22px
    .data
      position absolute
      right 0
      top 0
      font-size 14px
      color #ccc
  .leaveType, .startTime,.endedTime
    padding-bottom 5px
    font-size 14px
    p
      display inline-block
  .state
    font-size 12px
    padding-top 10px
    color: #f60
    
</style>
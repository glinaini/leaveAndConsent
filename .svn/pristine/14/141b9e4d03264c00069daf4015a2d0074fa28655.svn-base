<template>
  <div class="application">
    <!-- 内容 -->
    <!-- <div class="leavetenter" v-bind:key="item.id" v-for="(item, index) in currentdatanew" @click="details(index)"> -->
    <div class="name"><p class="leaveName">{{item.name}} 的请假</p><p class="data">{{item.dataTime}}</p></div>
    <div class="leaveType"><p>请假类型：</p><p>{{item.leaveType}}</p></div>
    <div class="startTime"><p>开始时间：</p><p>{{item.startTime}}</p></div>
    <div class="endedTime"><p>结束时间：</p><p>{{item.endedTime}}</p></div>
    <div class="state">{{item.state}}</div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    // // 搜索框的点击 隐藏图标
    // details: function (index) {
    // //   console.info(index)
    //   // console.info(this.currentdatanew)
    // //   console.info(this.currentdatanew[index].leaveType)
    // // s
    //   // this.$router.push({path: '/leavedetails'})
    //   const data = this.currentdatanew
    //   console.info(data)
    //   console.info(index)
    //   console.info(data[index])
    //   console.info(data[index].id)
    //   console.info(data[index].leaveTypa)
    //   console.info(this.currentTab)
    //   // const newdata = data[index]
    // }

  }
}
</script>

<style lang="stylus" scoped>
.application
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
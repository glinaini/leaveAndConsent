<template>
  <div class="application">
    <!-- 内容 -->
    <cube-index-list :pullDownRefresh="pullDownRefresh" @pulling-down="onPullingDown" ref="indexList" :pullUpLoad="pullUpLoad" @pulling-up="onPullingUp">
      <cube-index-list-group>
        <cube-index-list-item v-bind:key="item.id" v-for="item in form">
          <div class="leavetenter" @click="details(item)">
              <div class="name"><p class="leaveName">{{item.name}}的请假</p><p class="data">{{item.dataTime}}</p></div>
              <div class="leaveType"><p>请假类型：</p><p>{{item.leaveType}}</p></div>
              <div class="startTime"><p>开始时间：</p><p>{{item.startTime}}</p></div>
              <div class="endedTime"><p>结束时间：</p><p>{{item.endedTime}}</p></div>
              <div class="state">{{item.state}}</div>
          </div>
        </cube-index-list-item>
      </cube-index-list-group>
    </cube-index-list>
  </div>
</template>

<script>
export default {
  props: {
    form: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      pullDownRefresh: {
        stop: 55,
        txt: '刷新成功'
      },
      pullUpLoad: {
        txt: {
          more: '没有更多数据'
        }
      }
    }
  },
  methods: {
    // 点击单个元素
    details: function (item) {
      console.info(item)
    },
    onPullingDown() {
      this.$emit('update')
    },
    onPullingUp() {
      this.$emit('pullup')
    },
    getNewDate() {
      this.$refs.indexList.forceUpdate()
    }
  }
}
</script>

<style lang="stylus" scoped>
.application
  position relative
  height 100%
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
<template>
  <transition name="approval">
    <div class="approval-wrapper">
      <!-- <header-jt></header-jt> -->
      <!-- 头 -->
      <div class="subject-header">
        <div class="icon" @click="back">
          <i class="cubeic-back"></i>
        </div>
        <div class="processing">
          <div class="initiator" :class="{'active': currentTab === '0'}" v-on:click="toggleTab('0')" >我发起的({{numberLen}})</div>
          <div class="strat-subject" :class="{'active': currentTab === '1'}" v-on:click="toggleTab('1')">待我审批(1)</div>
          <div class="ended-subject" :class="{'active': currentTab === '2'}" v-on:click="toggleTab('2')">已审批({{this.InitiatingData.length}})</div>
        </div>
      </div>
      <cube-scroll :data="items" :options="options">
        <Initiating v-bind:currentdata="InitiatingData" v-bind:lenght="numberLen" :currentTab="currentTab"></Initiating>
      </cube-scroll>
      <div class="ending">已显示全部数据</div>
    </div>
  </transition>
</template>

<script>
import { sendoutleave } from '@/api/examine.js'
import Initiating from './opinion/Initiating'
const SUCCESS = '200'
export default {
  components: {
    Initiating
  },
  data () {
    return {
      searchValue: '',
      searchTExt: true,
      active: true,
      currentTab: '0',
      InitiatingData: [],
      numberLen: 0,
      waitData: [{}],
      finishData: [{}],
      items: [1, 2, 3, 4, 5],
      options: {
        scrollbar: {
          fade: true
        }
      }
    }
  },
  methods: {
    // 搜索框的点击 隐藏图标
    inputfocus: function () {
      if (this.searchValue === '') {
        this.searchTExt = false
      }
    },
    inputicon: function (searchValue) {
      console.info(this.searchValue)
      if (this.searchValue === '') {
        this.searchTExt = true
      }
    },
    // 我发起的请假
    senddata: function () {
      console.info(this.currentTab)
      const data = {
        type: this.currentTab,
        taskType: ''
      }
      sendoutleave(data).then(res => {
        res = res.data
        if (res.state === SUCCESS) {
          const data = res.data
          console.info(data)
          console.info(data.length)
          this.InitiatingData = data
          this.numberLen = data.length
        }
      })
    },
    // 等待我审核
    waitingdata: function () {
      console.info('等待中. . .')
    },
    // 已经审核
    endeddata: function () {
      console.info('已经审核')
    },
    toggleTab: function (tab) {
      switch (tab) {
        case '0':
          this.currentTab = '0'
          this.senddata()
          break
        case '1':
          this.currentTab = '1'
          this.waitingdata()
          break
        case '2':
          this.currentTab = '2'
          this.endeddata()
          break
        default:
          break
      }
    },

    // tabs切换
    // tabscontent: function () {
    // },
    back: function () {
      this.$router.push({path: '/home'})
    }
  },
  created () {
    this.senddata()
  },
  computed: {
    // Tab: function (data) {
    //   // this.currentTab = this.data
    //   console.info(data)
    // }
  }
}
</script>

<style lang="stylus" scoped>
.approval-enter-active, .approval-leave-active
  transition all 0.3s
.approval-enter, .approval-leave-to
  transform translate3d(100%, 0 , 0)
.approval-wrapper
  position fixed
  left 0
  right 0
  bottom 0
  top 0
  background #eeeeee
  padding-bottom 44px
  .subject-header
    text-align center
    font-size 0
    position relative
    height 44px
    background-color #ffffff
    .icon
      display inline-block
      line-height 44px
      vertical-align top
      font-size 18px
      position absolute
      left 0
      top 0
    .processing
      width 90%
      height 100%
      margin-left 30px
      .initiator, .strat-subject, .ended-subject
        height 100%
        width 33%
        color #999
        font-size 16px
        display inline-block
        vertical-align top
        line-height 44px
      .active
        color: #f60
    .mine
      position absolute
      right 0
      top 0
      font-size 18px
      display inline-block
      vertical-align top
      line-height 44px
  .leaveSearch
    position relative
    height 44px
    width 100%
    background #f4f4f4
    font-size 14px
    text-align center
    label
      position absolute
      left 50%
      margin-left -5%
      color #b2b2b2
      top 35%
    input
      text-indent 10px
      height 75%
      width 90%
      color #989898
      border #eeeeee
      border-radius: 5px;
      margin-top 1%
      text-align center
    i
      position absolute
      top 35%
      left 50%
      margin-left -10%
      color #b2b2b2
  #centent
    .total
      text-align center
      font-size 14px
      color #666
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
  .ending
    position absolute
    bottom 0
    padding 5px
    width 100%
    text-align center
    color #ccc
    font-size 14px
    z-index -1


</style>


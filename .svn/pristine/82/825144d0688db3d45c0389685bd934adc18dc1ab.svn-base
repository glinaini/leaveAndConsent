<template>
  <!-- <div class="leaveDetails">请假详情页</div> -->
  <transition name="leaveDetails">
    <div class="leaveDetails-container">
      <!-- 请假详情页 -->
      <header-jt></header-jt>
      <!-- 内容 -->
      <cube-scroll :data="items" :options="options">
        <leave-details-wapper></leave-details-wapper>
        <approval-process></approval-process>
        <cube-button class="revoke" @click="showBtn">撤销</cube-button>
    </cube-scroll>
    </div>
  </transition>
</template>

<script>
import headerJt from './header'
import leaveDetailsWapper from './leave-details-wapper'
import approvalProcess from '@/view/vacation/notice/approval-process'
export default {
  components: {
    headerJt,
    leaveDetailsWapper,
    approvalProcess
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      options: {
        scrollbar: {
          fade: true
        }
      }
    }
  },
  methods: {
    getPersonalList: function () {
      // const leaveDetails: {
      //   id: id,
      //   tab: cu
      // }
      console.info(this.$route.params)
    },
    showBtn() {
      this.$createDialog({
        type: 'confirm',
        // icon: 'cubeic-alert',
        // title: '我是标题',
        content: '您确定要撤销申请吗？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击确认按钮'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '点击取消按钮'
          }).show()
        }
      }).show()
    }
  },
  created () {
    this.getPersonalList()
  }
}
</script>


<style lang="stylus" scoped>
.leaveDetails
.leaveDetails-enter-active, .leaveDetails-leave-active
  transition all .3s
.leaveDetails-enter, .leaveDetails-leave-to
  transform translate3d(100%, 0, 0)
.leaveDetails-container
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background  #f3f3f3
  padding-bottom 44px
.revoke
  color #000
  border-top 1px solid #000
  background-color #ffffff

</style>


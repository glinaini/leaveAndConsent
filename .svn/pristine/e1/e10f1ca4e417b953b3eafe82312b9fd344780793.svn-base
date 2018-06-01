<template>
  <div class="subject-header">
    <div class="icon" @click="back">
      <i class="cubeic-back"></i>
    </div>
    <div class="processing">
      <div class="initiator">我发起的(10)</div>
      <div class="strat-subject">待我审批(10)</div>
      <div class="ended-subject">已审批(10)</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style lang="stylus" scoped>
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
      .initiator
        color: #f60
    .mine
      position absolute
      right 0
      top 0
      font-size 18px
      display inline-block
      vertical-align top
      line-height 44px
</style>


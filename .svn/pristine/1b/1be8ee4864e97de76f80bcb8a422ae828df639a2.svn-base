<template>
  <div class="my-header">
    <div class="icon" @click="back">
      <i class="cubeic-back"></i>
    </div>
    <div class="text" @click="popupCon">全部请假记录
      <i :class="icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    father: {}
  },
  data () {
    return {
      icon: 'cubeic-pulldown'
    }
  },
  methods: {
    back () {
      this.$router.push({path: '/vacation/detail'})
    },
    popupCon () {
      this.father.state = !this.father.state
    }
  },
  watch: {
    'father.state': function () {
      if (this.father.state === false) {
        this.icon = 'cubeic-pulldown'
      } else {
        this.icon = 'cubeic-pullup'
      }
    }
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
  .my-header
    text-align center
    font-size 0
    position relative
    height 44px
    background  #a2aeb5
    .icon
      display inline-block
      line-height 44px
      vertical-align top
      font-size 18px
      position absolute
      left 0
      top 0
    .text
      font-size 18px
      display inline-block
      vertical-align top
      line-height 44px
    .mine
      position absolute
      right 0
      top 0
      font-size 18px
      display inline-block
      vertical-align top
      line-height 44px
</style>




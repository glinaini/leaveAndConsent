<template>
  <div class="subject-header">
    <div class="icon" @click="back">
      <i class="cubeic-back"></i>
    </div>
    <div class="title">请假明细</div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push({path: '/approval'})
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
    .title
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


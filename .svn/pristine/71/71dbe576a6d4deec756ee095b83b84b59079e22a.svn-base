<template>
  <div class="my-header">
    <div class="icon" @click="back">
      <i class="cubeic-back"></i>
    </div>
    <div class="text">请假</div>
    <div class="mine" @click="showActive" >更多</div>
  </div>
</template>

<script>
export default {
  methods: {
    router (index) {
      switch (index) {
        case 0:
          this.$router.push({path: '/vacation/detail'})
          break
        case 1:
          this.$router.push({path: '/vacation/notice'})
          break
      }
    },
    showActive () {
      this.$createActionSheet({
        title: '',
        data: [
          {
            content: '请假明细'
          },
          {
            content: '请假须知'
          }
        ],
        onSelect: (item, index) => {
          // this.$createToast({
          //   txt: `Clicked ${item.content}`,
          //   type: 'correct',
          //   time: 1000
          // }).show()
          this.router(index)
          // this.$router.push({
          //   path: '/vacation/detail'
          // })
        },
        onCancel: () => {
          this.$createToast({
            txt: `Clicked canceled`,
            type: 'warn',
            time: 1000
          }).show()
        }
      }).show()
    },
    onSelect: (item, index) => {
      this.$createToast({
        txt: `Clicked ${item.content}`,
        type: 'correct',
        time: 1000
      }).show()
    },
    back () {
      this.$router.push({path: '/home'})
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




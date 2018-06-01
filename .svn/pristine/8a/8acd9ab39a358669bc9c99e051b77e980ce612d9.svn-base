<template>
  <transition name="detail">
    <div class="vacation-detail-wrapper">
      <my-header></my-header>
      <notice-main></notice-main>
    </div>
  </transition>
</template>
<script>
import myHeader from './header'
import noticeMain from './notice-main'
export default {
  components: {
    myHeader,
    noticeMain
  }
}
</script>
<style lang="stylus" scoped>
.detail-enter-active, .detail-leave-active
  transition all .3s
.detail-enter, .detail-leave-to
  transform translate3d(100%, 0, 0)
.vacation-detail-wrapper
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background  #a2aeb5
    // .main-wrapper
    //   position fixed
    //   left 0
    //   top 44px
    //   right 0
    //   bottom 0
    //   background tomato
</style>

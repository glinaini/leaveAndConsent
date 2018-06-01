<template>
  <transition name="detail">
    <div class="vacation-detail-wrapper">
      <my-header></my-header>
      <detail-main></detail-main>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script>
import myHeader from './header'
import detailMain from './detail-main'
export default {
  components: {
    myHeader,
    detailMain
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

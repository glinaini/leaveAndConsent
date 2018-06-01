<template>
  <transition name="records">
    <div class="vacation-records-wrapper">
      <my-header :father="father"></my-header>`
      <records-main :father="father" ref="recordsMain"></records-main>
    </div>
  </transition>
</template>
<script>
import myHeader from './header'
import recordsMain from './records-main'
export default {
  components: {
    myHeader,
    recordsMain
  },
  data () {
    return {
      father: {
        state: false,
        name: '全部记录'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.records-enter-active, .records-leave-active
  transition all .3s
.records-enter, .records-leave-to
  transform translate3d(100%, 0, 0)
.vacation-records-wrapper
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


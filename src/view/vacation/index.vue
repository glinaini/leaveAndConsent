<template>
  <transition name="vacation">
    <div class="vacation-container">
      <header-jt></header-jt>
      <vacation-wapper></vacation-wapper>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </transition>
</template>
<script>
  import headerJt from './header'
  import vacationWapper from './vacation-wapper'
  export default {
    components: {
      headerJt,
      vacationWapper
    }
  }
</script>

<style lang="stylus" scoped>
.vacation-enter-active, .vacation-leave-active
  transition all .3s
.vacation-enter, .vacation-leave-to
  transform translate3d(100%, 0, 0)
.vacation-container
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background  #a2aeb5
</style>


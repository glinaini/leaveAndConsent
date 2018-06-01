<template>
  <div class="wrapper">
    <!-- 这里是审批流程 -->
    <div class="all" v-for="(list, index) in process" :key="index" :class="index < process.length -1 ? 'after': ''">
      <div class="container" v-for="(item, index) in list" :key="index">
        <div class="radius" >{{item.showName | nameFilt}}</div>
        <div class="text-container">
          <div class="name"><span :class="item.name === '我'? 'red': ''">{{item.name}} </span><span :class="item.text === '审批中'? 'red': ''">{{item.text}}</span></div>
          <div class="state">{{item.state}}</div>
        </div>
        <div class="time">{{ item.time }}</div>
        <!-- <div v-if="!(index === list.length-1)">丨</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    process: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data () {
    return {}
  },
  filters: {
    nameFilt: function (value) {
      if (value.length > 2) {
        value = value.substr(value.length - 2, value.length - 1)
        return value
      } else {
        return value
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper 
  width 100%
  background white
  .all
    width 100%
    height auto
    display flex
    flex-direction row
    flex-wrap wrap
  .after:after
      content ''
      width 0px
      height 28px
      position absolute
      left 30px
      margin-top  60px
      border 2px dashed black
    .container
      width 100%
      display flex
      height 90px
      .radius
        color white
        height 60px
        width 60px
        line-height 60px
        text-align center
        border-radius 50%
        background-color blue
      .text-container
        padding 13px 0 0 10px
        .name
          .red
            color red
        .state
          margin-top 5px
      .time
        position absolute
        margin-top 20px
        right 20px
        color #999
        height 25px
</style>


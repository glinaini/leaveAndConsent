<template>
  <div class="wrapper">
    <div v-for="(item, index) in person" :key="item.id" class="approver">
      <div v-for="list in item" :key="list.id">
          <div class="circle">{{ list.userName |nameFilt }}</div>
          <div class="name">{{ list.userName }}</div>
      </div>
      <div class="my-icon" v-if="index<person.length-1">
        <i class="cubeic-arrow"></i><i class="cubeic-arrow"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    person: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  filters: {
    nameFilt: function (name) {
      if (name.length > 2) {
        name = name.substr(name.length - 2, name.length - 1)
        return name
      } else {
        return name
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    width 100%
    background white
    display flex
    flex-wrap wrap
    .approver
      text-align center
      display flex
      .circle
        width 60px
        height 60px
        border-radius 50%
        background blue
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        line-height 60px
        color white
      .name
        display inline-block
        margin-right 0
        line-height 30px
      .my-icon
        height 90px
        line-height 60px
        margin 0 10px
</style>

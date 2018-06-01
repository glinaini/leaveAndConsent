<template>
  <div class="initiating">
    <!-- 这是审批页面 -->
      <div class="leaveSearch">
        <label v-show="searchTExt" for="q" id="q_label">搜索</label>
        <input id="q"  type="text" v-model="searchValue" v-on:focus="inputfocus" v-on:blur="changeCount(searchValue)">
        <i v-show="searchTExt" class="cubeic-search" id="q_i"></i>
        <i v-show="showsearch" id="input-search" class="cubeic-search" v-on:click="searchleave"></i>
      </div>
      <!-- 内容 -->
      <div id="centent">
        <h2 class="total">共{{lenght}}条</h2>
        <application v-bind:currentdatanew="currentdata" :currentTab="currentTab"></application>

      <!-- <div class="ending">已显示全部数据</div> -->
      </div>
    
  </div>
</template>

<script>
import application from './leaceApplication'
export default {
  components: {
    application
  },
  props: {
    currentdata: {
      type: Array,
      required: true
    },
    lenght: {
      type: Number,
      required: true
    },
    currentTab: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      searchValue: '',
      searchTExt: true,
      active: true,
      showsearch: false
    }
  },
  methods: {
    // 搜索框获取焦点
    inputfocus: function () {
      if (this.searchValue === '') {
        this.searchTExt = false
        this.showsearch = true
      }
    },
    // 搜索框失去焦点
    changeCount: function (value) {
      // console.info(value)
      if (value === '') {
        this.searchTExt = true
        this.showsearch = false
      } else {
        this.showsearch = true
      }
    },
    // 搜索
    searchleave: function () {
      console.info(this.searchValue)
    },

    back: function () {
      this.$router.push({path: '/home'})
    }
  }
}
</script>

<style lang="stylus" scoped>
.leaveSearch
    position relative
    height 44px
    width 100%
    background #f4f4f4
    font-size 14px
    text-align center
    label
      position absolute
      left 49%
      color #b2b2b2
      top 35%
    input
      text-indent 10px
      height 75%
      width 88%
      color #989898
      border #eeeeee
      border-radius: 5px;
      margin-top 1%
      padding-right: 30px;
    i
      position absolute
      top 35%
      left 53%
      margin-left -10%
      color #b2b2b2
    #input-search
      position absolute
      top 35%
      left 102%
      font-size 20px
      line-height 13px
  #centent
    .total
      text-align center
      font-size 14px
      color #666
      padding-top: 10px;
  .ending
    position absolute
    bottom 0
    padding 5px
    width 100%
    text-align center
    color #ccc
    font-size 14px
    z-index -1

</style>
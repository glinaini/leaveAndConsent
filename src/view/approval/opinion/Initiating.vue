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
        <h2 class="total">共{{len}}条</h2>
        <application v-bind:currentdatanew="currentdata" :currentTab="currentTab" ref="update"  @update='fetchRecord' @pullup='pullup'></application>

      <div class="ending" v-show="endingdata">已显示全部数据</div>
      </div>
    
  </div>
</template>

<script>
import application from './leaceApplication'
import { sendoutleave } from '@/api/examine.js'
const SUCCESS = '200'
export default {
  components: {
    application
  },
  data () {
    return {
      searchValue: '',
      searchTExt: true,
      active: true,
      showsearch: false,
      endingdata: false,
      pageNum: 1,
      pageSize: 5,
      currentdata: [],
      len: 0,
      currentTab: '-1'
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
    },
    // 数据下来更新
    fetchRecord() {
      this.pageNum = 1
      this.upDown()
    },
    // 上拉加载
    pullup() {
      this.pageNum ++
      const data = {
        type: this.currentTab,
        taskType: '',
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      sendoutleave(data).then(res => {
        res = res.data
        if (res.state === SUCCESS) {
          if (this.currentdata.length < res.data.total) {
            // 如果还有数据
            this.currentdata = this.currentdata.concat(res.data.list)
            this.len = res.data.total
            this.endingdata = false
          } else {
            // 拉取完数据了
            setTimeout(() => {
              this.endingdata = true
            }, 1000)
          }
          setTimeout(() => {
            this.$refs.update.getNewDate()
          }, 5000)
        } else {
          this.showError(res.message)
        }
      }).catch(_ => {
        this.showError('连接服务器出错')
      })
    },
    // 我发起的请假
    senddata: function (type) {
      this.pageNum = 1
      this.currentTab = type
      const data = {
        type,
        taskType: '',
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      const loading = this.showLoading()
      sendoutleave(data).then(res => {
        loading.hide()
        res = res.data
        if (res.state === SUCCESS) {
          const data = res.data.list
          this.currentdata = data
          this.len = res.data.total
        } else {
          this.showError(res.message)
        }
      }).catch(_ => {
        loading.hide()
        this.showError('连接服务器出错')
      })
    },
    upDown() {
      const data = {
        type: this.currentTab,
        taskType: '',
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }
      sendoutleave(data).then(res => {
        res = res.data
        if (res.state === SUCCESS) {
          this.currentdata = res.data.list
          this.len = res.data.total
          setTimeout(() => {
            this.$refs.update.getNewDate()
          }, 1000)
        } else {
          this.showError(res.message)
        }
      }).catch(_ => {
        this.showError('连接服务器出错')
      })
    },
    // 显示加载中的效果
    showLoading () {
      const loading = this.$createToast({
        txt: 'Loading',
        mask: true
      })
      loading.show()
      return loading
    },
    // 显示加载错误
    showError(msg) {
      this.$createDialog({
        type: 'alert',
        title: '提示',
        content: msg
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
.initiating
  position fixed 
  left 0 
  right 0 
  top 44px 
  bottom 0 
  background #fff 
  .leaveSearch
    position relative
    height 44px
    width 100%
    background #f4f4f4
    font-size 14px
    text-align center
    z-index 1
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
    position absolute
    left 0
    right 0
    bottom 0
    top 44px
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
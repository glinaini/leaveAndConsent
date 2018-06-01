<template>
    <div class="detail-wrapper">
      <my-header :title="title"></my-header>
      <div class="container">
        <records-list :form="form" ref="update" @update='fetchRecord' @pullup='pullup'></records-list>
        <!-- <div class="show-more">上拉显示更多</div> -->
        <div class="show-more">{{msg}}</div>
      </div>
    </div>
</template>

<script>
import myHeader from './header'
import recordsList from './records-list'
export default {
  components: {
    myHeader, recordsList
  },
  data () {
    return {
      title: {
        name: '汪涵事假'
      },
      msg: '下载加载更多',
      page: 1,
      display: 10,
      form: [{
        id: '6f9a5c995fa94279bb9b583414fe46c5',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 17:03:26',
        leaveType: '事假'
      }, {
        id: '68f36c20d0834e67940a85431ecf5afe',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 16:54:44',
        leaveType: '事假'
      }]
    }
  },
  methods: {
    // 数据下来更新
    fetchRecord() {
      setTimeout(() => {
        this.$refs.update.getNewDate()
        // 下拉直接刷新整个页面
        this.page = 1
        // 到时候调用一下接口
      }, 1000)
    },
    // 上拉加载
    pullup() {
      this.page ++
      setTimeout(() => {
        // 模拟数据
        if (this.page < 4) {
          this.form = this.form.concat(this.form[0])
        } else {
          this.msg = '以显示全部'
        }
        this.$refs.update.getNewDate()
      }, 1000)
    }
  }
}
</script>


<style lang="stylus" scoped>
.detail-wrapper
  position fixed
  left 0
  top 0
  right 0
  bottom 0
  background  #a2aeb5
  .container
    position fixed
    top 44px
    left 0
    right 0
    bottom 0
    width 100%
    background white
    .show-more
      position relative
      bottom 12px
      text-align center
      color #999
      font-size 12px
      z-index 11
      background #fff
</style>

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
import { getRecordsByType } from '@/api/examine.js'
export default {
  components: {
    myHeader, recordsList
  },
  data () {
    return {
      title: {
        name: ''
      },
      msg: '下载加载更多',
      page: 1,
      display: 5,
      total: '',
      applicantId: '',
      type: '',
      form: [],
      taskType: '',
      formNow: []
      // form: [{
      //   id: '6f9a5c995fa94279bb9b583414fe46c5',
      //   startTime: '2018-05-17 10:30',
      //   endedTime: '2018-05-17 12:30',
      //   name: '汪宇',
      //   state: '等待欧阳欢欢审批中',
      //   dataTime: '2018-05-26 17:03:26',
      //   leaveType: '事假'
      // }, {
      //   id: '68f36c20d0834e67940a85431ecf5afe',
      //   startTime: '2018-05-17 10:30',
      //   endedTime: '2018-05-17 12:30',
      //   name: '汪宇',
      //   state: '等待欧阳欢欢审批中',
      //   dataTime: '2018-05-26 16:54:44',
      //   leaveType: '事假'
      // }]
    }
  },
  methods: {
    // 获取页面的整个请假列表
    _getRecordsByType () {
      getRecordsByType(this.applicantId, this.taskType, this.type, this.page, this.display).then(res => {
        res = res.data
        if (res.state === '200') {
          this.form = res.data.list
          this.total = res.data.total
          if (this.form.length < this.total) {
            this.msg = '上滑加载更多'
          } else {
            this.msg = '已显示全部数据'
          }
        } else {
          this.$MessageError(res.message)
        }
      }).catch(e => {
        this.$MessageError(e)
      })
    },
    // 数据下来更新
    fetchRecord() {
      setTimeout(() => {
        this.$refs.update.getNewDate()
        // 下拉直接刷新整个页面
        this.page = 1
        this._getRecordsByType()
        // 到时候调用一下接口
      }, 1000)
    },
    // 获取id和type
    fetchTypeAndId () {
      this.applicantId = this.$route.params.applicantId
      this.taskType = this.$route.params.taskType
      this.type = this.$route.params.type
      this.title.name = this.$route.params.name + this.$route.params.taskType
      console.log(this.applicantId)
    },
    // 上拉加载
    pullup() {
      this.page ++
      setTimeout(() => {
        // 模拟数据
        // if (this.page < 4) {
        //   this.form = this.form.concat(this.form[0])
        // } else {
        //   this.msg = '以显示全部'
        // }
        if (this.form.length < this.total) {
          this.msg = '上滑加载更多'
          getRecordsByType(this.applicantId, this.taskType, this.type, this.page, this.display).then(res => {
            res = res.data
            if (res.state === '200') {
              this.formNow = res.data.list
              this.form = this.form.concat(this.formNow)
              this.total = res.data.total
              if (this.form.length < this.total) {
                this.msg = '上滑加载更多'
              } else {
                this.msg = '已显示全部数据'
              }
            } else {
              this.$MessageError(res.message)
            }
          }).catch(e => {
            this.$MessageError(e)
          })
        } else {
          this.msg = '已显示全部数据'
        }
        this.$refs.update.getNewDate()
      }, 1000)
    }
  },
  activated () {
    this.fetchTypeAndId()
    this._getRecordsByType()
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

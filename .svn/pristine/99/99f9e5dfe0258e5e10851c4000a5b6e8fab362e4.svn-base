<template>
  <div class="wrapper">
    <div class="popup" v-if="father.state">
      <div class="no-height">
        <div class="list" v-for="(item, index) in form.list" :class="{'active' : item.name === father.name}" :key="index" @click="_getRecordsByType(item, index)">
          {{ item.name }}
          <span v-if="item.number !== ''">(</span>
          {{ item.number }}
          <span v-if="item.number !== ''">)</span>
        </div>          
      </div>
    </div>
    <leave-detail :form="form" @update='fetchRecord' @pullup='pullup'></leave-detail>
  </div>
</template>
<script>
import leaveDetail from './records-list'
import { fetchSeclect, getRecordsByType } from '@/api/vacation'
const SUCCESS = '200'
export default {
  props: {
    father: {}
  },
  components: {
    leaveDetail
  },
  data () {
    return {
      listPush: [],
      current: 0,
      form: {
        page: 1,
        size: 5,
        total: '',
        list: [],
        type: '1',
        listData: [],
        name: '',
        downState: false
      }
    }
  },
  methods: {
    // 获取下拉页面的几个请假内容
    _fetchSeclect () {
      fetchSeclect().then(res => {
        res = res.data
        if (res.state === SUCCESS) {
          this.form.list = res.data.data
        } else {
          this.$MessageError(res.message)
        }
      }).catch(e => {
        this.$MessageError(e)
      })
    },
    // 获取请假详情列表的接口，也是刷新页面的接口
    // 刷新页面
    fetchRecord () {
      getRecordsByType(this.form.name, 0, this.form.page, this.form.size).then(res => {
        res = res.data
        if (res.state === SUCCESS) {
          this.form.total = res.data.total
          this.form.listData = res.data.list
          if (this.form.total > this.form.listData.length) {
            this.form.downState = false
          } else {
            this.form.downState = true
          }
          console.log(this.form.listData)
        } else {
          this.$MessageError(res.message)
        }
      }).catch(e => {
        this.$MessageError(e)
      })
    },
    // 子组件下来获取更多数据
    // 上拉加载更多数据
    pullup () {
      if (this.form.listData.length < this.form.total) {
        getRecordsByType(this.form.name, 0, this.form.page, this.form.size).then(res => {
          res = res.data
          if (res.state === SUCCESS) {
            this.form.total = res.data.total
            this.listPush = res.data.list
            this.listPush = this.form.listData.concat(this.listPush)
            this.form.listData = this.listPush
            if (this.form.total > this.form.listData.length) {
              this.form.downState = false
            } else {
              this.form.downState = true
            }
            console.log(this.form.listData)
          } else {
            this.$MessageError(res.message)
          }
        }).catch(e => {
          this.$MessageError(e)
        })
      } else {
        // this.form.downState = true
        // this.$MessageSuccess('暂无更多数据')
      }
    },
    // 根据请假的类型获取分页 请假详情
    _getRecordsByType (item, index) {
      this.page = 1
      this.current = index
      this.father.state = !this.father.state
      this.father.name = item.name
      if (item.name === '全部记录') {
        this.form.name = ''
      } else {
        this.form.name = item.name
      }
      this.fetchRecord()
    },
    // 获取路由加载的请假类型并加载
    loadParmasType () {
      this.form.name = this.$route.params.type
      if (!this.$route.params.type) {
        this.father.name = '全部记录'
      } else {
        this.father.name = this.$route.params.type
      }
    }
  },
  created () {
    this._fetchSeclect()
    // 路由传值改变请假类型
    this.loadParmasType()
    // 根据请假类型加载所有请假列表
    this.fetchRecord()
  },
  activated () {
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  position fixed
  top 44px
  left 0
  right 0
  bottom 0
  width 100%
  background white
  .popup
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background white
    z-index 9
    .no-height
      width 100%
      height auto 
      background white
      display flex
      flex-wrap wrap
      .list
        color black
        height 20px
        padding 15px
        border black solid 2px
        border-radius 5px
        margin 10px 0px 10px 10px
      .active
        color orange
        border orange solid 2px
</style>
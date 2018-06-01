<template>
  <div class="vacation-wrapper">
    <cube-form :model="model" :immediate-validate="false" @validate="validateHandler" @submit="submitHandler" @reset="resetHandler">
      <cube-form-group>
        <div class="title header-title" v-show="headerTitleShow">
          <span class="header-title-left header-title-item">{{nowDate}}年{{headerTitle.taskType}}已请{{headerTitle.number}}次<span style="color: red; padding-left: 2px">{{headerTitle.timeSum}}</span>天</span>
          <span class="header-title-right header-title-item" @click="showDetail">查看明细</span>
          <div></div>
        </div>
      </cube-form-group>
      <cube-form-group>
        <cube-form-item :field="fields[0]"></cube-form-item>
          <h1 class="title">请假时间</h1>
        <cube-form-item :field="fields[1]">
          <cube-button @click="showDatePicker('start')" class="btn">{{model.startTime || '请选择开始时间'}}</cube-button>
          <date-picker ref="datePicker" @select="dateSelectHandler" :dateTypes="dateTypes"></date-picker>
        </cube-form-item>
        <cube-form-item :field="fields[2]">
          <cube-button @click="showDatePicker('end')" class="btn">{{model.endTime || '请选择结束时间'}}</cube-button>
          <date-picker ref="datePicker" @select="dateSelectHandler" :dateTypes="dateTypes"></date-picker>
        </cube-form-item>
        <!-- 时长 -->
        <cube-form-item :field="fields[3]"></cube-form-item>
        <h1 class="title">请假事由</h1>
        <cube-form-item :field="fields[4]"></cube-form-item>
        <cube-form-item :field="fields[5]"></cube-form-item>
        <h1 class="title">图片(最多6张)</h1>
        <cube-form-item :field="fields[6]"></cube-form-item>
        <h1 class="title">审批人</h1>
        <approver :person="person"></approver>
      </cube-form-group>
      <cube-form-group>
        <cube-button type="submit">提交</cube-button>
      </cube-form-group>
    </cube-form>
  </div>
</template>

<script>
  import datePicker from './datePicker'
  import approver from './Approver'
  import { addVacation, recordVacation, fetchApproval } from '@/api/vacation'
  import { countDate, getImgUrl } from '@/utils/operation'
  const SUCCESS_OK = '200'
  export default {
    data () {
      return {
        nowDate: new Date().getFullYear(),
        headerTitleShow: false,
        headerTitle: {
          timeSum: 3,
          number: 1,
          taskType: '婚假'
        },
        person: [], // 审批人列表
        dateTypes: 'start',
        validity: {},
        valid: undefined,
        model: {
          selectValue: '',
          startTime: '',
          endTime: '',
          totaltime: '',
          reason: '',
          area: '',
          uploadValue: []
        },
        fields: [{
          type: 'select',
          modelKey: 'selectValue',
          label: '请假类型:',
          props: {
            options: ['事假', '病假', '婚假', '丧假', '探亲假', '产假（护理假)', '计划生育假', '其他'],
            placeholder: '请选择请假类型'
          },
          rules: {
            required: true
          },
          events: {
            change: (item) => {
              this._recordVacation(item)
            }
          }
        }, {
          modelKey: 'startTime',
          label: '开始时间:',
          rules: {
            required: true
          }
        }, {
          modelKey: 'endTime',
          label: '结束时间:',
          rules: {
            required: true
          }
        }, {
          type: 'input',
          modelKey: 'totaltime',
          label: '时长:',
          props: {
            placeholder: '最少0.5天',
            disabled: true
          },
          rules: {
            required: true
          },
          // validating when blur
          trigger: 'blur'
        }, {
          type: 'textarea',
          modelKey: 'reason',
          label: '请假事由:',
          props: {
            placeholder: '请输入请假事由',
            maxlength: 200
          },
          rules: {
            required: true
          },
          // validating when blur
          trigger: 'blur'
        }, {
          type: 'input',
          modelKey: 'area',
          label: '外出地点:',
          props: {
            placeholder: '请输入外出地点'
          },
          // validating when blur
          trigger: 'blur'
        }, {
          type: 'upload',
          modelKey: 'uploadValue',
          events: {
            'file-removed': (...args) => {
              let res = getImgUrl(args)
              console.log(res) // 获取删除的路径
              console.log('file removed', args)
              return false
            },
            'file-success': (...args) => {
              console.log('文件上传成功', args)
            }
          },
          props: {
            action: {
              target: 'http://192.168.199.99:8686/process/Resources/save'
            },
            max: 6
          },
          messages: {
            uploaded: '上传失败'
          }
        }]
      }
    },
    methods: {
      submitHandler(e) {
        e.preventDefault()
        console.log('submit', e)
        this._addVacation()
      },
      showDetail() {
        this.$router.push({path: '/vacation/detail/records'})
      },
      // 查看请假次数及时间
      _recordVacation(name) {
        const loading = this.showLoading()
        recordVacation(name).then(res => {
          loading.hide()
          res = res.data
          if (res.state === SUCCESS_OK) {
            // 如果查询是空
            if (!res.data.taskType) {
              this.headerTitleShow = false
              return
            }
            this.headerTitleShow = true
            this.headerTitle = res.data
          } else {
            this.showError(res.messages)
          }
        }).catch(_ => {
          loading.hide()
          this.showError('连接服务器出错')
        })
      },
      // 点击提交按钮
      _addVacation() {
        const loading = this.showLoading()
        addVacation(this.model).then(res => {
          loading.hide()
          res = res.data
          if (res.state === SUCCESS_OK) {
            this.headerTitleShow = false
            this.resetHandler()
            const toast = this.$createToast({
              txt: '提交请假单成功!等待审核',
              type: 'correct'
            })
            toast.show()
          } else {
            this.showError(res.messages)
          }
        }).catch(_ => {
          loading.hide()
          this.showError('连接服务器出错')
        })
      },
      validateHandler(result) {
        this.validity = result.validity
        this.valid = result.valid
        console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
      },
      // 重置
      resetHandler(e) {
        console.log('reset', e)
      },
      // 打开时间选项盘
      showDatePicker(type) {
        if (this.model.selectValue) {
          this.dateTypes = type
          // 如果没有选择开始时间就选择结束时间
          if (this.dateTypes === 'start') {
            this.$refs.datePicker.dateTimePicker.show()
          } else if (this.dateTypes === 'end') {
            // 如果又开始时间
            if (this.model.startTime) {
              this.$refs.datePicker.dateTimePicker.show()
            } else {
              this.showError('请先选择开始时间')
            }
          }
        } else {
          // 如果没有请假类型，就选择提示, 提示先选择请假类型
          this.showError('请先选择请假类型')
        }
      },
      // 选中时间后
      dateSelectHandler(selectedVal, date, hour) {
        if (this.dateTypes === 'start') {
          // 如果选中结束时间后在选开始时间
          this.startDate = date
          this.startTime = hour
          if (this.model.endTime) {
            let diff = countDate(this.startDate, this.endDate, this.startTime, this.endTime)
            // 请假时长验证成功
            if (diff.type) {
              this.model.startTime = selectedVal
              this.model.totaltime = diff.diff + '天'
              // diff.diff 为总的天数, this.model.selectValue选中的类型
              // 获取审批人列表
              const loading = this.showLoading()
              fetchApproval(this.model.selectValue, diff.diff).then(res => {
                loading.hide()
                res = res.data
                if (res.state === SUCCESS_OK) {
                  this.person = res.data
                } else {
                  this.showError(res.messages)
                }
              }).catch(_ => {
                loading.hide()
                this.showError('连接服务器出错')
              })
            } else {
              // 如果没有请假类型，就选择提示, 提示先选择请假类型
              this.showError(diff.title)
              this.model.totaltime = ''
            }
          } else {
            this.model.startTime = selectedVal
          }
        } else {
          // 当开始时间存在时
          this.endDate = date
          this.endTime = hour
          // 计算请假的总共时间
          let diff = countDate(this.startDate, this.endDate, this.startTime, this.endTime)
          // 请假时长验证成功
          if (diff.type) {
            this.model.endTime = selectedVal
            this.model.totaltime = diff.diff + '天'
            // diff.diff 为总的天数, this.model.selectValue选中的类型
            // 获取审批人列表
            const loading = this.showLoading()
            fetchApproval(this.model.selectValue, diff.diff).then(res => {
              loading.hide()
              res = res.data
              if (res.state === SUCCESS_OK) {
                this.person = res.data
              } else {
                this.showError(res.messages)
              }
            }).catch(_ => {
              loading.hide()
              this.showError('连接服务器出错')
            })
          } else {
            // 如果没有请假类型，就选择提示, 提示先选择请假类型
            this.showError(diff.title)
          }
        }
      },
      // 显示加载中的效果
      showLoading() {
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
    },
    components: {
      datePicker, approver
    }
  }
</script>


<style lang="stylus" scoped>
  .vacation-wrapper 
    position fixed 
    left 0 
    right 0 
    top 44px 
    bottom 0 
    background #fff 
    overflow-y auto
    &>>>input, &>>>textarea
      text-align right
    &>>>.cube-select
      text-align right 
    .title
      margin 5px 0
      background #f5f5f5
      padding-left 5px
    .btn
      background #fff
      color #999
      text-align right 
      outline none
      border none
    .header-title
      box-sizing border-box
      padding 0 5px
      display flex
      .header-title-item
        display inline-block
        box-sizing border-box
      .header-title-left
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        text-align left 
        flex 1
      .header-title-right
        text-align right
        padding-right 5px
        width 100px
        color blue
</style>

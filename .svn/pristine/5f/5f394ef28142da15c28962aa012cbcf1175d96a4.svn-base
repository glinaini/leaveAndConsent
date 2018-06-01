<template>
  <div class="wrapper">
    <div class="popup" v-if="father.state">
      <div class="no-height">
        <div class="list" v-for="(item, index) in list" :class="{'active' : index === current}" :key="index" @click="_fetchByType(item, index)">{{ item.name + item.number }}</div>
      </div>
    </div>
    <leave-detail :currentdatanew="listData"></leave-detail>
  </div>
</template>
<script>
import leaveDetail from './records-list'
export default {
  props: {
    father: {}
  },
  components: {
    leaveDetail
  },
  data () {
    return {
      state: true,
      current: 0,
      list: [{
        id: '1',
        name: '全部记录',
        number: '(1)'
      }, {
        id: '2',
        name: '产假',
        number: ''
      }, {
        id: '3',
        name: '婚假',
        number: ''
      }, {
        id: '4',
        name: '病假',
        number: ''
      }, {
        id: '5',
        name: '丧假',
        number: ''
      }, {
        id: '6',
        name: '事假',
        number: ''
      }, {
        id: '7',
        name: '年假',
        number: ''
      }],
      listData: [{
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
      }, {
        id: '010018269d724f388ad984491654e3d4',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 16:54:29',
        leaveType: '事假'
      }, {
        id: 'e2d0263d319741b39f914e280e6be1f0',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 16:53:17',
        leaveType: '探亲假'
      }, {
        id: '3248835c6f6b40898ee77d7e0cdee69d',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 13:35:30',
        leaveType: '事假'
      }, {
        id: 'b0cc01d9742d46479c6bb6c59804cb1f',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 12:09:28',
        leaveType: '丧假'
      }, {
        id: 'da95fd8d6d374f4393703325cba64904',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待李明,计划生育审批中',
        dataTime: '2018-05-26 12:08:48',
        leaveType: '婚假'
      }, {
        id: 'dbc3712954a64497beccbd2cda420f02',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 12:07:50',
        leaveType: '事假'
      }, {
        id: '68cd2b66605a46fc8357edaba9e091e1',
        startTime: '2018-05-17 10:30',
        endedTime: '2018-05-17 12:30',
        name: '汪宇',
        state: '等待欧阳欢欢审批中',
        dataTime: '2018-05-26 12:06:59',
        leaveType: '病假'
      }]
    }
  },
  methods: {
    _fetchByType (item, index) {
      this.current = index
      this.father.state = !this.father.state
    }
  },
  mounted () {
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
    z-index 100000009
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
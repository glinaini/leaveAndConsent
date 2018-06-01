import fetch from '@/utils/fetch'
import qs from 'qs'
import { getImgUrl } from '@/utils/operation' // 处理图片路径

import store from '@/store/index'
import router from '@/router/index'
import { Dialog } from 'cube-ui'

const HTTP = 'http://192.168.199.98:8086'
// const HTTP = 'http://192.168.30.177:8086'
// 处理提交接口的权限
export function permission() {
  if (store.getters.user.value) {
    return store.getters.user.value
  } else {
    return false
  }
}
// 跑到home页面
export function toHome() {
  Dialog.$create({
    type: 'confirm',
    icon: 'cubeic-alert',
    content: '用户会话过期，请重新登录',
    confirmBtn: {
      text: '确定按钮',
      active: true,
      disabled: false
    },
    cancelBtn: {
      text: '取消按钮',
      active: false,
      disabled: false
    },
    onConfirm: () => {
      router.push({path: '/home'})
    },
    onCancel: () => {
    }
  }).show()
}
// 获取申请人的审批人
export function fetchApproval(taskType, lengthOfTime) {
  let userLogicId = permission()
  if (!userLogicId) {
    toHome()
  }
  let data = {
    userLogicId,
    taskType,
    lengthOfTime
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/user/selectApprover`,
    method: 'post',
    data
  })
}
// 新增任务
export function addVacation(info) {
  let applicantId = permission()
  if (!applicantId) {
    toHome()
  }
  let data = {
    applicantId,
    applicantName: store.getters.user.name,
    taskType: info.selectValue,
    beginTime: info.startTime,
    endTime: info.endTime,
    lengthOfTime: (info.totaltime).slice(0, info.totaltime.length - 1),
    cause: info.reason,
    outgoingLocation: info.area,
    taskPictureUrl: getImgUrl(info.uploadValue).join(',')
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/insertSelective`,
    method: 'post',
    data
  })
}
// 请假明细列表接口
export function fetchDetails () {
  let applicantId = permission()
  if (!applicantId) {
    toHome()
  }
  let data = {
    applicantId
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveDetailedCount`,
    method: 'post',
    data
  })
}
// 选择请假类型后查看请假次数及时间
export function recordVacation (taskType) {
  let applicantId = permission()
  if (!applicantId) {
    toHome()
  }
  let data = {
    applicantId,
    taskType
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveNumber`,
    method: 'post',
    data
  })
}
// 请假明细（统计页）,下拉列表框用
export function fetchSeclect () {
  let applicantId = permission()
  if (!applicantId) {
    toHome()
  }
  let data = {
    applicantId
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveDetailedCountList`,
    method: 'post',
    data
  })
}
// 根据当前点击的请假内容，页数获取当前的请假列表
export function getRecordsByType (taskType, type, pageNum, pageSize) {
  let id = permission()
  if (!id) {
    toHome()
  }
  let data = {
    id,
    taskType,
    type: type,
    pageNum,
    pageSize
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveList`,
    method: 'post',
    data
  })
}

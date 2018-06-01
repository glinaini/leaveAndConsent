import fetch from '@/utils/fetch'
import qs from 'qs'
const HTTP = 'http://192.168.199.98:8086'

// 我发起的请假单
export function sendoutleave (dataType) {
  let data = {
    id: '3c8eaa6baf604bf5a21cb81edd1d3f54',
    type: dataType.type,
    taskType: dataType.taskType
  }
  data = qs.stringify(data)
  return fetch({
    url: `${HTTP}/process/task/leaveList`,
    method: 'post',
    data
  })
}

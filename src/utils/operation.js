// 计算请假时长的工具
export function countDate(startDate, endDate, startTime, endTime) {
  let startdate = startDate.getTime() // 开始时间时间戳
  let enddate = endDate.getTime() // 结束时间时间戳
  let starttime = startTime * 1 // 请假开始时
  let endtime = endTime * 1 // 请假结束时
  let diff = enddate - startdate
  // 如果选择的结束时间小于开始时间
  if (diff < 0) {
    return {
      type: false, // 判断要不要通过验证
      title: '结束时间不能够小于开始时间',
      diff: 0
    }
  } else if (diff === 0) {
    // 如果同一天
    if ((endtime - starttime) === 0) {
      return {
        type: false, // 判断要不要通过验证
        title: '至少0.5天',
        diff: 0
      }
    } else if ((endtime - starttime) < 6) {
      return {
        type: true,
        title: '',
        diff: 0.5
      }
    } else {
      return {
        type: true,
        title: '',
        diff: 1
      }
    }
  } else {
    // 如果时间大于一天
    let diffDate = diff / 1000 / 60 / 60 / 24
    // 请假为一天
    if ((endtime - starttime) < 0) {
      return {
        type: true, // 判断要不要通过验证
        title: '',
        diff: diffDate - 0.5
      }
    } else if ((endtime - starttime) === 0) {
      return {
        type: true, // 判断要不要通过验证
        title: '',
        diff: diffDate + 1
      }
      // 请假为 0.5天
    } else if ((endtime - starttime) < 6 && (endtime - starttime) > 0) {
      return {
        type: true,
        title: '',
        diff: diffDate + 0.5
      }
      // 请假为两天
    } else if ((endtime - starttime) > 6) {
      return {
        type: true,
        title: '',
        diff: diffDate + 1
      }
    }
  }
}
// 返回文件的路径
export function getImgUrl (arr) {
  let wrapImg = []
  arr.forEach(element => {
    if (element.response) {
      wrapImg.push(element.response.data.url)
    }
  })
  return wrapImg
}

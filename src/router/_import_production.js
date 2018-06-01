// 生产环境
module.exports = file => () => import('@/view/' + file + '.vue')

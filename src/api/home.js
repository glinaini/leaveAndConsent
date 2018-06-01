import fetch from '@/utils/fetch'
const $HTTP = 'http://192.168.199.98:8086'
export function fetchUser() {
  return fetch({
    url: `${$HTTP}/process/user/queryByList`,
    method: 'post'
  })
}

<template>
  <div class="hello">
    <div>
      <cube-button @click="showToast('vacation/index')">请假</cube-button>
      <cube-button @click="showToast('approval')">审批</cube-button>
      <h1 style="text-align: center; padding: 10px 0">请选择模拟登陆用户</h1>
      <cube-select v-model="value" :options="options" @change="change"></cube-select>
    </div>
  </div>
</template>

<script>
import {fetchUser} from '@/api/home'
export default {
  data () {
    return {
      options: [{
        value: 1,
        text: '张三'
      }, {
        value: 2,
        text: '王五'
      }, {
        value: 3,
        text: '李四'
      }],
      value: ''
    }
  },
  methods: {
    showToast (item) {
      if (this.$store.getters.user.value) {
        this.$router.push({path: `/${item}`})
      } else {
        alert('请选择模拟用户')
      }
    },
    change(value, index, text) {
      this.$store.dispatch('UserInfo', this.options[index])
      console.log(this.$store.getters.user)
    }
  },
  mounted () {
    fetchUser().then(res => {
      res = res.data
      if (res.state === '200') {
        this.options = res.data
      } else {
        alert('连接数据库失败')
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

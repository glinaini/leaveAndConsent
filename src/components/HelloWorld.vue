<template>
  <div class="hello">
    <div v-show="isshow">
      <cube-button @click="showToast">请假</cube-button>
      <cube-button @click="showToast">审批</cube-button>
    </div>
    <div v-show="!isshow">
      <vacation></vacation>
    </div>
  </div>
</template>

<script>
import vacation from '@/view/vacation/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isshow: true
    }
  },
  components: {
    vacation
  },
  methods: {
    showToast () {
      this.isshow = false
    }
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

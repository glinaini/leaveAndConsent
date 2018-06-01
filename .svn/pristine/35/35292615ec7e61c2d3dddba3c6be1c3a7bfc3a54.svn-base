<template>
  <div>
  </div>
</template>
<script>
const START_TIME = [{text: '09点', value: '09'}, {text: '13点', value: '13'}]
const END_TIME = [{text: '12点', value: '12'}, {text: '18点', value: '18'}]
export default {
  props: {
    dateTypes: ''
  },
  methods: {
    showDateTimePicker() {
      if (!this.dateTimePicker) {
        this.dateTimePicker = this.$createDatePicker({
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 20),
          value: new Date(),
          columnCount: 3,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
          format: {
            year: 'YY年',
            month: 'MM月',
            date: 'DD日'
          }
        })
      }
    },
    selectHandle(date, selectedVal, selectedText) {
      let year = selectedVal.join('-')
      let timeArr = this.dateTypes === 'start' ? START_TIME : END_TIME
      this.picker = this.$createPicker({
        title: '选择时间',
        data: [timeArr],
        onSelect: (selectedVal, selectedIndex, selectedText) => {
          this.$emit('select', year + ':' + selectedVal, date, selectedVal)
        }
      }).show()
    },
    cancelHandle() {
    }
  },
  mounted () {
    this.showDateTimePicker()
  }
}
</script>


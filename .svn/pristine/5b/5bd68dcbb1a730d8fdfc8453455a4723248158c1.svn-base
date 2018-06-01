<template>
  <div class="leavedetails">
   <!-- 内容 -->
   <div class="details" v-for="(item, index) in details" :key="index">
       <div class="name">
           <div class="nameImg">{{item.name}}</div>
           <div class="nametext"><p>{{item.name}}</p><p class="wait-p">等待 {{item.waitOpinion}} 审批中</p></div>
       </div>
       <div class="details-content">
           <div class="detailstext"><p>审批编号</p><p>{{item.id}}</p></div>
           <div class="detailstext"><p>所在部门</p><p>{{item.department}}</p></div>
           <div class="detailstext"><p>请假类型</p><p>{{item.type}}</p></div>
           <div class="detailstext"><p>开始时间</p><p>{{item.startTime}}</p></div>
           <div class="detailstext"><p>结束时间</p><p>{{item.endedTime}}</p></div>
           <div class="detailstext"><p>时  长</p><p>{{item.timeLength}}</p></div>
           <div class="detailstext Reason"><p>请假事由</p><p>{{item.leaveReason}}</p></div>
           <div class="detailstext"><p>是否外出</p><p>{{item.goOut}}</p></div>
           <div class="detailstext"><p>图  片</p><p><img :src="item.url" alt=""></p></div>
           <div class="leaveFrequency"><p>2018年{{item.type}}已请4次  共8天</p><p>查看明细</p></div>
       </div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: [{
        name: '汪宇',
        waitOpinion: '欧阳欢欢',
        id: 12123,
        department: '产品部',
        type: '事假',
        startTime: '2018-05-17 10:31',
        endedTime: '2018-05-18 18:00',
        timeLength: 2,
        leaveReason: '因为家里有事，临时需要请假回家立即处理，往领导批准 因为家里有事，临时需要请假回家立即处理，往领导批准',
        goOut: '北京市朝阳区',
        img: 'url'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.leavedetails
  padding-bottom 10px
  background-color #ffffff
  margin-bottom: 11px;
  .name
    padding 10px
    border 1px solid #000
    border-left none
    border-right none
    .nameImg
      width 60px
      height 60px
      margin-right 10px
      display inline-block
      background-color blue
      border-radius 100%
      text-align center
      line-height 60px
      color #ffffff
    .nametext
      height 60px
      display inline-block
      .wait-p
        position relative
        top 20px
        font-size 14px
        color #f60
   .details-content
     padding 20px
     .detailstext
       position relative
       padding-bottom 15px
       font-size 16px
       p
         display inline-block
       p:first-child
         position absolute
         top 0
         width 20%
         margin-right 5%
         text-align right 
         color #999
       p:last-child
         width 75%
         margin-left 25%
         text-alian left
         img
           width 50px
           height 50px
           margin-right 10px 
     .Reason
       p:last-child
         line-height 20px
     .leaveFrequency
       margin 5px
       padding 10px
       font-size 14px
       background #f3f3f3
       border-radius 8px
       p:first-child
         text-align left 
         display inline-block
       p:last-child
         position absolute
         right 10%
         color blue
         display inline-block
         
       
</style>



<template>
  <view class="order-list">
    <block v-for="(item,index) in orders" :key="index">
      <view class="order-time">{{item.ftime}}:</view>
      <view class="order-txt">{{item.context}}</view>
    </block>
  </view>
</template>
<script>
export default {
     data(){
          return{
               orders:[]
          }
     },
  onLoad: function(options) {
    console.log(options);
    console.log(this.globalData.orderInfo)
     var orderInfo = this.globalData.orderInfo;
     this.orders=orderInfo
  }
};
</script>
<style>
</style>
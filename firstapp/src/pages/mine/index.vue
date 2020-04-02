<template>
  <view class="container">
  <!-- <view @click="bindViewTap" class="userinfo">
    <image class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover"></image>
    <text class="userinfo-nickname">欢迎您,{{userInfo.nickName}}</text>
  </view> -->
   <view class="userinfo">
  <button v-if="!hasUserInfo && canIUse" open-type="getUserInfo" @getuserinfo="getUserInfo"> 获取头像昵称 </button>
    <block v-else>
      <image @click="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" mode="cover"></image>
      <text class="userinfo-nickname">{{userInfo.nickName}}</text>
    </block>
  </view>
  <view class="section">
    <input class="order-input" placeholder="请输入订单号" @change="bindChange"  v-model="value" id="orderId" />
    <input  class="order-input" placeholder="请输入快递公司如zhongtong" @change="bindChange" v-model="value" id="company" />
  </view>
  <text>{{errTip}}</text>
  <button class="query-btn" size="default" type="primary"  loading=""  @click="search"> 查询 </button>
</view>
</template>
<script>
 import {app,globalData} from "../../App.vue";
export default {
     data(){
          return{
               userInfo: {},
               inputCon: {},
               queryInfo:"",
               orderInfo:[],
               hasUserInfo: false,
               errTip: '',
               canIUse: mpvue.canIUse('button.open-type.getUserInfo'),
          }
     },
      created () {
      var app = getApp();
      console.log(app)
     },
  
     onLoad: function () {
          console.log('onLoad');
          // console.log(app);
          console.log(this.globalData.userInfo);
            console.log(this.globalData.orderInfo)
          if (this.globalData.userInfo) {
               // this.setData({
               // userInfo: app.globalData.userInfo,
               // hasUserInfo: true
               // });
                this.userInfo=this.globalData.userInfo,
                this.hasUserInfo=true;
          } else if (this.canIUse){
               // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
               // 所以此处加入 callback 以防止这种情况
               app.userInfoReadyCallback = res => {
               // this.setData({
               //      userInfo: res.userInfo,
               //      hasUserInfo: true
               // });
                this.userInfo=res.userInfo,
                this.hasUserInfo=true;
               }
          } else {
          // 在没有 open-type=getUserInfo 版本的兼容处理
          wx.getUserInfo({
               success: res => {
                    this.globalData.userInfo = res.userInfo
                    // this.setData({
                    // userInfo: res.userInfo,
                    // hasUserInfo: true
                    // });
                    this.userInfo=res.userInfo,
                    this.hasUserInfo=true;
               }
          })
          }
          // var that = this
          // //调用应用实例的方法获取全局数据
          // app.getUserInfo(function (userInfo) {
          //      //更新数据
          //      // that.setData({
          //      // userInfo: userInfo
          //      // })
          //      this.userInfo=userInfo
          // });

  
     },
     mounted () {
     
     },
     //
     methods:{
                    // 获取用户信息
          getUserInfo: function(e) {
          console.log(e)
          this.globalData.userInfo = e.target.userInfo
          // this.setData({
          //      userInfo: e.mp.detail.userInfo,
          //      hasUserInfo: true
          // });
          this.userInfo=e.target.userInfo,
          this.hasUserInfo=true
          },
           bindViewTap () {
               const url = '../logs/main'
               if (mpvuePlatform === 'wx') {
               mpvue.switchTab({ url })
               } else {
               mpvue.navigateTo({ url })
               }
          },
          bindChange: function (e) {
               console.log(e);
               var id;
               var value;
               id = e.currentTarget.id;
               value = e.mp.detail.value + '';
               this.inputCon[id] = value;
          },
          search: function () {
          
               var that = this;
               var type = that.inputCon.company;
               var postid = that.inputCon.orderId;
               var data = {
                    'type':type,
                    'postid':postid
               }
               console.log(this.globalData.queryInfo);
               console.log(data);
              
                this.globalData.queryInfo=data;
               console.log(app);
                wx.request({
                    url: 'https://m.kuaidi100.com/query',
                    data: data,
                    header: {
                    'content-type': 'application/json'
                    },
               success:  (res)=> {
               var errTip = res.data.message;
               var orderInfo = res.data.data;
               console.log(orderInfo);
               if(orderInfo.length == 0) {
          
                    console.log(errTip)
                    // that.setData({
                    // errTip:errTip
                    // })
                    this.errTip=errTip
                    return
               }
               // that.setData({
               //      errTip:''
               //      })
               this.errTip=""
               this.globalData.orderInfo = orderInfo;
               console.log( this.globalData.orderInfo)
               wx.navigateTo({
                    url: '../order/main'
               });
                wx.setNavigationBarTitle({
                    title: data.postid
               });
               }
          })
          }

     }
    
}
</script>
<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color:#FF6666;
}
.order-input{
      height: 35px;
  line-height: 35px;
  border: 1rpx solid #CCCCCC;
  border-radius: 5px;
  background: #ffffff;
  color: black
}
.section{
     width: 80%
}

</style>
<template>
  <view>
    <modal
      v-if="loginData.show"
      title="登录"
      confirmText="立即登录"
      cancelText="取消登录"
      @confirm="gotoLogin"
      @cancel="cancelLogin"
      cancelColor="#CC0033"
      confirmColor="#CCFF66"
    >
      <label class="h-label">
        <input type="tel" placeholder="请输入手机号" v-model="loginData.mobile" @click="getMoblie" />
      </label>
      <label class="h-label">
        <input type="number" placeholder="请输入验证码" v-model="loginData.code" @click="getCode" />
      </label>
      <button
        type="primary"
        size="defaultSize"
        loading="loading"
        @click="sendCode"
        hover-class="defaultTap"
      >发送验证码</button>
    </modal>
    <!-- 轮播图  s -->
    <view>
      <view class="f-content">
        <swiper
          class="swiper-box"
          indicator-dots="true"
          autoplay="true"
          interval="1000"
          circular="true"
          duration="300"
          indicator-color="#CC3333"
          indicator-active-color="#FFFF00"
        >
          <swiper-item v-for="(item,index) in banner " :key="index">
            <view>
              <image class="swiper-img" :src="item.imageUrl" />
            </view>
          </swiper-item>
        </swiper>
      </view>
    </view>

    <!-- 轮播图  e -->
    <!-- 热门歌单  网友精选歌单  //https://huyulin.top:1717/top/playlist    @click="go(item.id,item.name)" s -->
    <view>
      <view v-for="(item,index) in playlist" :key="index" class="uuu"  @click="go(item.id,item.name)">
        <!-- <navigator url="/pages/detail/main?id=item.id&name=item.name" hover-class="navigator-hover"> -->
        <scroll-view
          class="main-scroll"
          scroll-y
          upper-threshold="10"
          lower-threshold="10"
          @bindscrolltoupper="upper"
          @bindscrolltolower="lower"
        >
     
          <view class="playlist">
            <image class="img" :src="item.picUrl" />
            <view class="name">{{item.name}}</view>
          </view>
        
        </scroll-view>
         <!-- </navigator> -->
      </view>
    </view>
    <!-- 热门歌单  e -->
  </view>
</template>
<script>
import { http } from "../../utils/util";
export default {
  data() {
    return {
      loginData: {
        show: true,
        mobile: 13277094511,
        code: ""
      },
      banner: [],
      current: 0,
      playlist: []
    };
  },
  mounted() {
    this.loginData.show = !wx.getStorageSync("isLogin");
    //获取欧美男歌手
    http({
      url: "/artist/list?cat=1001",
      success: res => {
        console.log(res);
        this.playlist = res.data.artists;
      }
    });
    //获取轮播图
    http({
      url: "/banner",
      success: res => {
        console.log(res);
        this.banner = res.data.banners;
      }
    });
  },
  //    "loginData.show": !wx.getStorageSync('isLogin')
  methods: {
    //跳转
    go(id,name){
      console.log("jjj")
      const url=`/pages/detail/main?id=${id}&name=${name}`;
      console.log(url);
       wx.navigateTo({url})
    },
    //下拉
    upper() {
      console.log("下拉刷新 -- upper");
      wx.showLoading({
        title: "加载中..."
      });
      setTimeout(() => {
        wx.hideLoading();
        this.playlist = this.playlist.reverse();
        wx.showToast({
          title: "下拉刷新-成功"
        });
      }, 1200);
    },
    //上拉
    lower() {
      console.log("上拉加载更多 -- lower");
      wx.showLoading({
        title: "努力加载中"
      });
      setTimeout(() => {
        wx.hideLoading();
        var length = this.playlist.length;
        const num = Math.floor(Math.random() * (length - 4));
        const arr = this.playlist.slice(num, num + 4);
        const playlist = this.playlist.concat(arr);
        // this.setData({
        //   good
        // })
        this.playlist = this.playlist;
        wx.showToast({
          title: "上拉加载-成功"
        });
      }, 1200);
    },
    //去登录
    gotoLogin() {
      //效验验证码
      http({
        url: "/captcha/verify",
        method: "GET",
        data: {
          phone: this.loginData.mobile,
          captcha: this.loginData.code
        },
        success: res => {
          if (res.data.code == 200) {
            //将token和手机号以存入前端缓存
            wx.setStorageSync("isLogin", true);
            wx.setStorageSync("moblie", this.loginData.mobile);
          }

          //让弹框消失
          this.loginData.show = false;
        }
      });
    },
    //取消登录
    cancelLogin() {
      console.log("888");
      (this.loginData.show = false),
        wx.showToast({
          title: "游客访问"
        });
    },
    //获取手机号
    getMoblie() {
      console.log("000");
      console.log(this.loginData.mobile);
      this.loginData.mobile;
    },
    //获取验证码
    getCode() {
      this.loginData.code;
    },
    //发送验证码
    sendCode() {
      http({
        url: "/captcha/sent",
        method: "GET",
        data: {
          phone: this.loginData.mobile
        },
        success: res => {
          console.log(res.data);
          wx.hideLoading();
          wx.showToast({
            title: res.data.code
          });
        }
      });
    }
  }
};
</script>
<style>
.h-label {
  display: block;
  /* border: 1px solid black; */
  margin: 10px;
}

.h-label input {
  border: 1px solid black;
  height: 35px;
}
.swiper-box,
.swiper-img {
  width: 100%;
  height: 200px;
}

.playlist {
  display: flex;
  /* justify-content: space-around; */
}
.playlist .img {
  width: 200rpx;
  height: 200rpx;
}
.main-scroll {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.name {
  overflow: hidden; /*超出隐藏*/
  white-space: nowrap; /* 强制不换行 */
  text-overflow: ellipsis; /*文字隐藏的格式 */
}
</style>
<template>
  
    <!-- 视频播放器  s -->
    <view class="section tc">
      <video
        id="myVideo"
        :src="videoSrc"
        :poster="poster"
        enable-danmu="true"
        danmu-btn="true"
        controls="true"
        @play="videoplay()"
        @timeupdate="videotimeupdate()"
         :danmu-list="danmuList" 
      ></video>
      <view class="btn-area">
        <input @blur="bindInputBlur()" v-model="text" placeholder="请输入弹幕"  class="inp1" />
        <button @click="bindSendDanmu()" type="warn">发送弹幕</button>
        <button @click="bindButtonTap()" type="primary">获取视频</button>
      </view>
    </view>
    <!-- 视屏播放器 e -->
</template>
<script>
import { http } from "../../utils/util";
//弹幕字体随机颜色
import { getRandomColor } from "../../utils";
// console.log(getRandomColor)
export default {
  data() {
    return {
      // audioinfo: {},
      name: "",
      poster: wx.getStorageSync("videoPic"),
      text: "",
      toggle: true,
      videoSrc: "",
      danmuList: [
      {
        text: '弹幕大军即将开始',
        color: '#ff0000',
        time: 1
      },
      {
        text: '好听,好看',
        color: '#ff00ff',
        time: 3
    }],
      
    }
  },

  onLoad: function(options) {
    console.log(options);
    var that = this;
    that.id = options.id;
    that.name = options.name;
    console.log(this.id);

    http({
      url: "/mv/url",
      method: "GET",
      data: {
        id: this.id
      },
      success: res => {
        console.log(res.data.data);
        // this.audioinfo = res.data.data;
        this.videoSrc = res.data.data.url;
        // console.log(this.audioinfo);
        //动态设置当前详情页的标题
        wx.setNavigationBarTitle({
          title: options.name
        });
      }
    });
  },

  onReady: function() {
    //自动播放
    this.videoContext = wx.createVideoContext("myVideo");

    //获取网络状态
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType;
        console.log(networkType);
        wx.setStorageSync("play", networkType == "wifi");
      }
    });
    //监听网络变化
    wx.onNetworkStatusChange(function(res) {
      const networkType = res.networkType;
      console.log(res.isConnected);
      console.log(res.networkType);
      wx.setStorageSync("play", networkType == "wifi");
    });
  },
  mounted() {},
  methods: {
    videoplay() {
      console.log("play");
      if (!wx.getStorageSync("play")) {
        this.showSome();
      }
    },
    //播放过程中触发
    videotimeupdate() {
      console.log("videotimeupdate");
      if (!wx.getStorageSync("play") && this.toggle) {
        this.showSome();
        this.toggle = false;
      }
    },
    //弹框提示
    showSome() {
      //先暂停
      this.videoContext.pause();
      wx.showModal({
        title: "浏览警告",
        content: "你正在使用流量观看视频.",
        cancelText: "取消观看",
        cancelColor: "#FF6666",
        confirmText: "继续观看",
        confirmColor: "#0066CC",
        success: res => {
          this.toggle = true;
          if (res.confirm) {
            console.log("用户点击确定");
            wx.setStorageSync("play", true);
            this.videoContext.play();
            wx.showToast({
              title: "你是土豪请继续"
            });
          } else if (res.cancel) {
            console.log("用户点击取消");
            wx.showToast({
              icon: "cancel",
              title: "请充钱"
            });
          }
        }
      });
    },
    //绑定input框
    bindInputBlur(e) {
      // this.inputValue = e.detail.value;
      this.inputValue = this.text;
    },
    //发送弹幕
    bindSendDanmu() {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      });
      this.inputValue=""
    },
    //获取视屏
    bindButtonTap() {
      var that = this;
      wx.chooseVideo({
        sourceType: ["album", "camera"],
        maxDuration: 60,
        camera: ["front", "back"],
        success: function(res) {
          // that.setData({
          //   videoSrc: res.tempFilePath
          // });
          that.videoSrc = res.tempFilePath;
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

#myVideo {
  width: 100%;

  margin: 0 5px;
}
.section {
  width: 100%;
}
.inp1 {
  height: 35px;
  line-height: 35px;
  border: 1rpx solid #e6e6ea;
  border-radius: 5px;
  background: #ffffff;
}
</style>
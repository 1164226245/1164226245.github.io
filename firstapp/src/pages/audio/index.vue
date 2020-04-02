<template>
  
  <view>
    <!-- <view>播放页</view> -->
    <!-- 渲染歌手所有的音乐  s-->
      <!-- <view>
          <view class="playlist">
            <image class="img" :src="item.al.picUrl" />
            <view class="name">{{item.name}}</view>
          </view>
      </view> -->
      <!-- 渲染歌手所有的音乐  s-->
    <!-- 音乐播放器 s -->
    <view class="MP3">
      <audio
        :poster="poster"
        :name="name"
        :author="author"
        :src="audioinfo.url"
        loop
        id="myAudio"
        controls
      ></audio>
    </view>
    <!-- 音乐播放器end -->
  </view>
</template>
<script>
import { http } from "../../utils/util";
export default {
  data() {
    return {
      songs: [],
      id: "",
      audioinfo:{},
      name:"",
      poster:wx.getStorageSync("audioPic"),
      author:wx.getStorageSync("name")
    };
  },
  onLoad: function(options) {
    console.log(options);
     var that = this;
    that.id = options.id;
    that.name=options.name
    console.log(this.id);

    http({
      url: "/song/url",
      method: "GET",
      data: {
        id: this.id
      },
      success: res => {
        console.log(res);
        this.audioinfo = res.data.data[0];
        console.log(this.audioinfo);
        //动态设置当前详情页的标题
        // wx.setNavigationBarTitle({
        //   title: options.name
        // });
      }
    });
  },
  mounted() {
    //https://huyulin.top:1717/song/url?id=1346104327
  },
  //    "loginData.show": !wx.getStorageSync('isLogin')
  methods: {}
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
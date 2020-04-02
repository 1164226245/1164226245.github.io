<template>
  <!-- <view>详情页</view> -->
  <view>
    <!-- 渲染歌手所有的音乐  @click="goAudio(item.id,item.name,item.al.picUrl)" s-->
      <view v-for="(item,index) in songs" :key="index" 
       @click="goAudio(item.id,item.name,item.al.picUrl)"
       >
          <view class="playlist">
            <image class="img" :src="item.al.picUrl" />
            <view class="name">{{item.name}}</view>
          </view>
      </view>
      <!-- 渲染歌手所有的音乐  s-->
    <!-- 音乐播放器 s -->
    <!-- <view class="MP3">
      <audio
        :poster="detailinfo.coverImgUrl"
        :name="detailinfo.name"
        author="{{author}}"
        src="{{audioSrc}}"
        loop
        id="myAudio"
        controls
      ></audio>
    </view> -->
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
      audioPic:""
    };
  },
  onLoad: function(options) {
    console.log(options);
    var that = this;
    that.id = options.id;
    console.log(this.id);
    http({
      url: "/artist/top/song",
      method: "GET",
      data: {
        id: this.id
      },
      success: res => {
        console.log(res);
        this.songs = res.data.songs;
        //动态设置当前详情页的标题
        wx.setNavigationBarTitle({
          title: options.name
        });
         wx.setStorageSync("name", options.name);
      }
    });
  },
  mounted() {},
    //  "loginData.show": !wx.getStorageSync('isLogin')
  methods: {
     goAudio(id,name,pic){
     
      console.log("jjj")
      const url=`/pages/audio/main?id=${id}&name=${name}&pic=${pic}`;
      console.log(url);
       wx.navigateTo({url});
      wx.setStorageSync("audioPic", pic);
       wx.setNavigationBarTitle({
          title: name
        });
    },
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
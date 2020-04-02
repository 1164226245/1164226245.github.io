<template>
  <!-- 热门mv   https://huyulin.top:1717/mv/all   url="/pages/detail/main?id=item.id&name=item.name" url="/pages/detail/main?id=item.id&name=item.name"  @click="go(item.id,item.name)" s -->
  <!-- video/main?id=${id}&name=${name}&pic=${pic}&author=${author} -->
  <view>
    <!-- <navigator  url="/pages/detail/main?id=item.id&name=item.name" 
       hover-class="navigator-hover"
         @click="go(item.id,item.name)"
       > -->
    <scroll-view
      class="main-scroll"
     :scroll-y="true"
     :style="{'height': '100%'}"
     @scroll="scroll()"
     @scrolltolower="lower()"
    >
     
      <view
        v-for="(item,index) in playlist"
        :key="index"
        class="uuu"
      
      >
        <view class="playlist" 
        @click="go(item.id,item.name,item.pic,item.author)"
        >
          <image class="img" :src="item.cover" />
          <view class="name">{{item.name}}</view>
        </view>
      </view>
    </scroll-view>
    <!-- </navigator> -->
  </view>
  <!-- 热门mv  e -->
</template>
<script>
import { http } from "../../utils/util";
export default {
  data() {
    return {
      playlist: [],
      videoPic:"",
      author:""
    };
  },
  mounted() {
    //获取所有mv
    http({
      url: "/mv/all",
      success: res => {
        console.log(res);
        this.playlist = res.data.data;
      }
    });
    console.log("我来了")
  },
  methods: {
    //跳转
    go(id, name,pic,author) {
     
      const url = `/pages/video/main?id=${id}&name=${name}&pic=${pic}&author=${author}`;
      console.log(url);
      wx.navigateTo({ url });
      wx.setStorageSync("videoPic", pic);
      wx.setStorageSync("author", author);
      wx.setNavigationBarTitle({
          title: name
        });
    },
    //下拉
    scroll() {
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
    }
  }
};
</script>
<style>
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
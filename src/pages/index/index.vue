<template>
  <view class="content">
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-green">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item uni-bg-blue">C</view>
        </swiper-item>
      </swiper>
    </view>
    <view class="uni-margin-wrap uni-flex uni-column">
      <navigator class="uni-flex-item" url="Trip/Trip" hover-class="navigator-hover">
        <button class="uni-btn-v uni-flex item" type="default">
          <image class="img" src="@/static/047-calendar.png" mode="scaleToFill" />
          <text class="text">出入校管理</text>
        </button>
      </navigator>
      <navigator class="uni-flex-item" url="InfoUpload/InfoUpload" hover-class="navigator-hover">
        <button class="uni-btn-v uni-flex item" type="default">
          <image class="img" src="@/static/003-clipboard.png" mode="scaleToFill" />
          <text class="text">信息上报</text>
        </button>
      </navigator>
      <navigator class="uni-flex-item" url="AskForLeave/AskForLeave" hover-class="navigator-hover">
        <button class="uni-btn-v uni-flex item" type="default">
          <image class="img" src="@/static/048-file.png" mode="scaleToFill" />
          <div class="text">请假申请</div>
        </button>
      </navigator>
    </view>
    <view class="">打卡信息</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      background: ['color1', 'color2', 'color3'],
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {}
}
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img {
    transform: translateY(21%);
    height: 128rpx;
    width: 128rpx;
  }
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }

  .uni-margin-wrap {
    width:690rpx;
    /*width: 100%;*/
    margin-bottom: 20rpx;
  }

  .uni-btn-v {
    padding:10rpx 100rpx;
    border-radius: 10rpx;
    height: 200rpx;
  }

  .uni-flex-item {
    margin-bottom: 15rpx;
  }

  .uni-flex-item {
    justify-content: space-between;
  }

  .item {
    justify-content: space-between;
  }

  .text {
    margin-top: 45rpx;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-item {
    display: block;
    line-height: 300rpx;
    text-align: center;
  }

</style>

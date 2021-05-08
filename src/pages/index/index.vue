<template>
  <view class="content">
    <view>
      <navigator url="Trip/Trip" hover-class="navigator-hover">
        <button type="default">出入校管理</button>
      </navigator>
      <navigator url="InfoUpload/InfoUpload" hover-class="navigator-hover">
        <button type="default">健康信息上报</button>
      </navigator>
      <navigator url="AskForLeave/AskForLeave" hover-class="navigator-hover">
        <button type="default">请假申请</button>
      </navigator>

      <view class="">打卡信息</view>

    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
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

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin: 200rpx auto 50rpx auto;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

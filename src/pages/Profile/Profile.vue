<template>
  <view class="content">
    <!-- 用户自定义头像 -->
    <view v-if="wxInfo.avatarUrl">
      <view class="userPortrait">

        <image :src="wxInfo.avatarUrl" mode="scaleToFill" />
      </view>
      <navigator class="" url="bindUser/bindUser" hover-class="navigator-hover">
        <button type="primary">
          {{ '绑定账户' }}
        </button>
      </navigator>
    </view>

    <view v-if="!wxInfo.avatarUrl">
      <view>第一次使用小程序需要微信授权，请点击按钮，并同意</view>
      <button @click="gainWxInfo()">微信授权</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      wxInfo: {
        avatarUrl: ''
      }
    }
  },
  onLoad() {
    this.getAvatar()
  },
  methods: {
    gainWxInfo() { // 获取用户信息
      uni.getUserProfile({
        desc: '登录',
        success: (res) => {
          this.wxInfo = res.userInfo
          uni.setStorage({
            key: 'avatarUrl',
            data: res.userInfo.avatarUrl,
            success: function() {
              console.log('set hasLogin success')
            }
          })
        },
        fail: (res) => {
          console.log(res)
        }
      })
    },
    getAvatar() {
      uni.getStorage({
        key: 'avatarUrl',
        success: (res) => {
          this.wxInfo.avatarUrl = res.data
        }
      })
    }

  }

}
</script>

<style>
.userPortrait image {
  height: 96rpx;
  width: 96rpx;
}
</style>

<template>
  <view class="userInformation">
    <!-- 用户自定义头像 -->
    <view class="userPortrait">
      <image :src="yonghuwx.avatarUrl" mode="widthFix" />
    </view>
    <view class="userLook">
      <!-- 用户自定义名字 -->
      <view class="user-title clamp">{{ yonghuwx.nickName }}</view>
    </view>
    <button @click="loginTest()">测试</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      yonghuwx: {}
    }
  },
  methods: {
    loginTest() { // 获取用户信息
      uni.getUserProfile({
        desc: '登录',
        success: (res) => {
          this.yonghuwx = res.userInfo
          console.log(res)
        },
        fail: (res) => {
          console.log(res)
        }
      })
    }

  },
  onLoad() {

  }
}
</script>

<style>

</style>

<template>
  <view class="content uni-padding-wrap uni-common-mt">
    <!-- 用户自定义头像 -->
    <view v-if="wxInfo.avatarUrl">
      <view class="userInfo">
        <view class="userPortrait uni-flex">
          <image :src="wxInfo.avatarUrl" mode="scaleToFill" />
          <view class="infoRight">
            <view style="font-size: 48rpx">{{ stuInfo.name }}</view>
            <view style="font-size: 34rpx">{{ stuInfo.studentNumber }}</view>
          </view>
        </view>
        <view class="uni-common-mt uni-common-mb uni-padding-wrap detail uni-flex uni-column">
          <view class="uni-row uni-flex">
            <view class="uni-flex-item">性别：{{}}</view>
            <view class="uni-flex-item">认证码：{{ stuInfo.uuid }}</view>
          </view>
          <view class="uni-row uni-flex">
            <view class="uni-flex-item">年级：{{ stuInfo.grade }}</view>
            <view class="uni-flex-item">学院：{{ stuInfo.college }}</view>
          </view>
          <view class="uni-row uni-flex uni-common-mb">
            <view class="uni-flex-item">班级：{{}}</view>
            <view class="uni-flex-item">专业：{{}}</view>
          </view>
        </view>
      </view>
      <navigator class="" url="bindUser/bindUser" hover-class="navigator-hover">
        <button type="primary">
          {{ uuid ? '绑定账户':'切换绑定' }}
        </button>
      </navigator>
    </view>

    <view v-if="!wxInfo.avatarUrl" style="margin-top: 50%">
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
      },
      stuInfo: {
        uuid: '',
        name: '',
        studentNumber: '',
        grade: '',
        college: '',
        room: ''

      }
    }
  },
  onLoad() {
    this.getInfo()
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
    getInfo() {
      uni.getStorage({
        key: 'avatarUrl',
        success: (res) => {
          this.wxInfo.avatarUrl = res.data
        }
      })
      uni.getStorage({
        key: 'uuid',
        success: (res) => {
          this.stuInfo.uuid = res.data
        }
      })
    }

  }

}
</script>

<style>
.userInfo {
  background-color: #FFFFFF;
  color: #666;
  box-shadow: 0 0rpx 6rpx #888888;
}

.userInfo .infoRight {
  padding-top: 16rpx;
}
.userPortrait image {
  height: 160rpx;
  width: 160rpx;
  padding: 20rpx;
  border-radius: 10%;
}
</style>

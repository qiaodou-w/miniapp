<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <form @submit="formSubmit">

        <view class="uni-form-item uni-column">
          <view class="title">认证码</view>
          <input class="uni-input" name="uuid" placeholder="请输入认证码">
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">体温</view>
          <view class="uni-list-cell-db">
            <picker :value="tempIndex" :range="array" @change="bindPickerChange">
              <view class="uni-input">{{ array[tempIndex] }}</view>
            </picker>
          </view>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">14天内是否有中高风险地区旅居史</view>
          <radio-group name="hasTravel">
            <label>
              <radio value="true" /><text>是</text>
            </label>
            <label>
              <radio value="false" /><text>否</text>
            </label>
          </radio-group>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">14天内是否接触中高风险地区旅居史人员</view>
          <radio-group name="hasTouch">
            <label>
              <radio value="true" /><text>是</text>
            </label>
            <label>
              <radio value="false" /><text>否</text>
            </label>
          </radio-group>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">今日是否有新冠病毒感染相关症状</view>
          <radio-group name="hasWrong">
            <label>
              <radio value="true" /><text>是</text>
            </label>
            <label>
              <radio value="false" /><text>否</text>
            </label>
          </radio-group>
        </view>
        <view class="uni-form-item uni-column">
          <view class="title">备注</view>
          <input class="uni-input" name="other" placeholder="备注">
        </view>
        <view class="uni-btn-v">
          <button :disabled="hasUpload" type="primary" form-type="submit">提交</button>
          <button type="default" form-type="reset">重置</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
const graceChecker = require('@/common/graceChecker.js')
import amap from '@/common/amap-wx.js'
import { uploadInfo } from '@/network/api'
import { dateFormat } from '@/common/util'
export default {
  data() {
    return {
      tempIndex: 6,
      formDate: {
        uuid: '',
        hasTravel: '',
        hasWrong: '',
        hasTouch: ''
      },
      location: '',
      array: [],
      temp: '36.6',
      amapPlugin: null,
      key: '2fd17849673278b98d00168584dcde70',
      uploadTime: '',
      hasUpload: false
    }
  },
  onLoad() {
    this.amapPlugin = new amap.AMapWX({
      key: this.key
    })
    this.initTempList()
    this.getLocation()
    this.fetchStatus()
  },
  methods: {
    async getLocation() {
      uni.showLoading({
        title: '获取位置中...'
      })
      await this.amapPlugin.getRegeo({
        success: (data) => {
          this.location = data[0].regeocodeData.formatted_address
          uni.hideLoading()
        }
      })
    },

    bindPickerChange: function(e) {
      this.tempIndex = e.target.value
      this.temp = this.array[this.tempIndex]
    },

    initTempList: function() {
      for (let i = 36; i <= 42; i += 0.1) {
        this.array.push(i.toFixed(1))
      }
    },
    formSubmit: async function(e) {
      // 定义表单规则
      const rule = [{
        name: 'uuid',
        checkType: 'int',
        checkRule: '6',
        errorMsg: '认证码为7位'
      },
      {
        name: 'hasTravel',
        checkType: 'in',
        checkRule: 'true,false',
        errorMsg: '请填写完整'
      },
      {
        name: 'hasWrong',
        checkType: 'in',
        checkRule: 'true,false',
        errorMsg: '请填写完整'
      },
      {
        name: 'hasTouch',
        checkType: 'in',
        checkRule: 'true,false',
        errorMsg: '请填写完整'
      }

      ]
      // 进行表单检查
      const formData = e.detail.value
      formData.temp = this.temp
      formData.location = this.location
      const checkRes = graceChecker.check(formData, rule)
      if (checkRes) {
        const res = await uploadInfo(formData)
        uni.setStorage({
          key: 'uploadTime',
          data: dateFormat('YYYY-mm-dd', new Date()),
          success: function() {
            this.uploadTime = dateFormat('YYYY-mm-dd', new Date())
          }
        })
        uni.showToast({
          title: res.data.msg
        })
        this.hasUpload = true
      } else {
        uni.showToast({
          title: graceChecker.error,
          icon: 'none'
        })
      }
    },
    fetchStatus() {
      uni.getStorage({
        key: 'uploadTime',
        success: (res) => {
          this.uploadTime = res.data
          this.hasUpload = (this.uploadTime === dateFormat('YYYY-mm-dd', new Date()))
        }
      })
    }

  }
}
</script>

<style>
  .uni-form-item .title {
    padding: 20rpx 0;
  }
</style>

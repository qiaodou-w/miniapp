<template>
  <view class="uni-padding-wrap uni-common-mt">
    <uni-forms ref="form" :value="formData">
      <uni-forms-item class="uni-form-item uni-column" name="uuid">
        <view class="title">学号</view>
        <input v-model="formData.uuid" type="text" class="uni-input uni-input-border" @blur="binddata('uuid', $event.detail.value)">

      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="name">
        <view class="title">姓名</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" @blur="binddata('name', $event.detail.value)">
      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="college">
        <view class="title">学院</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" @blur="binddata('college', $event.detail.value)">

      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="destination">
        <view class="title">外出详细地点</view>
        <input v-model="formData.destination" type="text" class="uni-input uni-input-border" placeholder="外出详细地址" @blur="binddata('destination', $event.detail.value)">
      </uni-forms-item>

      <uni-forms-item class="uni-form-item uni-column" name="reason">
        <view class="title">请假事由</view>
        <input v-model="formData.reason" type="text" class="uni-input uni-input-border" placeholder="请假事由" @blur="binddata('reason', $event.detail.value)">
      </uni-forms-item>

      <uni-forms-item class="uni-form-item uni-column" name="other">
        <view class="title">备注</view>
        <input v-model="formData.other" type="text" class="uni-input uni-input-border" placeholder="备注" @blur="binddata('other', $event.detail.value)">
      </uni-forms-item>

      <button @click="submitForm">Submit</button>
    </uni-forms>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        uuid: '',
        destination: '',
        reason: '',
        other: ''
      }

    }
  },

  methods: {
    submitForm(form) {
      console.log(this.formData)
      // 手动提交表单
      this.$refs.form.submit().then((res) => {
        console.log('表单返回得值：', res)
      })
    }
  }
}
</script>

<style>
.uni-form-item {
  padding: 0
}
.uni-form-item .title {
  padding: 20rpx 0;
}
.uni-input-border {
  padding: 0 10px;
  height: 35rpx;
}
.uni-input-border,
.uni-textarea-border {
  width: 100%;
  font-size: 14px;
  color: #666;
  height: 80rpx;
  border: 1px #e5e5e5 solid;
  border-radius: 5px;
  box-sizing: border-box;
}
</style>

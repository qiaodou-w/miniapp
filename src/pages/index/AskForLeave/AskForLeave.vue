<template>
  <view class="uni-padding-wrap uni-common-mt">
    <uni-forms ref="form" :value="formData">
      <uni-forms-item class="uni-form-item uni-column" name="name">
        <view class="title">认证码</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" placeholder="请输入年龄" @blur="binddata('age', $event.detail.value)">

      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="age">
        <view class="title">认证码</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" placeholder="请输入年龄" @blur="binddata('age', $event.detail.value)">
      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="age">
        <view class="title">认证码</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" placeholder="请输入年龄" @blur="binddata('age', $event.detail.value)">

      </uni-forms-item>
      <uni-forms-item class="uni-form-item uni-column" name="age">
        <view class="title">认证码</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" placeholder="请输入年龄" @blur="binddata('age', $event.detail.value)">
      </uni-forms-item>

      <uni-forms-item class="uni-form-item uni-column" name="age">
        <view class="title">认证码</view>
        <input v-model="formData.age" type="text" class="uni-input uni-input-border" placeholder="请输入年龄" @blur="binddata('age', $event.detail.value)">
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
        name: '',
        age: ''
      },
      hobby: [{
        text: '足球',
        value: 0
      }, {
        text: '篮球',
        value: 1
      }, {
        text: '游泳',
        value: 2
      }]
    }
  },
  methods: {
    submitForm(form) {
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
  height: 35px;
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
.uni-textarea-border {
  padding: 10px;
  height: 80px;
}

</style>

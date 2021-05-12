<template>
  <view class="uni-padding-wrap uni-common-mt">
    <uni-forms ref="form" :value="formData">
      <uni-forms-item label="认证码" name="uuid">
        <input v-model="formData.uuid" type="text" class="uni-input uni-input-border" placeholder="输入认证码" @blur="binddata('uuid', $event.detail.value)">
      </uni-forms-item>
      <uni-forms-item label="密码" name="password">
        <input v-model="formData.password" type="password" class="uni-input uni-input-border" placeholder="输入密码" @blur="binddata('uuid', $event.detail.value)">
      </uni-forms-item>
      <button type="primary" @click="submitForm">绑定</button>
    </uni-forms>
  </view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        uuid: '',
        password: ''
      }
    }
  },
  onLoad() {
    uni.getStorage({
      key: 'uuid',
      success: (res) => {
        this.formData.uuid = res.data
      }
    })
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

</style>

<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
  /* #ifndef APP-PLUS-NVUE */
  /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
  @import './common/uni.css';

  /* H5 兼容 pc 所需 */
  /* #ifdef H5 */
  @media screen and (min-width: 768px) {
    body {
      overflow-y: scroll;
    }
  }

  /* 顶栏通栏样式 */
  /* .uni-top-window {
      left: 0;
      right: 0;
	} */

  uni-page-body {
    background-color: #F5F5F5 !important;
    min-height: 100% !important;
    height: auto !important;
  }

  .uni-top-window uni-tabbar .uni-tabbar {
    background-color: #fff !important;
  }

  .uni-app--showleftwindow .hideOnPc {
    display: none !important;
  }

  /* #endif */
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
  /* 以下样式用于 hello uni-app 演示所需 */
  page {
    background-color: #efeff4;
    height: 95%;
    font-size: 28rpx;
    line-height: 1.8;
  }

  /* #endif*/
</style>

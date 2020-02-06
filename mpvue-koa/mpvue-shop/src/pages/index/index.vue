<template>
  <div class="index">
    <!-- 头部搜索 -->
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cityName:"南昌"
    }
  },
  methods: {
    toMappage () {
      // 通过wx.getSetting 先查询一下用户是否授权 "scoped.record"
      let _this = this
      wx.getSetting({
        success: (res) => {
          // 如果没有同意授权，打开设置
          // console.log(res)
          if (!res.authSetting['scope.userLocation']) {
            wx.openSetting({
              success: res => {
                //获取授权位置信息
                _this.getCityName()
              }
            }) 
          } else {
            wx.navigateTo({
              url: '/page/mappage/main'
            });

          }
        },
        fail: (err) => {
          console.log(err)
        },
        complete: () => {}
      });
        
    },
    getCityName () {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'333515828f84087d2cc5b6fe73f71b3a'});
      myAmapFun.getRegeo({
        success: function (data) {
          
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
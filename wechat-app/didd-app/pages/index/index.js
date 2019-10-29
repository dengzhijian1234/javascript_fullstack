Page({
  data:{
    markers:[],
    longitude:116.336599,//经度
    latitude:39.976402,//纬度
    scale: 18
  },
  onLoad() {
    //生命周期函数
    wx.showLoading({
      // 微信赋予小程序可以调用的API
      title: '获取坐标中',
      // mask: true,
      // success: (result) => {
        
      // },
      // fail: () => {},
      // complete: () => {}
    });
    // 手机的GPS
    wx.getLocation({
      type: 'gcj02',
      success:(res)=>{
        let {longitude,latitude} = res;
        this.tocreateMarkers(longitude,latitude);
        // console.log(longitude,latitude);
        this.setData({
          longitude,
          latitude
        },()=>{
          wx.hideLoading();
          
        })

      }
    })
      
  },
  onReady(){
    // 地图上下文环境
    this.mapCtx=wx.createMapContext('myMap');
      
  },
  toVisit(e){
    console.log(e);
  },
  toScan(){
    return wx.scanCode({
      success:(res)=>{
        // console.log(res);
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },
  toUser(){},
  toMsg(){},
  toReset(){
    // 当你使用地图来来去去的时候，再回到你当初的起点
    console.log('----');
    this.mapCtx.moveToLocation();
    this.setDate({
      scale: 18
    })
  },
  tocreateMarkers(longitude,latitude){
    let markers=[
      {
        "id":1,
        "iconPath":"/images/map-bicycle.png",
        "latitude":latitude,
        "longitude":longitude,
        "width":52.5,
        "height":30,
        "callout":{}
      }
    ]
    this.setData({
      markers
    });
  }
})
function getLocationCity(){
  wx.getLocation({
    type: 'wgs48',
    success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude
      console.log(latitude)
      console.log(longitude)
    },
    fail: function(){
      console.log('error')
    }
  })
}
getLocationCity()

function getCityId(location){
  wx.request({
    url: '',
  })
}
Page({
  data:{
    result:''
  },
  scanCode:function(){
    var that = this
    wx.scanCode({
      onlyFromCamera: true,
      success: function(res) {
        that.setData({
          result:res.result
        })
      },
      fail: function(res) {}
    })
  },
})
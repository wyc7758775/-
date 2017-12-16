const app = getApp();

Page({
  data: {
    modalHidden: true,
    modalHidden2: true,
    hasUserInfo: false,
    info: "充值",
    getUserFalse: "获取用户失败",
    balance: "余额明细",
    checkout: "退房",
    continuedRoom: "续房",
    clean: "打扫",
    wake: "叫醒服务",
    customerService: "客服",
    password: "密码",
    reservation: "订房",
    balanceatrr: "0",
    about: "关于我们",
    continuedRoomSrc: "../../images/ico/continuedRoom.png",
    passwordSrc: "../../images/ico/password.png",
    reservationSrc: "../../images/ico/reservation.png",
    checkoutSrc: "../../images/ico/chekout.png",
    cleanSrc: "../../images/ico/clean.png",
    wakeSrc: "../../images/ico/wake.png",
    balanceSrc: "../../images/ico/balance.png",
    customerServiceSrc: "../../images/ico/customerService.png",
    aboutSrc: "../../images/ico/about.png",
    qianjing: "../../images/ico/qianjing.png"
  },
  onLoad: function () {
    var that = this

    if (app.globalData.hasLogin === false) {
      wx.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
          that.update()
        }
      })
    }
  },

  //弹框
  modalTap: function (e) {
    wx.showModal({
      title: "叫醒服务",
      content: "该功能敬请期待",
      showCancel: false,
      confirmText: "确定"
    })
  },
  toastClear:function(){
    wx.navigateTo({
      url: '../clear/clear'
    })
  }
})



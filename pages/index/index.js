// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload ...");
    console.log(options);
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'https://www.ngtoken.cn/api/',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success");
        console.log(res);
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady ...");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow ...");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide ...");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload ...");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh ...");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom ...");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage ...");
  },
  //单击改变分栏的显示状态
  backgroundClick: function (e) {
    console.log('backgroundClick', e)
    console.log('toggle', e.target.dataset.toggle)
    if (e.target.dataset.toggle == undefined) {
      this.data.classifyData[e.target.dataset.index].toggle = true;
      for (var i = 0; i < this.data.classifyData.length; i++) {
        if (i != e.target.dataset.index) {
          this.data.classifyData[i].toggle = undefined;
        }
      }
      this.setData({
        classifyData: this.data.classifyData
      })
    }

  }
})


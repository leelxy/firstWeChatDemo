//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/banner_01.jpg',
      '/images/banner_02.jpg',
      '/images/banner_03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    proList: [
      {
        "title": "《你的孤独，虽败犹荣》",
        "desc": "孤独之前是迷茫，孤独之后是成长。",
        "logo": "http://guozhaoxi.top/wx/gelifen.jpg"
      },
      {
        "title": "《解忧杂货店》",
        "desc": "现代人内心流失的东西，这家杂货店能帮你找回",
        "logo": "http://guozhaoxi.top/wx/gelifen.jpg"
      },
      {
        "title": "《把时间当作朋友》",
        "desc": "这本书从心智成长的角度来谈时间管理，指出时间管理是成功的关键所在。",
        "logo": "http://guozhaoxi.top/wx/gelifen.jpg"
      },
      {
        "title": "《你的生命有什么可能》",
        "desc": "即使在这个不那么公平的现实世界里，每个平凡人也都能活出各自的生命可能。",
        "logo": "http://guozhaoxi.top/wx/gelifen.jpg"
      }
    ]
  },
  onLoad: function () {
    this.getProList();
  },
  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.navigateTo({
      url: '/pages/detail/detail'+title,
    })
    console.log(title);
  },
  getProList: function(){
    var self = this;
    // wx.request({
    //   url: 'http://guozhaoxi.top/wx/data.json',
    //   method: 'GET',
    //   success: function(res){
    //     self.setData({
    //       proList: res.data
    //     });
    //   }
    // })
  },
  copy: function(){
    if(wx.setClipboardData){
      wx.setClipboardData({
        data: '复制的内容',
        success: function (res) {
          wx.showModal({
            title: '复制成功',
            content: '内容已经复制成功！',
          })
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您的微信版本太低，请升级！',
      })
    }
    
  }
})

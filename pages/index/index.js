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
        "desc": "孤独之前是迷茫，孤独之后是成长。很长一段日子里，我靠写东西度过了太多的小无聊，伪伤感，假满足与真茫然...",
        "logo": "/images/pic1.jpg"
      },
      {
        "title": "《解忧杂货店》",
        "desc": "现代人内心流失的东西，这家杂货店能帮你找回。僻静的街道旁有一家杂货店，只要写下烦恼投进卷帘门的投信口...",
        "logo": "/images/pic2.jpg"
      },
      {
        "title": "《把时间当作朋友》",
        "desc": "为什么你总是说“没有时间了”，勤奋而又懒惰？最节省时间的方式是学习，为什么你砍柴而不肯磨刀？基于过程的记录...",
        "logo": "/images/pic3.jpg"
      },
      {
        "title": "《你的生命有什么可能》",
        "desc": "即使在这个不那么公平的现实世界里，每个平凡人也都能活出各自的生命可能。本书写给成长中的每一个人，以生涯之学...",
        "logo": "/images/pic4.jpg"
      }
    ]
  },
  onLoad: function () {
    this.getProList();
  },
  toDetail: function(e){
    //console.log(e);
    var index = e.currentTarget.dataset.index;
    var proList = this.data.proList;
    var title = proList[index].title;
    wx.setStorageSync('index', index);
    wx.setStorageSync('title', title);
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  getProList: function(){
    var self = this;
    //wx.request({
      // url: 'http://guozhaoxi.top/wx/data.json',
      // method: 'GET',
      // success: function(res){
      //   self.setData({
      //     proList: res.data
      //   });
      // }
    //})
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

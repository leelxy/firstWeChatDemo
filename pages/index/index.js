//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isChecked: false,
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  
  onLoad: function () {
    
  },
  change: function () {
    this.setData({
      isChecked: !this.data.isChecked
    });
  }
})

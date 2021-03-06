# firstWeChatDemo
:speech_balloon:一个简单的微信小程序  参考[入门微信小程序开发](https://www.imooc.com/learn/974)

### 前言
最近看了看小程序，跟着慕课网上做了个小demo，也对小程序有了初步的了解。

### 定义
   微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

### 有哪些宣传方式
- 小程序搜索入口&附近的小程序
- 扫一扫、长按识别小程序码
- 好友分享、群分享
- 关联公众号
- 第三方的小程序应用商店
- 小程序之前互相跳转

### 注册小程序
1. [直接注册](https://mp.weixin.qq.com/)
2. [通过微信公众号后台](https://mp.weixin.qq.com/wxopen/waregister?action=step1)

### 文件类型
    js   ------- JavaScrip文件，负责页面逻辑
    json ------- 项目配置文件，负责窗口颜色等等
    wxml ------- 类似HTML文件，负责页面结构
    wxss ------- 类似CSS文件，页面样式表

### 目录说明
    pages文件夹：主要存放小程序的页面文件，其中每个文件夹为一个页面，每个页面可包含四种文件(必须有.wxml和.js文件)
    utils文件夹：该文件件主要用于存放全局的一些.js文件，公共用到的一些事件处理代码文件可以放到该文件夹下，用于全局调用。
    app.js：必须要有这个文件(内容可以为空)，没有也是会报错！以后我们可以在这个文件中监听并处理小程序的生命周期函数、声明全局变量。
    app.json：必须要有这个文件，否则IDE会报错，因为微信框架把这个作为配置文件入口，你只需创建这个文件，里面写个大括号就行以后我们会在这里对整个小程序的全局配置。记录了页面组成，配置小程序的窗口 背景色，配置导航条样式，配置默认标题。
    app.wxss：这个文件不是必须的，只是个全局CSS样式文件，没有框架中的wxss的优先级高。
    app.wxml：这个也不是必须的，而且这个并不是指主界面，因为小程序的主页面是靠在JSON文件中配置来决定的。
    
### 项目截图
#### 首页
![image](https://github.com/leelxy/firstWeChatDemo/blob/master/images/index.gif)
#### 详情页
![image](https://github.com/leelxy/firstWeChatDemo/blob/master/images/detail.jpg)
#### 加入页
![image](https://github.com/leelxy/firstWeChatDemo/blob/master/images/join.jpg)

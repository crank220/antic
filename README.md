# antic 小技巧

## scrollIntoView 
  实现自动轮播、定位、复位

  特点：代码简洁、部分浏览器不支持、动画新技巧、配置项可选

  [demo](./scrollIntoView/index.html)

  [api](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)

## will-change
  让浏览器提前准备好，优化一部分复杂的计算工作，使页面的反应更为快速灵敏

  不要将 will-change 应用到太多元素上、有节制地使用、不要过早应用 will-change 优化、给它足够的工作时间

  特点：优化动画

  [demo](./will-change/index.html)

  [api](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change)

## 远程调试 Android/ios 手机设备

  [Android](https://www.html.cn/doc/chrome-devtools/remote-debugging/)

  [ios](https://github.com/google/ios-webkit-debug-proxy)

## requestAnimationFrame
  把每一帧中的所有DOM操作集中起来，重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，每秒60帧
  
  在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量

  页面不是激活状态下的话，动画会自动暂停

  [demo](./requestAnimationFrame/index.html)
  
  [api](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
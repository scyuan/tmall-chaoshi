### 首页部分内容结构都已经完成，还存在问题

#### 由于使用了better-scroll,在pc端模拟是，双指和单指（单指像是模拟移动端的滑动）滑动会出现不同的结果。

> 只双指滑动时，header和搜索框的动画不会出现（因为header和搜索框的动画的触发时写在better-scroll的scroll事件中）

双指滑动不会触发better-scroll的滑动事件

> 双指和单指混合滑动时，当首先双指滑动时，滑到某处时，再单指滑动，发现无法滑到顶部或者底部（也就是说better-scroll的高度计算出现了问题）


#### 菜单栏的切换（使用了swiper）

> 菜单栏有两页内容，使用了swiper插件，当从第一页滑向第二页时，没问题。当从第二页滑向第一页时，滑动操作按下的瞬间，swiper回到了第一页，所以滑完之后立马又回到了第二页

仔细看截图

![](https://ws4.sinaimg.cn/large/006tKfTcly1fr6c66cygeg30lg0bcx6q.gif)


### 关于这部分的布局可以好好看看

主要疑问两点

1：官方左图的背景图的做法

通过

```CSS
div:before{
	paddint-top：xxxpx;
}
```

2：如何做到三张图片之间的间距总是相等（不管屏幕大小怎么变化），并且右边两者图片的高度加起来和左侧一样高。


![](https://ws2.sinaimg.cn/large/006tKfTcgy1fqz8gq8hztj30as078dg1.jpg)


### 类似的border我是怎么做的？

border看起来是1px的方格

![](https://ws2.sinaimg.cn/large/006tKfTcgy1fr5a3pbtprj30at0fq751.jpg) 


### 翻牌页面基本是算是完成了，接下来就是使用better-scroll了

使用better-scroll时，会有两个问题：两个问题上面已经说明。接下来是要解决这个两个问题。如何解决呢？

PS：出现问题的原因（我猜想的，可能不正确）

> 问题一：

移动端最常见的3个事件：touchstart、touchmove、touchend。移动端单指移动，触发的是touchmove事件，better-scroll的scroll事件时基于touchmove实现的。而在浏览器中，双指滑动触发原生的scroll事件，所以该事件时不会触发better-scroll的scroll事件的。

> 问题二：

关于问题二的产生。需要先了解better-scroll的原理。

不能滚动是现象，我们得搞清楚这其中的根本原因。在这之前，我们先来看一下浏览器的滚动原理： 浏览器的滚动条大家都会遇到，当页面内容的高度超过视口高度的时候，会出现纵向滚动条；当页面内容的宽度超过视口宽度的时候，会出现横向滚动条。也就是当我们的视口展示不下内容的时候，会通过滚动条的方式让用户滚动屏幕看到剩余的内容。

better-scroll 也是一样的原理，我们可以用一张图更直观的感受一下：

![](https://camo.githubusercontent.com/fd2fd41d5bc70502acb590d53f2084248587cb85/687474703a2f2f7374617469632e67616c696c656f2e7869616f6a756b656a692e636f6d2f7374617469632f746d732f736869656c642f7363726f6c6c2d342e706e67)

绿色部分为 wrapper，也就是父容器，它会有固定的高度。黄色部分为 content，它是父容器的第一个子元素，它的高度会随着内容的大小而撑高。那么，当 content 的高度不超过父容器的高度，是不能滚动的，而它一旦超过了父容器的高度，我们就可以滚动内容区了，这就是 better-scroll 的滚动原理。

外层的wrapper需要固定宽高

为什么需要固定宽高？因为不固定宽高的话，wrapper被content撑开。导致无法滚动

因为滚动原理是控制content的transiformX来控制的。

因为我喜欢设置外层的wrapper  overflow:auto。导致可以双指滑动，如果设置为overflow:hidden的话，则不能双指滑动，只能单指滑动，这样是肯定不行的。需要去解决兼容问题。









 
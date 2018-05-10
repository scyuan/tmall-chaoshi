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
 
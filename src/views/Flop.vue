<template>
	<div class="flop">
		<div class="flop-header">
			<i class="icon icon-list">&#xe600;</i>
			<p>天猫超市<span class="pos">上海<i class="icon">&#xe612;</i></span></p>
			<i class="icon icon-shopcart">&#xe620;</i>
		</div>
		<div class="flop-content">
			<div class="flop-tip">
				<div class="more-flop"></div>
				<p>您拥有<span>0</span>局翻牌</p>
				<div class="my-bag"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.flop-header{
	height: 1.173333rem;
	box-sizing: border-box;
	background: #fff;
	border-bottom: 1px solid #f1f1f1;
	line-height: 1.173333rem;
	font-size: 0.64rem;
	text-align: center;
    color: #333;
}
.flop-header .pos{
	font-size: 0.32rem;
	vertical-align: top;
	border: 1px solid #333;
	border-radius: 4px;
	padding: 0 0.133333rem;
	margin-left: 5px;
}
.flop-header .pos i{
	vertical-align: top;
}

.flop-header .icon-list,.flop-header .icon-shopcart{
	position: absolute;
	height: 1.173333rem;
	width: 1.173333rem;
	top: 0;
	text-align: center;
}
.flop-header .icon-list{
	left: 0;
}
.flop-header .icon-shopcart{
	right: 0;
}
.flop-content{
	position: absolute;
	left: 0;
	right: 0;
	top: 1.173333rem;
	bottom: 1.28rem;
}
.flop-tip{
	color: #000;
	font-size: 14px;
	text-align: center;
	padding: 10px 0;
	background: #f9fdff;
	font-weight: bold;
	position: relative;
}
.flop-tip > div{
	position: absolute;
}
.flop-tip span{
	color: #fff;
	background: #80C7FF;
	font-size: 18px;
	padding: 0 5px;
	border-radius: 5px;
}
.more-flop{
	background-image: url('https://gw.alicdn.com/tfs/TB1QoS4QFXXXXX9apXXXXXXXXXX-694-444.png');
	position: absolute;
	top: 10px;
	left: 10px;
	width: 78px;
	height: 25px;
	background-position: -3px -172px;
	background-size: 347px 222px;
}
.my-bag{
	position: absolute;
	right: 10px;
	top: 10px;
	background-image: url('https://gw.alicdn.com/tfs/TB1QoS4QFXXXXX9apXXXXXXXXXX-694-444.png');
	background-size: 347px 222px;
	background-position: -81px -172px;
	width: 87px;
	height: 25px;
}
</style>
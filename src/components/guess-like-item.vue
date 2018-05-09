<template>
	<div class="guess-like" :style='{width : width}'>
		<template v-if='item.product'>
			<img :src="item.img" alt="">
			<h3>{{ item.title }}</h3>
			<p class="amount">{{ item.desc }}</p>
			<div class="like-info">
				<p class="xl-month">月销{{ item.amount }}万件</p>
				<p class="like-price">￥<span>{{ item.price }}</span></p>
			</div>
			<button class="add-like-button"><i class="icon">&#xe620;</i></button>
		</template>
		<template v-else>
			<div class="img">
				<img :src="item.img" alt="">
			</div>
			
		</template>
	</div>
</template>
<script>
	export default{
		props:{
			item:{
				type:Object,
				required:true
			},
			width:{
				type:String
			}
		},

	}
</script>
<style scoped>
.guess-like{
	width: 33.33%;
	float: left;
	height: 5.76rem;
	padding: 0.266667rem;
	position: relative;
}
.guess-like .amount{
	color: #666;
	font-size: 0.32rem;
	transform: scale(0.9);
	transform-origin: 0% 0%;
}
.guess-like img{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.guess-like .like-info{
	position: absolute;
	left: 0.266667rem;
	bottom: 0.266667rem;
	width: 100%;
	
}
.like-info .xl-month{
	font-size: 0.32rem;
	transform: scale(0.8);
	transform-origin: 0% 100%;
	color: #888;
}
.like-info .like-price{
	font-size: 12px;
	font-weight: bold;
	color: #000;
}
.like-info .like-price>span{
	font-size: 0.426667rem;
	letter-spacing: -1px;
}
.guess-like h3{
	margin: 0;
	margin-top: 0.133333rem;
	font-size: 0.32rem;
	color: #313D44;
}
.add-like-button{
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 0.4rem;
	background: #FD2A32;
	color: #fff;
	text-align: center;
	line-height: 0.8rem;
	border: 0;
	font-size: 0.48rem;
	position: absolute;
	right: 0.266667rem;
	bottom: 0.266667rem;
	padding: 0;
}
.img{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
.img img{
	width: 100%;
	height: 100%;
}
</style>
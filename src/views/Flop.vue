<template>
	<div class="flop">
		<div class="flop-header">
			<i class="icon icon-list">&#xe600;</i>
			<p>天猫超市<span class="pos">上海<i class="icon">&#xe612;</i></span></p>
			<i class="icon icon-search">&#xe650;</i>
			<i class="icon icon-shopcart">&#xe620;</i>
		</div>
		<div class="flop-content" ref='scroll'>
			<div class="content">
				<div class="flop-tip">
					<div class="more-flop"></div>
					<p>您拥有<span>0</span>局翻牌</p>
					<div class="my-bag"></div>
				</div>

				<img class="widthFix" src="//img.alicdn.com/tfs/TB14rDNrxGYBuNjy0FnXXX5lpXa-750-140.jpg_2200x2200Q50s50.jpg_.webp" alt="">

				<div class="pan">
					<img class="widthFix" src="//img.alicdn.com/tfs/TB1XHHNrxGYBuNjy0FnXXX5lpXa-750-942.jpg_2200x2200Q50s50.jpg_.webp" alt="">
					
					<div class="lottery-wrap">
						<div class="lottery-tab">
							<div class="lottery-tab-item" v-for='(item, index) in tab_items' :class='{ "tab_active" : index === tab_index }' @click='tab(index)'>{{ item }}</div>
							
						</div>
						<div class="lottery-content">
							<div>
								<transition-group :name='lotter_slide'>
								
								<div class="lottery-view" v-for='(item,index) in tab_items' v-show='index === tab_index' v-bind:key='index'>
									<div class="lottery-row">
										<div class="lottery-row-item">
											<div class="img-wrap">
												<img class="widthFix" src="//img.alicdn.com/imgextra/i4/i4/725677994/TB2ZfeplCtYBeNjSspkXXbU8VXa_!!725677994.jpg_10000x340Q50s50.jpg_.webp" alt="">
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>￥0.01</span><span>￥35</span></p>
										</div>
										<div class="lottery-row-item">
											<div class="img-wrap">
												<div class="coupon-wrap">
													<div class="coupon-card">
														<p>天猫超市</p>
														<p>¥15</p>
													</div>
												</div>
											</div>
											<p class="name">满148使用</p>
											<p class="price"><span>05/18-05/24</span></p>
										</div>
										<div class="lottery-row-item">
											<div class="img-wrap">
												<img class="widthFix" src="//img.alicdn.com/imgextra/i4/i4/725677994/TB2ZfeplCtYBeNjSspkXXbU8VXa_!!725677994.jpg_10000x340Q50s50.jpg_.webp" alt="">
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>￥0.01</span><span>￥35</span></p>
										</div>

									</div>
									<div class="lottery-row">
										<div class="lottery-row-item">
											<div class="img-wrap">
												<div class="coupon-wrap">
													<div class="coupon-card">
														<p>天猫超市</p>
														<p>¥15</p>
													</div>
												</div>
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>05/18-05/24</span></p>
										</div>
										<div class="lottery-row-item lottery-start">
											<div class="img-wrap">
												<div class="start-btn"></div>
												
											</div>
											<p class="guiz">游戏规则</p>
										</div>
										<div class="lottery-row-item">
											<div class="img-wrap">
												<div class="coupon-wrap">
													<div class="coupon-card">
														<p>天猫超市</p>
														<p>¥15</p>
													</div>
												</div>
											</div>
									
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>￥0.01</span><span>￥35</span></p>
										</div>
									</div>
									<div class="lottery-row">
										<div class="lottery-row-item">
											<div class="img-wrap">
												<img class="widthFix" src="//img.alicdn.com/imgextra/i4/i4/725677994/TB2ZfeplCtYBeNjSspkXXbU8VXa_!!725677994.jpg_10000x340Q50s50.jpg_.webp" alt="">
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>￥0.01</span><span>￥35</span></p>
										</div>
										<div class="lottery-row-item">
											<div class="img-wrap">
												<div class="coupon-wrap">
													<div class="coupon-card">
														<p>天猫超市</p>
														<p>¥15</p>
													</div>
												</div>
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>05/18-05/24</span></p>
										</div>
										<div class="lottery-row-item">
											<div class="img-wrap">
												<img class="widthFix" src="//img.alicdn.com/imgextra/i4/i4/725677994/TB2ZfeplCtYBeNjSspkXXbU8VXa_!!725677994.jpg_10000x340Q50s50.jpg_.webp" alt="">
											</div>
											<p class="name">碧浪洗衣液套装</p>
											<p class="price"><span>￥0.01</span><span>￥35</span></p>
										</div>
									</div>
									

								</div>
								
								</transition-group>
							</div>
						</div>
					</div>

				</div>
				
				<div class="brand-activity">
					<div class="brand-h">
						<span><i class="icon">&#xe60e;</i>品牌活动</span>
						<span>查看更多<i class="icon">&#xe617;</i></span>
					</div>
					<div class="brand-img">
						<img src="//img.alicdn.com/imgextra/i1/3232480197/TB2n47bqStYBeNjSspaXXaOOFXa_!!3232480197.jpg_2200x2200Q50s50.jpg_.webp" alt="">
					</div>
				</div>

			</div>
			
		</div>
		
	</div>
</template>
<script>
import BScroll from 'better-scroll';
	export default{
		data(){
			return {
				lotter_slide:'lottery-slide-left',
				tab_index:0,
				tab_items:[
					"超值组合","品牌组合","生鲜组合"
				]
			}
		},
		watch:{
			'tab_index':function(new_val,old_val) {
				console.log(new_val,old_val);
				if(new_val > old_val){
					this.lotter_slide = 'lottery-slide-left';
				}else{
					this.lotter_slide = 'lottery-slide-right';
				}
			}
		},
		
		methods:{
			tab(index){
				this.tab_index = index;
			},
			scoll(){
				console.log(new Date());
			}
		},
		created(){
			window.addEventListener('scroll',function(){
				console.log('kk')
			},true)
		},
		mounted(){
			var _this = this;
			_this.$nextTick(()=>{
				if(!_this.scroll){
					_this.scroll = new BScroll(_this.$refs.scroll,{
						click:true,
						probeType:3,
						bounce: {
						  top: false,
						  bottom: true,
						  left: true,
						  right: true
						}
					})
				}else{
					_this.scroll.refresh();
				}
				_this.scroll.on('scroll',function(pos){
					console.log(pos);
				});

			})
		}
	}
</script>
<style scoped>
.lottery-slide-left-leave,.lottery-slide-left-enter-to{
	transform: translateX(0%);
}
.lottery-slide-left-leave-to{
	transform: translateX(-100%);
}
.lottery-slide-left-enter{
	transform: translateX(100%);
}
.lottery-slide-left-leave-active,.lottery-slide-left-enter-active,.lottery-slide-right-enter-active,.lottery-slide-right-leave-active{
	transition: all 0.3s;
}
.lottery-slide-right-enter{
	transform: translateX(-100%);
}
.lottery-slide-right-leave-to{
	transform: translateX(100%);
}
.lottery-slide-right-enter-to,.lottery-slide-right-leave{
	transform: translateX(0);
}
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

.flop-header .icon-list,.flop-header .icon-shopcart,.flop-header .icon-search{
	position: absolute;
	height: 1.173333rem;
	width: 1.173333rem;
	top: 0;
	text-align: center;
}
.flop-header .icon-search{
	right: 1.173333rem;
}
.flop-header .icon-list{
	left: 0;
}
.flop-header .icon-shopcart{
	right: 0;
}
.flop-content{
	/*position: absolute;
	left: 0;
	right: 0;
	top: 1.173333rem;
	bottom: 1.28rem;
	overflow: auto;*/
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
.widthFix{
	height: auto;
	width: 100%;
	vertical-align: top;
}
.pan{
	position: relative;
}
.lottery-wrap{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	padding: 0.346667rem 0.746667rem;
}
.lottery-tab{
	display: flex;
}
.lottery-tab>div{
	flex: 1;
	font-size: 16px;
	color: #fff;
	height: 32px;
	line-height: 32px;
	text-align: center;
	font-weight: bold;
	background: #fcd4a1;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
}
.lottery-tab>div.tab_active{
	background: #ffb001;
}
.lottery-tab>div:nth-child(2){
	margin: 0 5px;
}
.lottery-content{
	padding: 6px;
	padding-bottom: 0;
	background: #ffb001;
}
.lottery-content>div{
	overflow: hidden;
	position: relative;
}
.lottery-content>div::before{
	content: '';
	display: block;
	padding-top: 127%;
}
.lottery-view{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
}

.lottery-row{
	display: flex;
	margin-bottom: 6px;
}
.lottery-row .lottery-row-item{
	flex: 1;
	background: #fff;
	border-radius: 5px;
	width: 0;
}
.lottery-row .lottery-start{
	background: transparent;
}
.lottery-row .lottery-row-item:nth-child(2){
	margin: 0 6px;
}
.img-wrap{
	position: relative;
}
.img-wrap>img{
	box-sizing: border-box;
    padding: 10px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
}
.img-wrap::before{
	content: '';
	display: block;
	padding-top: 95%;
}

.lottery-row-item p{
	font-size: 0.32rem;
	padding: 0 6px;
}
.lottery-row-item .name{
	color: #000;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.lottery-row-item .price{
	padding: 0 0.106667rem;
	line-height: 1;
	font-size: 0.373333rem;
	font-weight: bold;
	letter-spacing: -1px;
	color: #ccc;
}
.lottery-row-item .price>span:nth-child(2){
	text-decoration: line-through;
}
.lottery-row-item .price>span:nth-child(1){
	color: red;
}
.coupon-card{
	height: 100%;
	border: 1px dashed #c260eb;
	border-radius: 2px;
	text-align: center;
	padding-top: 0.16rem;
}
.coupon-wrap{
	color: #c260eb;
	position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 2.4rem;
    overflow: hidden;
    height: 1.386667rem;
}
.coupon-wrap::before{
	content: '';
	display: block;
	width: 0.533333rem;
	height: 0.533333rem;
	border-radius: 0.266667rem;
	border: 1px dashed #c260eb;
	position: absolute;
	left: -0.293333rem;
	top: 50%;
	transform: translateY(-50%);
	background: #fff;
	z-index: 2;
}
.coupon-wrap::after{
	content: '';
	display: block;
	width: 0.533333rem;
	height: 0.533333rem;
	border-radius: 0.266667rem;
	border: 1px dashed #c260eb;
	position: absolute;
	right: -0.293333rem;
	top: 50%;
	transform: translateY(-50%);
	background: #fff;
	z-index: 2;
}
.coupon-card p:nth-child(1){
	transform: scale(0.8);
}
.coupon-card p:nth-child(2){
	font-size: 0.64rem;
	letter-spacing: -3px;
	font-weight: bold;
	position: relative;
	top: -0.213333rem;
}
.start-btn{
	width: 2.32rem;
	height: 2.32rem;
	position: absolute;
	left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-image: url('https://gw.alicdn.com/tfs/TB1QoS4QFXXXXX9apXXXXXXXXXX-694-444.png');
    background-size: 9.253333rem 5.92rem;
    background-position: -2.293333rem 0;
}
.guiz{
	text-align: center;
	font-size: 0.373333rem;
	text-decoration: underline;
	padding-top: 0.133333rem;
}
.brand-activity{
	background: #fff;
	margin-top: 0.4rem;
}
.brand-h>span:nth-child(2){
	float: right;
}
.brand-h>span:nth-child(1){
	font-size: 0.426667rem;
	color: #000;
}
.brand-h{
	padding: 0 0.266667rem;
	height: 1.173333rem;
	line-height: 1.173333rem;
	font-size: 0.32rem;
	color: #1189F8;
	box-sizing: content-box;
	border-bottom: 1px solid #f1f1f1;
}
.brand-img{
	padding: 0.266667rem;
}
.brand-img img{
	width: 100%;
	height: auto;
}
</style>
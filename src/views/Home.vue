<template>
	<div class="home">
		<header class="home-header" :class='{"white-home-header":white_header}'>
			<i class="icon icon-list">&#xe600;</i>
			<p>天猫超市<span class="pos">上海<i class="icon">&#xe612;</i></span></p>
			<i class="icon icon-shopcart">&#xe620;</i>
		</header>
		<div class="input-search" :class='{"input-search-move":white_header}'>
			<i class="icon">&#xe650;</i>家具99减30松50
		</div>
		<div class="home-content" ref="wrapper">
			<div class="content">
				<swiper :options="swiperOption"  ref="mySwiper">
					<swiper-slide v-for='item in lunbo'>
						<img class="banner" :src="item" alt="">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div> 
				</swiper>
				<swiper :options="swiperOption1"  ref="menuSwiper">
					<swiper-slide v-for='list in menu_list'>
						<div class="menu">
							<ul class="menu-list-wrap">
								<li class="menu_li" v-for ='item in list'>
									<img :src="item.img" alt="">
									<p>{{item.text}}</p>
								</li>
							</ul>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div> 
				</swiper>

				<div class="content-box">
					<img src="//img.alicdn.com/tfs/TB1gmzZpeySBuNjy1zdXXXPxFXa-1125-240.gif?getAvatar=1" alt="">

				</div>

				<div class="content-box padblr10">
					<h1><span>超市必买</span><span>SELECTED</span></h1>
					<img src="//img.alicdn.com/tfs/TB12l6npXuWBuNjSszbXXcS7FXa-1035-447.png_760x760Q90s50.jpg_.webp" alt="">
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BScroll from 'better-scroll'
	export default{
		data(){
			return{
				white_header:false,
				lunbo:[
					"//img.alicdn.com/tfs/TB1hiq4oKSSBuNjy0FlXXbBpVXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1iRWFoHGYBuNjy0FoXXciBFXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1dHYloKuSBuNjy1XcXXcYjFXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/imgextra/i2/628189716/TB2Xu4MdMjN8KJjSZFgXXbjbVXa_!!628189716.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1QahCoXOWBuNjy0FiXXXFxVXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1VN1QoMmTBuNjy1XbXXaMrVXa-1125-807.jpg_970x970Q90s50.jpg_.webp"
				],
				menu_list:[
					[
					{
						img:"//img.alicdn.com/tfs/TB15IWNlKOSBuNjy0FdXXbDnVXa-168-168.png_170x120Q90s50.jpg_.webp",
						text:"生鲜水果"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1kMWChhWYBuNjy1zkSutGGpXa.jpg_170x120Q90s50.jpg_.webp",
						text:"休闲零食"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1uqxzdb3nBKNjSZFMSuuUSFXa.jpg_170x120Q90s50.jpg_.webp",
						text:"奶品水饮"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1mFaJcnCWBKNjSZFtSuuC3FXa.jpg_170x120Q90s50.jpg_.webp",
						text:"粮油厨房"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1OMFQhXmWBuNjSspdSuvugXXa.jpg_170x120Q90s50.jpg_.webp",
						text:"家用电器"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB14SqehXuWBuNjSspnSut1NVXa.jpg_170x120Q90s50.jpg_.webp",
						text:"母婴用品"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1FzTLhmtYBeNjSspkSuvU8VXa.jpg_170x120Q90s50.jpg_.webp",
						text:"个人护理"
					},
					{
						img:'//img.alicdn.com/tps/i4/TB1U1yXhkOWBuNjSsppSutPgpXa.jpg_170x120Q90s50.jpg_.webp',
						text:'家具清洁'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1DiCOib5YBuNjSspoSuveNFXa.jpg_170x120Q90s50.jpg_.webp",
						text:"进口好货"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1.rRCdOMnBKNjSZFzSuw_qVXa.jpg_170x120Q90s50.jpg_.webp",
						text:"夏日精选"
					}],[
					{
						img:"//img.alicdn.com/tps/i4/TB1mBlZcoOWBKNjSZKzSutfWFXa.jpg_170x120Q90s50.jpg_.webp",
						text:'中外名酒'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1nL89hXGWBuNjy0FbSuv4sXXa.jpg_170x120Q90s50.jpg_.webp",
						text:'收纳日用'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1pBXxbVkoBKNjSZFkSuv4tFXa.jpg_170x120Q90s50.jpg_.webp",
						text:"滋补保健",
					},
					{
						img:'//img.alicdn.com/tps/i4/TB1upBwb8jTBKNjSZFDSuvVgVXa.jpg_170x120Q90s50.jpg_.webp',
						text:"家访内衣"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB10hqXhkOWBuNjSsppSutPgpXa.jpg_170x120Q90s50.jpg_.webp",
						text:'宠物用品'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1bpjmXljTBKNjSZFNSuusFXXa.jpg_170x120Q90s50.jpg_.webp",
						text:'方便速食'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1ywt3b_mWBKNjSZFBSutxUFXa.jpg_170x120Q90s50.jpg_.webp",
						text:'成人用品'
					},
					{
						img:"//img.alicdn.com/tps/i4/TB18gEyXpuWBuNjSszbSuwS7FXa.jpg_170x120Q90s50.jpg_.webp",
						text:'美容护肤'
					},
					{
						img:'//img.alicdn.com/tps/i4/TB1yd__drZnBKNjSZFGSuvt3FXa.jpg_170x120Q90s50.jpg_.webp',
						text:"3C汽配"
					},
					{
						img:"//img.alicdn.com/tps/i4/TB1yd__drZnBKNjSZFGSuvt3FXa.jpg_170x120Q90s50.jpg_.webp",
						text:'文具体育'
					}]
				],
				swiperOption: {
				  // 循环播放
				  loop:true,
				  // 自动播放
				  autoplay:{
				    stopOnLastSlide:false,
				    delay:3000,
				    disableOnInteraction:false
				  },
				  // 最左最右禁止滑动
				  resistanceRatio : 0,
				  // 配置小圆点
				  pagination:{
				    el:'.swiper-pagination',
				    clickable:true,
				    bulletActiveClass: 'white-bullet-active',
				  },
				  
				},
				swiperOption1: {
				  // 循环播放
				  loop:true,
				  // 最左最右禁止滑动
				  resistanceRatio : 0,
				  // 配置小圆点
				  pagination:{
				    el:'.swiper-pagination',
				    clickable:true,
				    bulletClass : 'menu-bullet',
				    bulletActiveClass: 'menu-white-bullet-active',
				  },
				  
				}
			}
		},
		components:{
			swiper, swiperSlide
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			},
			menuSwiper(){
				return this.$refs.menuSwiper.swiper;
			}
		},
		mounted(){
			var _this = this;
			_this.$nextTick(()=>{
				if(!_this.scroll){
					_this.scroll = new BScroll(_this.$refs.wrapper,{
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
					if(pos.y<-30){
						_this.white_header = true;
					}
					if(pos.y>= -30){
						_this.white_header = false;
					}
				});

			})
		}

	}
</script>
<style scoped>
.banner{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.home-header{
	position: absolute;
	left: 0;
	top: 0;
	height: 1.173333rem;
	width: 100%;
	z-index: 100;
	text-align: center;
	line-height: 1.173333rem;
	font-size: 0.64rem;
	color: #fff;
	box-sizing: content-box;
}
.white-home-header{
	background: #fff;
	border-bottom: 1px solid #f1f1f1;
}
.home-header .pos{
	font-size: 0.32rem;
	vertical-align: top;
	border: 1px solid #fff;
	border-radius: 4px;
	padding: 0 0.133333rem;
	margin-left: 5px;
}
.home-header .pos i{
	vertical-align: top;
}

.home-header .icon-list,.home-header .icon-shopcart{
	position: absolute;
	height: 1.173333rem;
	width: 1.173333rem;
	top: 0;
	text-align: center;
}
.white-home-header .icon-list,.white-home-header .icon-shopcart{
	color: #333;
}
.home-header .icon-list{
	left: 0;
}
.home-header .icon-shopcart{
	right: 0;
}
.home-content{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 1.28rem;
}
.menu{
	width: 100%;
	height: 5.066667rem;
	padding: 0.266667rem;
	background: #fff;
}
.menu-list-wrap{
	height: 100%;
}
.menu_li{
	width: 20%;
	height: 50%;
	float: left;
	padding: 0 0.213333rem;
	font-size: 0.32rem;
	text-align: center;
}
.menu_li img{
	width: 100%;
	height: auto;
	border-radius: 50%;
}
.content-box{
	margin-top: 0.266667rem;
	background: #fff;
	position: relative;
}
.content-box img{
	vertical-align: top;
	width: 100%;
	height: auto;
}
.padblr10{
	padding:0 0.266667rem;
	padding-bottom: 0.266667rem;
}
.content-box>h1{
	position: absolute;
	top: 0.266667rem;
	left: 0.266667rem;
	color: #333;
	font-size: 0.373333rem;
}
.content-box>h1>span:nth-child(2){
	color: #1b5;
	font-size: 0.426667rem;
	font-weight: bold;
}
.input-search i{
	margin-right: 0.133333rem;
}
.input-search{
	left: 0.266667rem;
	right: 0.266667rem;
	position: absolute;
	z-index: 100;
	height: 0.8rem;
	line-height: 0.8rem;
	border-radius: 0.4rem;
	background: rgba(255,255,255,0.7);
	top: 1.173333rem;
	font-size: 0.373333rem;
	font-weight: bold;
	color: #999;
	padding-left: 0.2rem;
	transition: all 0.5s;
}
.input-search-move{
	left: 1.173333rem;
	right: 1.173333rem;
	top: 0.213333rem;
	background: #e1e1e1;
}

</style>
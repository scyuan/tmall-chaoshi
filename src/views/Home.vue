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
				
				<div class="content-box padblr10 pt40">
					<h1><span>超市必买</span><span>SELECTED</span></h1>
					<div class="channel">
						<div class="left">
							<div class="channel-item channel-item1">
								<p class="left-title">今日疯抢</p>
								<p class="left-con">9点场剩余时间</p>
								<p><span>01</span>:<span>12</span>:<span>56</span></p>
							</div>
							<div class="channel-item">
								<img class="a" src="//img.alicdn.com/tps/i4/TB1nHxyeAUmBKNjSZFOwu1b2XXa.png_400x400Q50s50.jpg_.webp" alt="">
							</div>
							<span class="yiyuan">1元起</span>
						</div>
						<div class="right">
							<div class="right-top">
								<p class="right-title">有好货</p>
								<p class="right-con">鸡蛋松糕饼</p>
								<p class="right-con c1">波兰进口</p>
								<span class="nice n1">独特表情包</span>	
								<img src="//img.alicdn.com/tfs/TB11wwzpXOWBuNjy0FiXXXFxVXa-345-345.png_230x230Q90s50.jpg_.webp" alt="">
							</div>
							<div class="right-bottom">
								<p class="right-title">量贩装</p>
								<p class="right-con">心相印心柔</p>
								<p class="right-con c2">2件减10</p>
								<span class="nice n2">热卖70291</span>
								<img src="//img.alicdn.com/tfs/TB1VExUdFOWBuNjy0FiXXXFxVXa-345-297.png_230x230Q90s50.jpg_.webp" alt="">
							</div>
						</div>
					</div>
				</div>

				<div class="content-box padblr10">
					<h1><span>品牌精选</span><span>SHOWTIME</span></h1>
					<img src="//img.alicdn.com/tfs/TB12l6npXuWBuNjSszbXXcS7FXa-1035-447.png_760x760Q90s50.jpg_.webp" alt="">
					<div class="low_price">
						<div><img class="limg" src="//img.alicdn.com/simba/img/TB1JAKSoL1TBuNjy0FjSuujyXXa.jpg_270x270Q75s50.jpg_.webp" alt=""></div>
						<div><img class="limg" src="//img.alicdn.com/simba/img/TB1P_nBoH1YBuNjSszeSuublFXa.jpg_270x270Q75s50.jpg_.webp" alt=""></div>
						<div><img class="limg" src="//img.alicdn.com/imgextra/i1/2454638901/TB2afFdoAOWBuNjSsppXXXPgpXa_!!2454638901.jpg_270x270Q75s50.jpg_.webp" alt=""></div>
					</div>
				</div>

				<div class="content-box pt40">
					<h1><span>金榜题名</span><span>HOTLISTS</span></h1>
					<header class="xian"></header>
					<hot-list-item 
						v-for='(item , index) in hot_list' 
						:class='{ "pb10":index === (hot_list.length-1)}' 
						:title='item.title' 
						:list='item.list'>
					</hot-list-item>
				</div>


				<div class="content-box pt40">
					<h1><span>猜你喜欢</span><span>EXPLORE</span></h1>
					
					<div class="box_wrapper clearfix">
						
						<guess-like-item 
							v-for='item in guess_like_list'
							width='33.33%'
							:item='item'
						></guess-like-item>
						
					</div>
					
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BScroll from 'better-scroll'
import hotListItem from '@/components/hot-list-item'
import guessLikeItem from '@/components/guess-like-item'
	export default{
		data(){
			return{
				hot_list:null,
				
				white_header:false,

				guess_like_list:null,

				lunbo:[
					"//img.alicdn.com/tfs/TB1hiq4oKSSBuNjy0FlXXbBpVXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1iRWFoHGYBuNjy0FoXXciBFXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1dHYloKuSBuNjy1XcXXcYjFXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/imgextra/i2/628189716/TB2Xu4MdMjN8KJjSZFgXXbjbVXa_!!628189716.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1QahCoXOWBuNjy0FiXXXFxVXa-1125-807.jpg_970x970Q90s50.jpg_.webp",
					"//img.alicdn.com/tfs/TB1VN1QoMmTBuNjy1XbXXaMrVXa-1125-807.jpg_970x970Q90s50.jpg_.webp"
				],
				menu_list:[
					
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
			swiper, swiperSlide,hotListItem,guessLikeItem
		},
		computed:{
			swiper(){
				return this.$refs.mySwiper.swiper;
			},
			menuSwiper(){
				return this.$refs.menuSwiper.swiper;
			}
		},
		methods:{
			getMenuList(){
				this.$http.get("https://www.easy-mock.com/mock/5aebeec1d6bbb07214b7b06e/tmall/getMenuList")
				.then(res=>{
					console.log(res.data.data);
					this.menu_list = res.data.data.menu_list;
				})
				.catch(error=>{
					console.log(error);
				})
			},
			getHotList(){
				this.$http.get("https://www.easy-mock.com/mock/5aebeec1d6bbb07214b7b06e/tmall/getHotList")
				.then(res=>{
					console.log(res.data);
					this.hot_list = res.data.data.hot_list;
				})
			},
			getGuessLikeList(){
				this.$http.get("https://www.easy-mock.com/mock/5aebeec1d6bbb07214b7b06e/tmall/getLikeLiast")
				.then(res=>{
					console.log(res.data);
					this.guess_like_list = res.data.data.guess_like_list;
				})
			}
		},
		created(){
			this.getMenuList();
			this.getHotList();
			this.getGuessLikeList();
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
	background-color: rgba(255,255,255,0);
	transition: all 0.3s;
}
.white-home-header{
	background-color: rgba(255,255,255,1);
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
	overflow: auto;
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
.content-box>img{
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
	background: #f1f1f1;
}
.left{
	width: 40%;
	background: linear-gradient(90deg, #FFEAE5, #FFF6F3);
	position: relative;
	font-size: 12px;
}
.left>img{
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.left:before{
	content: '';
	display: block;
	padding-top: 144.3%;
}
.pt40{
	padding-top: 1.066667rem;
}
.channel{
	display: flex;
}
.right{
	flex: 1;
	display: flex;
	margin-left: 2px;
	flex-direction: column;
}
.right>div{
	flex: 1;
	width: 100%;
	position: relative;
	padding: 0.266667rem;
	font-size: 12px;
}
.right img{
	height: 100%;
	width: auto;
	position: absolute;
	right: 0;
	bottom: 0;
}
.right-top{
	margin-bottom: 2px;
	background: linear-gradient(90deg, #E1F8FF, #F6FDFF);
}
.right-bottom{
	background: linear-gradient(90deg, #E5E9F8, #F4F6FC);
}
.channel-item{
	position: absolute;
	left: 0;
	top: 0;
}
.channel-item .a{
	width: 100%;
	height: 100%;
	vertical-align: top;
}
.channel-item1{
	padding-top: 0.266667rem;
	padding-left: 0.266667rem;
}
.channel-item1 .left-title{
	font-size: 0.373333rem;
	font-weight: bold;
	color: #ff4246;
}
.channel-item1>p:nth-child(3){
	font-size: 0.373333rem;
	color: #dd2727;
	font-weight: bold;
	margin-top: 2px;
}
.channel-item1>p:nth-child(3) span{
	color: #fff;
	background: #dd2727;
	border-radius: 2px;
	padding: 0 1px;
}
.yiyuan{
	color: #fff;
	background: #ff4246;
	height: 1.066667rem;
	width: 1.066667rem;
	border-radius: 0.533333rem;
	position: absolute;
	right: 0.266667rem;
	top: 30%;
	font-weight:bold;
	line-height: 1.066667rem;
	text-align: center;
}
.right-title{
	font-size: 14px;
	font-weight: bold;
	color: #3d4245;
}
.right-con{
	color: #666;
	font-weight: bold;
}
.c1{
	color: #87cde1;
}
.c2{
	color: #a9acd7;
}
.nice{
	position: absolute;
	left: 0.266667rem;
	bottom: 0.266667rem;
	color: #fff;
	font-weight: bold;
	padding: 0 4px;
	border-radius: 4px;
}
.n1{
	background: #87cde1;
}
.n2{
	background: #a9acd7;
}
.low_price{
	display: flex;
	margin-top: 4px;
}
.low_price>div{
	flex: 1;
}
.low_price>div:nth-child(2){
	margin: 0 2px;
}
.low_price>div .limg{
	width: 100%;
	height: auto;
	vertical-align: top;
}
.pt30{
	padding-top: 0.8rem;
}
.xian{
	margin-left: 0.266667rem;
	height: 1px;
	background: #f1f1f1;
}
.pb10{
	padding-bottom: 0.266667rem;
}
.box_wrapper{
	border-top: 1px solid #f1f1f1;
}
.box_wrapper>div:nth-child(3n+1),.box_wrapper>div:nth-child(3n+2){
	border-right: 1px solid #f1f1f1;
	border-bottom: 1px solid #f1f1f1;
}
.box_wrapper>div:nth-child(3n){
	border-bottom: 1px solid #f1f1f1;
}
</style>
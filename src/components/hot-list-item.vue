<template>
	<div id="item">
		<h1>{{ title }}</h1>
		<div class="items-wrap originscroll" ref='wrapper'>
			<ul :style='ul_style' class="content">
				<li v-for='(item,index) in list' :class='{"mr5":index !== list.length-1}'>
					<p class="li_title"><span>{{ item.title }}</span></p>
					<div class="li_box clearfix">
						<div class="li_box_l">
							<img :src="item.left.img" alt="">
							<p class="box_name">{{ item.left.name }}</p>
							<p class="box_price">￥{{ item.left.price }}</p>
						</div>
						<div class="li_box_r">
							<img :src="item.right.img" alt="">
							<p class="box_name">{{ item.right.name }}</p>
							<p class="box_price">￥{{ item.right.price }}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll'
	export default{
		props:{
			title:{
				type:String,
				required: true
			},
			list:{
				type:Array,
				required: true
			}
		},
		data(){
			return{
				
			}
		},
		computed:{

			ul_style(){
				var rate = parseFloat(document.getElementsByTagName('html')[0].style.fontSize.replace('px',''));
				
				return {
					width:(this.list.length * 5.866667 + 0.133333*(this.list.length-1) + 0.266667*2 ) + 'rem',
					padding:'0 0.266667rem'
				}
			}
		},
		mounted(){
			var _this = this ;
			_this.$nextTick(()=>{
				if(!_this.scroll){
					_this.scroll = new BScroll(_this.$refs.wrapper,{
						click:true,
						scrollX:true
					})
				}
			})
		}
	}
</script>
<style scoped>
#item{
	color: #000;
}
#item h1{
	font-size: 0.32rem;
	margin-left: 0.266667rem;
	padding: 0.266667rem 0;
}
#item .items-wrap{
	height: 4.8rem;
	width: 100%;
}
#item ul{
	height: 100%;
}
#item li{
	text-align: center;
	background: #EEF3F7;
	width: 5.866667rem;
	height: 100%;
	float: left;
	padding-top: 0.266667rem;
	font-size: 0.32rem;
}
.li_title span{
	color: #fff;
	background: #FFCF78;
	border-radius: 40px;
	padding: 2px 6px;
}
.li_box{
	padding-top: 0.266667rem;
}
.li_box img{
	width: 2.666667rem;
	height: 2.666667rem;
}
.li_box_l,.li_box_r{
	width: 2.666667rem;
}
.li_box_l{
	float: left;
	margin-left: 0.186667rem;
}
.li_box_r{
	float: right;
	margin-right: 0.186667rem;
}
.mr5{
	margin-right: 0.133333rem;
}
.box_name{
	width: 80%;
	margin: 0 auto;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.box_price{
	color: red;
}
</style>
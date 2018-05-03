<template>
  <div id="app">
    <router-view></router-view>

    <footer class="footer">

      <div v-for='(item,index) in footer_menu_list' class="footer-menu" :class='{"footer_active":footer_active_index == index}' @click='go(index)'>
        <i class="icon" v-html='item.icon'></i>
        <p>{{item.text}}</p>
      </div>
      
    </footer>
  </div>
</template>

<script>
import Rem from '@/util/Rem'
new Rem();

export default {
  name: 'App',
  data(){
    return{
      footer_active_index:0,
      footer_menu_list:[
        {
          "icon":'&#xe605;',
          "text":'首页'
        },
        {
          "icon":'&#xe674;',
          "text":'翻牌'
        },
        {
          "icon":'&#xe60f;',
          "text":'品牌特惠'
        },
        {
          "icon":'&#xe634;',
          "text":'分类'
        },
        {
          "icon":'&#xe62f;',
          "text":'我的'
        },
      ]
    }
  },
  methods:{
    go(index){
      this.footer_active_index = index;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body,div,p,ul,li,h1{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul{
  list-style: none;
}
html{
  height: 100%;
  background: #efefef;
}
body{
  width: 10rem;
  margin: 0 auto;
  background: #f8f8f8;
  height: 100%;
  position: relative;
}
@font-face {
  font-family: 'iconfont';  /* project id 650031 */
  src: url('//at.alicdn.com/t/font_650031_6wm8usfcx2m7k3xr.eot');
  src: url('//at.alicdn.com/t/font_650031_6wm8usfcx2m7k3xr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_650031_6wm8usfcx2m7k3xr.woff') format('woff'),
  url('//at.alicdn.com/t/font_650031_6wm8usfcx2m7k3xr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_650031_6wm8usfcx2m7k3xr.svg#iconfont') format('svg');
}
.icon{
  font-family: 'iconfont';
  font-style: normal;
}
.footer{
  height: 1.28rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  border-top: 1px solid #e4e4e4;
  color: #3d4245;
  font-size: 0.32rem;
}
.footer>div{
  width: 20%;
  float: left;
  text-align: center;
  padding-top: 0.133333rem;
}
.footer .footer_active{
  color: #1b5;
}
.footer i{
  font-size: 0.533333rem;
}
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 1px;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: -0.213333rem;
}
.swiper-pagination-bullet{
  width:18px;
  height: 2px;
  border-radius: 0;
  background: #fff;
  opacity: 0.6;
}
.white-bullet-active{
  opacity: 1;
}
.swiper-container-horizontal > .swiper-pagination-bullets .menu-bullet{
  margin: 0 1px;
}
.swiper-container-horizontal > .menu-bullet{
  bottom: -0.213333rem;
}
.menu-bullet{
  background: #000;
  width:18px;
  height: 2px;
  display: inline-block;
  border-radius: 0;
  background: #000;
  opacity: 0.1;
}
.menu-white-bullet-active{
  opacity: 0.4;
}

</style>

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
html,body,div,p,ul,li{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
  font-family: 'iconfont';  /* project id 650031 */
  src: url('//at.alicdn.com/t/font_650031_w3prytxhlso1dcxr.eot');
  src: url('//at.alicdn.com/t/font_650031_w3prytxhlso1dcxr.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_650031_w3prytxhlso1dcxr.woff') format('woff'),
  url('//at.alicdn.com/t/font_650031_w3prytxhlso1dcxr.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_650031_w3prytxhlso1dcxr.svg#iconfont') format('svg');
}
.icon{
  font-family: 'iconfont';
  font-style: normal;
}
.footer{
  height: 1.28rem;
  width: 100%;
  position: fixed;
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
</style>

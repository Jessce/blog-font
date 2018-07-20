<template> 
  <div class="app">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="@/assets/icon/batman.png">
        </router-link>
        <span class="pages-nav">
           <router-link :to="{path: '/'}"> 
              <a>Home</a>
           </router-link>
           <router-link :to="{path: '/links'}">
              <a>Essential Links</a>
           </router-link>
           <router-link :to="{path: '/about'}">
              <a>About me</a>
           </router-link>
        </span>
        <div class="head-nav">
          <a href="http://60.205.185.66:8081/blog/admin/index" class="submit-login" target="_blank">
          Login</a> 
        </div>  
      </div>
    </div>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>© 2018 ZeForse MIT</p>
    </div>
  </div>	
</template> 
 
<script>
export default {
  name: 'Layout',
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  position: relative;
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  color: #000;
  font-family:"sans-serif";
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 0 0 1px rgba(0,0,0,.1);
  height: 90px;
  line-height: 90px;
  width: 100%;
  box-shadow:0 5px 5px -1px rgba(14, 14, 14, .26);
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 60px;
  margin-top: 20px;
}
.head-nav{
  float: right;
}
.submit-login {
  color: #000;
  font-family:"sans-serif";
  font-weight: 550;
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 0 0 1px rgba(0,0,0,.1);
  height: 50px;
  line-height: 50px;
  width: 100%;
  border: #ddd;
  background: #f0f2f5;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.container {
  width: 1200px;
  height: 1000px;
}
.app-foot {
  position: absolute; bottom: 0;
  text-align: center;
  height: 80px;
  width: 100%;
  font-weight: 300;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  font-family:"sans-serif";
  font-size: 20px;
  letter-spacing: 1px;
  text-shadow: 0 0 1px rgba(0,0,0,.1);  
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.logo{
  color: rgb(252, 19, 19);
  font-family:sans-serif;
  font-size: 60px;
}
.pages-nav{
  color: #444;
  width: 500px;
  margin: auto 10px 400px 40px;
  font-family: inherit;
  font-size: 15px;
  line-height: 20px;
  font-weight: 800;
  text-shadow: 0 0 1px rgba(0,0,0,.1);
  text-align: -webkit-match-parent;
}
.pages-nav a{
  margin:0 30px 40px 0;
}
</style>

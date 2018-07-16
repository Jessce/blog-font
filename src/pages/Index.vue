<template>
 <div class="app">

      <div class="slider">
       <slide-show :slides="slides" :inv="invTime"></slide-show>
      </div>

      <div class="icon-show">
        <div class="icon">
          <img src="../assets/icon/spiderman.png" alt="my icon" title="JesseZalman"/>
        </div>
        <img class="coffe" src="../assets/icon/coffe.png"/><br/>
        <img class="wifi" src="../assets/icon/wifi.png"/>
      </div>

      <div class="post-show">
        <span 
          class="post-categories"
          v-for="(category,index) in categories"
          :key="index"
          @click="currentIndex=index">
          <a class="category-tab">{{category}}</a>
        </span>
        <div class="post-container">
          <p v-for="(article,index) in articles" :key="index">
            <a :href="'/post/'+article.articleId" target="_blank">
            <div class="post-title">{{article.articleTitle}}</div>
            <div class="post-des">{{article.articleDescription}}</div>
            </a>
          </p>
        </div>
      </div>
      

 </div> 
</template>

<script>
import slideShow from '../components/SlideShow'
export default {
  name: 'Index',
  components: {
    slideShow
  },
  data () {
    return {
    invTime: 2000,
    slides: [
      {
        src: require('../assets/slideShow/javapic.png'),
        href: ''
      },
      {
        src: require('../assets/slideShow/404.jpg'),
        href: ''
      },
      {
        src: require('../assets/slideShow/pic4.jpg'),
        href: ''
      },
      {
        src: require('../assets/slideShow/gongzhu.jpg'),
        href: ''
      }
    ],  
	  content:{},
	  categories:{},
	  currentIndex:0,
	  url:'http://127.0.0.1:8081/blog/client/articles/list',
    }
  },
  computed:{
    articles(){
	  return this.content[this.currentIndex]&&this.content[this.currentIndex].articles;
	}
  },
   created() {
      this.$axios.get(this.url).then((response) => {
        // success
        this.content = response.data.data;
		    this.categories=response.data.data.map(item => item.name);
      }).catch( (error) => {
        // error
        console.log(error)
      });
    }
}
</script>


<style scoped>
h1{
  font:30px/1.5em  "Microsoft YaHei" ,sans-serif;
}
.app{
  position: relative;
}
.slider {
  position:relative;
  float: left;
  width: 900px;
}
.icon-show{
  position: absolute;top: 80px; left: 880px;
  float: left;
}
.post-show{
  position: absolute;top: 480px; left: 95px;
  
}
.post-categories{
    background-color: transparent;
    color: #9ba324;
    text-transform: uppercase;
    letter-spacing: 1px;
}
.category-tab{
  margin: 100px 30px 10px 0;
  font-family: inherit;
  font-size: 15px;
  line-height: 20px;
  font-weight: 800;
  text-shadow: 0 0 1px rgba(0,0,0,.1);
  text-align: -webkit-match-parent;
}
.post-container{
  width: 750px;
}
.post-title{
  font:26px/1.5em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  color: #000;
  font-weight: 200;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
}
.post-des{
  font:16px/1.5em  "Microsoft YaHei" ,sans-serif;
  color: #404040;
  font-family: inherit;
  font-weight: 200;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
}
.hr {
  margin: 0;
  border: 0;
  border-top: 1px solid #eee;
  height: 0;
  box-sizing: content-box;
  display: block;
  unicode-bidi: isolate;
  -webkit-margin-before: 0.5em;
  -webkit-margin-after: 0.5em;
  -webkit-margin-start: auto;
  -webkit-margin-end: auto;
  overflow: hidden;
}
img{
  width: 260px;
}
.wifi{
  margin-top: 40px;
  margin-left: 60px;
  width: 130px;
}
.coffe{
  margin-top: 10px;
  margin-left: 60px;
  width: 130px;
}
</style>
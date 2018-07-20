<template>
 <div class="post">
   <div class="title">{{title}}</div>
   <div class="content">{{content}}</div>
   <img class="cat" src="@/assets/icon/cat.png">
 </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      title:'关于作者我本人',
      content:'欢迎来到我的个人博客，我是这个网站的作者，是浙江大学植物保护系14级本科毕业生，毅然决然地走上了程序员这条道路。如果你对我有更多兴趣，或者想要详细了解这个low比网站，从0开始的搭建过程，可以参看我在“作者述”类目下的自我介绍。由衷感谢您的到来~'
    }
  }
}
</script>


<style scoped>
.post{
  text-align: center;
  margin-left: 150px;
}
.title{
  font:26px/1.5em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 200;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
}
.date{
  font:16px/1.5em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 200;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
}
.content{
  text-align:center;
  width: 80%;
  font:16px/2em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 500;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
  margin-left: 100px;
}
.cat{
  margin-top: 100px;
  width: 300px;
}
</style>

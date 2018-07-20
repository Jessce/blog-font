<template>
 <div class="post">
   <div class="title">{{post.articleTitle}}</div>
   <div class="date">{{post.createTime}}</div>
   <div class="content">{{post.articleContent}}</div>
 </div>
</template>

<script>
export default {
  name: 'post',
  props:['id'],
  data () {
    return {
    post:{},
	  url:'http://60.205.185.66:8081/blog/client/articles/article?ArticleId='+this.id,
    }
  },
   created() {
      this.$axios.get(this.url).then((response) => {
        // success
        this.post = response.data.data;
      }).catch( (error) => {
        // error
        console.log(error)
      });
    }
}
</script>


<style scoped>
.post{
  text-align: center;
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
  text-align:left;
  text-indent: 2em;
  width: 80%;
  font:16px/1.5em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 500;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-left: 150px;
  margin-bottom: 0;
}
</style>

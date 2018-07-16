<template>
 <div class="post">
   <div class="title">{{title}}</div>
   <div class="date">{{createTime}}</div>
   <div class="content">{{content}}</div>
 </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      title:'关于作者我本人',
      createTime:'2018-7-16',
      content:'content'
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
  text-align:left;
  text-indent: 2em;
  width: 80%;
  font:16px/1.5em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 500;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-bottom: 0;
}
</style>

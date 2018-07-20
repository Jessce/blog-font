<template>
 <div class="pagesNotFound">
    <div class="notfound">
      <div>Sorry,</div><br/>
      <span>the page you requested was </span><span class="stress">not found .</span>
    </div>
    <router-link :to="{path:'/'}">
    <span class="goback">Go Back —— </span><br/>
    </router-link>
    <img src="@/assets/404/404.jpg"/>
 </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.pagesNotFound{
  margin-top: 100px;
}
.notfound{
  text-align: left;
  font:26px/1em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 50;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-top: 30px;
  margin-left: 450px;
  margin-bottom: 30px;
}
.stress{
  font-weight: 800;
}
img{
  margin-top: 40px;
  margin-left: 400px;
  width: 600px;
  height: 400px;
}
.goback{
  text-align: left;
  font:26px/1em  "Microsoft YaHei" ,sans-serif;
  font-family: inherit;
  font-weight: 800;
  text-shadow: 0 0 1px rgba(0,0,0,.15);
  transition: color .3s;
  margin-left: 450px;
}
</style>

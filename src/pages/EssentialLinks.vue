<template>
  <div class="links">
    <img src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Vue.js Official
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
    </ul>
    <h2>Official Resourse</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <br/>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
      <li>
        <a
          href="https://github.com/axios/axios"
          target="_blank"
        >
          axios
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EssentialLinks',
  data () {
    return {
      msg: 'Welcome to My Blog Website'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  margin-top: 50px;
  margin-bottom: 50px;
}
.links{
  position: relative;
  margin-top: 50px;
  margin-left: 100px;
  text-align: center;
  line-height: 4em;
  font-weight: 600;
}
h1{
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 50px;
}
h2 {
  font-size: 26px;
  font-weight: normal;
}
ul {
  font-size: 26px;
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

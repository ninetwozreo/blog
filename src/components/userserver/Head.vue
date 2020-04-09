<template>

  <div>
    <el-button type="primary" @click="logOutt()">注销</el-button>
    <!--<el-button type="text"  @click="dialogFormVisible = true">新增用户</el-button>-->

    <!--<login justify="end" ></login>-->
    <!--<img class="logo-img-size" src="/src/assets/logo.jpg">-->
    <!--<login></login>-->
  </div>

  <!--<script src="//unpkg.com/vue/dist/vue.js"></script>-->
  <!--<script src="//unpkg.com/element-ui@2.0.11/lib/index.js"></script>-->

</template>

<script>
// import {logOut} from '../../api/login'

export default {
  name: 'Head',
  methods: {
    logOutt () {
      // logOut()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
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

  /*-------------------------*/
  /*@import url("//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css");*/

</style>

<template>

  <div >
    <!--<el-button type="primary" @click="logOutt()" style="text-align: left" >登录</el-button>-->
    <!--<el-button type="primary" @click="logOutt()" style="text-align: center" >logo</el-button>-->
  <el-button type="primary" @click="newEssay()" style="text-align: right" >写博客</el-button>
</div>

  <!--<script src="//unpkg.com/vue/dist/vue.js"></script>-->
  <!--<script src="//unpkg.com/element-ui@2.0.11/lib/index.js"></script>-->

</template>

<script>
// import {logOut} from '../../api/login'

export default {
  name: 'BHead',
  methods: {
    logOutt () {
      // logOut()
    },
    newEssay () {
      this.$router.push('Beditor')
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

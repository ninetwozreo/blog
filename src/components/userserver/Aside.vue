<template>
  <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
  <div>
    <el-menu width="200px" :default-openeds="['1', '3']"
             :default-active="$router.path"
              router>
      <!--<el-submenu index="1">-->
        <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
        <!--<el-menu-item-group>-->
          <!--<template slot="title">分组一</template>-->
          <!--<el-menu-item index="/UserIndex">用户管理</el-menu-item>-->
          <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-menu-item-group title="分组2">-->
          <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-submenu index="1-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
    </el-menu>
  </div>
  <!--</el-aside>-->
</template>

<script>
import Register from './Register'
// import router from '../../router/index'

export default {
  name: 'Aside',
  components: {Register},
  data () {
    return {
      msg: 'Welcome to Fck place'
    }
  },
  method: {

  },
  beforeCreate () {
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  /*.el-aside {*/
    /*color: #333;*/
  /*}*/
  /*-------------------------*/
  /*@import url("//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css");*/
  /*.el-menu {*/
    /*border-right: 1px solid #e6e6e6;*/
    /*list-style: none;*/
    /*position: relative;*/
    /*margin: 0;*/
    /*padding-left: 0;*/
    /*!*background-color: #fff;*!*/
  /*}*/
</style>

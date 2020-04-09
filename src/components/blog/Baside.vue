<template>
  <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
  <div>
    <el-menu
      :default-active="$router.path"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#e0eeff69"
      text-color="#000"
      active-text-color="#d94242"
    style="margin-top: 70%">
      <!--<el-submenu index="1" class="blog_item">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-location"></i>-->
          <!--<span>导航一</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<template slot="title">分组一</template>-->
          <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-menu-item-group title="分组2">-->
          <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-submenu index="1-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <el-menu-item index="Bindex" class="blog_item">
        <i class="el-icon-menu"></i>
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item index="Paper" class="blog_item">
        <i class="el-icon-setting"></i>
        <span slot="title">分类</span>
      </el-menu-item>
      <!--<el-menu-item index="4" class="blog_item">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">导航四</span>-->
      <!--</el-menu-item><el-menu-item index="4" class="blog_item">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">导航四</span>-->
      <!--</el-menu-item><el-menu-item index="4" class="blog_item">-->
        <!--<i class="el-icon-setting"></i>-->
        <!--<span slot="title">导航四</span>-->
      <!--</el-menu-item>-->
    </el-menu>
  </div>
  <!--</el-aside>-->
</template>

<script>
// import router from '../../router/index'

export default {
  name: 'Aside',
  data () {
    return {
      msg: 'Welcome to Fck place'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeCreate () {
    // debugger
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
  /*.el-header {*/
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    /*line-height: 60px;*/
  /*}*/

  /*.el-aside {*/
  /*color: #333;*/
  /*}*/
  /*-------------------------*/
  /*@import url("//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css");*/
  . el-menu --inline {

    background-color: #ff12747d !important;

  }
  .blog_item{
    width: 70%;
  }
  .el-menu {
  border-right: 0px solid #e6e6e6;
  list-style: none;
  position: relative;
  margin: 0;
  padding-left: 0;
    /*background-color: #ff12747d !important;*/

  }
  /*.el-menu-item-group  {*/
  /*border-right: 1px solid #e6e6e6;*/
  /*list-style: none;*/
  /*position: relative;*/
  /*margin: 0;*/
  /*padding-left: 0;*/
  /*background-color: #000;*/
  /*}*/
</style>

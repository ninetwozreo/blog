<template>
  <div id="app" ref="theImageUrl"  class="mainn">

    
    <el-container ref="33">
      <el-header><b-head></b-head></el-header>
      <el-main>
        <el-row :gutter="10">
          <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="4" >
            <div class="grid-content " >
              <baside></baside>
            </div>
          </el-col>
          <!--<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>-->
          <el-col :xs="8" :sm="12" :md="16" :lg="18" :xl="16">
            <div class="grid-content ">
              <router-view></router-view>

              <!--<bindex></bindex>-->
            </div>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="4">
            <div class="grid-content"></div>
          </el-col>
        </el-row>

      </el-main>
    </el-container>

  </div>
</template>

<script>
import Aside from './userserver/Aside'
import Head from './userserver/Head'
import Baside from './blog/Baside'
import Bindex from './blog/index/Bindex'
import BHead from './blog/Bhead'

export default {
  name: 'HelloWorld',
  components: {BHead, Bindex, Baside, Head, Aside},
  data () {
    return {
      imggg:".jpg",
      msg: 'Welcome to Shark place'
    }
  },
  mounted(){
    debugger
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 1000px;
    height: 100%;
  }

  /*+++++++++++++++++++++++++++++++++++++++++++*/
  .mainn {
        background: rgba(0, 0, 0, 0) url("../assets/fj.jpg") no-repeat scroll 100% 100%;
    background-size: auto;
    background-size: cover;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  ,
  .el-header, .el-footer {
    background-color: #2c91fa0d;/*、、、、、*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #c0c4cc00;
    color: #333;
    text-align: center;
    line-height: 500px;
  }

  .el-main {
    /*background: rgba(0, 0, 0, 0) url('../assets/timg.jpg') no-repeat scroll 100% 100%;*/

    /*background-color: #4d68ec52;*/
    background-color: #c0c4cc00;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<template>

  <div class="app">
    <!--<register></register>-->
    <div class="button-container">
      <add-user></add-user>
      <add-user></add-user>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div style="height: 75%">
    <user-list></user-list>
    </div>
    <!--<el-row :gutter="20">-->

    <!--</el-row>-->

  </div>
  <!--<script src="//unpkg.com/vue/dist/vue.js"></script>-->
  <!--<script src="//unpkg.com/element-ui@2.0.11/lib/index.js"></script>-->

</template>

<script>
import Register from './Register'
import AddUser from './operaters/AddUser'
import UserList from './operaters/UserList'

export default {
  name: 'UserIndex',
  components: {UserList, AddUser, Register},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
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
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .button-container {
    color: #42b983;
    text-align: left;
    height: 80px;
  }
  /*-------------------------*/
  /*@import url("//unpkg.com/element-ui@2.0.11/lib/theme-chalk/index.css");*/

</style>

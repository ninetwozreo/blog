<template>

  <div >
    <!--<el-button type="primary" @click="logOutt()" style="text-align: left" >登录</el-button>-->
    <!--<el-button type="primary" @click="logOutt()" style="text-align: center" >logo</el-button>-->
  <el-button type="primary" @click="newEssay()" style="text-align: right" >写博客</el-button>
  <el-button type="primary" @click="updateBackgroud()" style="text-align: right" >改背景</el-button>
</div>

  <!--<script src="//unpkg.com/vue/dist/vue.js"></script>-->
  <!--<script src="//unpkg.com/element-ui@2.0.11/lib/index.js"></script>-->

</template>

<script>
// import {logOut} from '../../api/login'

export default {
  name: 'BHead',
  data () {
    return {
     imgUrl:null,
    }
  },
  mounted () {
    debugger
    // console.log(this.$refs.theImageUrl.style.backgroud)
  },
  methods: {
    logOutt () {
      // logOut()
    },
    newEssay () {
      this.$router.push('Beditor')
    },
    updateBackgroud () {
     this.$prompt('请输入图片地址', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          // inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          debugger
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
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

<template>
  <div class="tip-div">
    <!--<img src="../assets/logo.png">-->
    <div>
      <register></register>
      <div style="margin: 20%; margin-bottom: 30%;margin-left: 40%;margin-right: 20%">

        <el-form :model="form" style="width: 50%;">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <!--<el-form-item label="密码" :label-width="formLabelWidth">-->
          <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
          <!--<el-option label="区域一" value="shanghai"></el-option>-->
          <!--<el-option label="区域二" value="beijing"></el-option>-->
          <!--</el-select>-->
          <!--</el-form-item>-->
        </el-form>
        <div slot="footer" class="dialog-footer" style="margin-left: 20%">
          <el-button type="primary" @click="onSubmit">确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {login} from '../api/login.js'
import Register from './userserver/Register'
// import {changeLoginState} from '../router/index.js'

export default {
  components: {Register},
  methods: {
    onSubmit: function () {
      login(this.form).then((res) => {
        var data = res.data.data
        // add end here
        // alert(data.message)
        // add from here
        const accessToken = data.token
        if (accessToken) {
          // 将用户token保存到vuex中
          // changeLoginState()
          localStorage.setItem('token', accessToken)
          // sessionStorage.setItem('token', accessToken)
          // this.$store.commit('setToken', accessToken)
        }
        // getCurrposition().then(res => {
        //   this.$store.state.currentUser = res
        // })

        this.$nextTick(() => this.$router.replace({
          name: 'UserIndex'
        }))
      })

      // console.log('submit!')
    }
  },
  name: 'Login',
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      labelPosition: String,
      form: {
        username: '',
        password: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },

      formLabelWidth: '120px'
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

  .tip-div {
    color: red;
    background: rgba(0, 0, 0, 0) url("../assets/jm3.svg") no-repeat scroll 100% 100%;
    background-size: auto;
    background-size: cover;
    height: 1000px;
    padding-top: 10px
  }
</style>

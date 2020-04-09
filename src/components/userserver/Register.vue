<template>

  <div>
    <el-button type="text"  @click="dialogFormVisible = true">注册</el-button>

    <el-dialog title="登录" :visible.sync="dialogFormVisible">

      <!--<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">-->
      <!--<el-form-item label="密码" prop="pass">-->
      <!--<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="确认密码" prop="checkPass">-->
      <!--<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="年龄" prop="age">-->
      <!--<el-input v-model.number="ruleForm.age"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item>-->
      <!--<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
      <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
      <!--</el-form-item>-->
      <!--</el-form>-->
      <el-form :model="rform" status-icon :rules="rules" ref="rform"  label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="rform.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="e-mail" prop="email" :label-width="formLabelWidth">
          <el-input v-model="rform.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  label="密码" prop="password" :label-width="formLabelWidth">
          <el-input type="password" v-model="rform.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item  label="确认密码" prop="mkpassword" :label-width="formLabelWidth">
          <el-input type="password" v-model="rform.mkpassword" autocomplete="off"></el-input>
        </el-form-item>

        <!--<div slot="footer" class="dialog-footer">-->
        <el-form-item :label-width="formLabelWidth">

          <el-button type="primary" @click="submitForm('rform')" >确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-form-item>
        <!--</div>-->
      </el-form>

    </el-dialog>
  </div>
  </template>

  <!--<script>-->
    <!--export default {-->
      <!--data () {-->
        <!--return {-->
          <!--dialogTableVisible: false,-->
          <!--dialogFormVisible: false,-->
          <!--form: {-->
            <!--name: '',-->
            <!--region: '',-->
            <!--date1: '',-->
            <!--date2: '',-->
            <!--delivery: false,-->
            <!--type: [],-->
            <!--resource: '',-->
            <!--desc: ''-->
          <!--},-->
          <!--formLabelWidth: '120px'-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--</script>-->

<script>
export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(1)) {
          callback(new Error('请输入数字值'))
        } else {
          if (!value.indexOf('@')) {
            callback(new Error('请输入正确的邮箱格式'))
          } else {
            callback()
          }
        }
      }, 1000)
    }

    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }

      callback()

      // setTimeout(() => {
      //   // if (false) {
      //   // // if (!Number.isInteger(value)) {
      //   //   callback(new Error('请输入数字值'))
      //   // } else {
      //   //   if (value < 18) {
      //   //     callback(new Error('必须年满18岁'))
      //   //   } else {
      //   //     callback()
      //   //   }
      //   // }
      // }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.rform.password !== '') {
          this.$refs.rform.validateField('mkpassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.rform.mkpassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      rform: {
        username: '',
        email: '',
        mkpassword: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      // ruleForm: {
      //   pass: '',
      //   checkPass: '',
      //   age: ''
      // },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        mkpassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkName, trigger: 'blur' }
        ],
        email: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  /*.el-aside {*/
  /*background-color: #D3DCE6;*/
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 200px;*/
  /*}*/

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .logo-img-size{
    height:30px;
    width:30px;
    float: right;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 400px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 600px;
  }
</style>

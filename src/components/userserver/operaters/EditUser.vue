<template>
  <!--<el-button type="primary" @click="open">新增用户</el-button>-->
  <div class="model-button">
    <el-button type="primary" size="mini"  @click="dialogFormVisible = true">编辑</el-button>

    <el-dialog title="新增用户" :visible.sync="dialogFormVisible" width="30%">

      <el-form :model="form" status-icon :rules="rules" ref="form"  label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roleId" :label-width="formLabelWidth">
          <el-autocomplete
            v-model="form.roleId"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输内容"
            @select="handleSelect"
            style="width: 100%"
          ></el-autocomplete>
        </el-form-item>
        <!--<div slot="footer" class="dialog-footer">-->
        <el-form-item :label-width="formLabelWidth" style="text-align: center">

          <el-button type="primary" @click="submitForm('form')" >确 定</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-form-item>
        <!--</div>-->
      </el-form>

    </el-dialog>
  </div>
  <!--<el-button type="primary">主要按钮</el-button>-->
</template>
<script>
import {addUser, selectUserRoles} from '../../../api/user.js'

export default {
  name: 'editUser',
  props: {
    form: {
      username: '1',
      // roleName: '',
      roleId: ''
    }
  },
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }

      callback()
    }
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      // roless: [''],
      state: '',
      timeout: null,
      formLabelWidth: '120px',
      // ruleForm: {
      //   pass: '',
      //   checkPass: '',
      //   age: ''
      // },
      rules: {
        username: [
          { validator: checkName, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addUser(this.form).then((res) => {
            alert(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    querySearchAsync: function (queryString, cb) {
      selectUserRoles().then(res => {
        var ro = res.data.data
        var roles = ro.map(item => {
          return {
            label: item.roleName,
            value: item.id
          }
        })
        var results = queryString ? roles.filter(this.createStateFilter(queryString)) : roles

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      })
    },
    createStateFilter (queryString) {
      return (state) => {
        return (state.roleName.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      console.log(item)
    }
  }
}
</script>
<style>
  .model-button{
    line-height: 0px;
    display: inline-block;
  }
</style>

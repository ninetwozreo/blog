<template>
  <!--<el-button type="primary" @click="open">新增用户</el-button>-->
  <div class="model-button"  style="text-align: center">
    <el-button type="danger" size="mini" @click="dialogVisible = true">删除</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认删除？</span>
      <span slot="footer" class="dialog-footer">
  <el-button @click="dialogVisible = false">取 消</el-button>
<el-button type="primary" @click="doDelUser()">确 定</el-button>
</span>
    </el-dialog>
  </div>
  <!--<el-button type="primary">主要按钮</el-button>-->
</template>
<script>
import {delUser} from '../../../api/user.js'

export default {
  name: 'delUser',
  props: {
    rowMsg: {}
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    doDelUser () {
      delUser(this.rowMsg.id).then((res) => {
        if (res.data.msg === 'Ok') {
          this.$router.go(0)
        }
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

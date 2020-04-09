<template>
  <!--<el-button type="primary" @click="open">新增用户</el-button>-->
  <div style="height: 400px">
    <el-table
      :data="tableData.filter(data => !search || data.date.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;" class="el-table">
      <el-table-column
        label="id"
        prop="id">
      </el-table-column><el-table-column
        label="email"
        prop="email">
      </el-table-column><el-table-column
        label="用户名"
        prop="username">
      </el-table-column>
      <el-table-column
        label="创建时间"
        prop="createTime">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            auto-complete="off"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <edit-user v-bind:form=scope.row></edit-user>
          <del-user v-bind:rowMsg=scope.row></del-user>
          <!--<el-button-->
            <!--&gt;Edit</el-button>-->
          <!--<el-button-->
            <!--size="mini"-->
            <!--@click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: right;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2,10, 20, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalRow">
    </el-pagination>
  </div>
</template>
<script>
import {getUsers} from '../../../api/user.js'
import EditUser from './EditUser'
import DelUser from './DelUser'

export default {
  name: 'userList',
  components: {DelUser, EditUser},
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      totalRow: 0,
      tableData: [],
      formLabelWidth: '120px'

    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.getTableData()
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getTableData()

      console.log(`当前页: ${val}`)
    },
    handleEdit (index, row) {
      // addUser(row)
      console.log(index, row)
    },
    getTableData () {
      getUsers({'pageSize': this.pageSize, 'currentPage': this.currentPage}).then(res => {
        var data = res.data.data
        this.tableData = data.list
        this.totalRow = data.page.totalNum
        this.pageSize = data.page.pageSize
        this.currentPage = data.page.currentPage
      })
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  mounted () {
    this.tableData = this.getTableData()
  }
}
</script>
<style>
  .el-table{
    background-color:#333;
  }
  .ker-footer{
    text-align: right;
  }
</style>

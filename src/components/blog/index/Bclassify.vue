<template>
  <div class="infinite-list-wrapper" style="overflow:auto;height: 30%">
    <el-input v-model="paramss.summary" autocomplete="off"></el-input>
    <ul
      class="list"
      v-infinite-scroll="load"
      infinite-scroll-disabled="disable">
      <li v-for="blog in blogs" class="list-item"
          style="margin-top: 5px; background-color: #efb76073;border-radius: 10px" @click="openPaper(blog)">
        <el-container style="border-radius: 10px">
          <el-header
            style="background-color: #a8c9e99c;text-align: left;border-top-left-radius: 10px;border-top-right-radius: 10px;">
            {{blog.title}}
          </el-header>
          <el-main style="background-color: #53888852;text-align: center">
            <div class="box" style="width: 100%">
              <div class="bottom" style="width: 100%;text-align: left">
                <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                  <label v-html="blog.title"></label>
                </el-tooltip>
              </div>
            </div>
          </el-main>
          <el-footer
            style="background-color: #a8c9e99c;text-align: left;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;">
            {{blog.userId}}
          </el-footer>
        </el-container>
        <!--{{ i }}-->
      </li>
    </ul>
    <p v-if="loading" @click="load">查看更多</p>
    <!--<p v-if="loading">加载中...</p>-->
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
import {listEssays} from '../../../api/blogEssay.js'

export default {
  name: 'bclassfiy',
  data () {
    return {
      loading: true,
      blogs: [],
      paramss: {
        // pageDesc: {
        pageSize: 2,
        totalNum: 5,
        summary: ''

        // },
        // article: {
        // }
      }
    }
  },
  computed: {
    noMore () {
      return this.paramss.pageSize >= this.paramss.totalNum
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    openPaper (content) {
      // alert('aa' + i)
      this.$router.push({
        path: 'BPaper',
        name: 'BPaper', // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        params: {
          parentParms: content
          // msgKey: this.msg
        }
      })
    },
    getEssays () {
      listEssays(this.paramss).then((res) => {
        this.blogs = res.data.data.list
        this.paramss.totalNum = res.data.data.page.totalNum
      })
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.paramss.pageSize += 2
        this.getEssays()
      }, 2000)
    }
  },
  mounted () {
    this.getEssays()
  }
}
</script>
<style>
  .box {
    width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }

  }
</style>

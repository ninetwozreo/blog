<template>
  <div class="bottom" style="width: 100%;text-align: left">
    <el-button @click="editEsaay()" style="text-align: right">编辑</el-button>

    <el-tooltip style="font-size:large;color: #f2e926;" v-html="article.content" class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
      <div></div>
      <!--<label v-html="content" @click="lll()" ></label>-->
    </el-tooltip>
    <el-button @click="openSay()">评论</el-button>
    <div style="display: none">
      <el-input type="text" ></el-input>
      <el-button>发表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bpaper',
  data () {
    return {
      params: {
        // content:'',
        parentParms: ''
        // msgKey: this.msg
      },
      article: {
        // content: ''
      },
      text: 'aa',
      // content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,

      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    openSay () {
      // this.
      // debugger
    },
    editEsaay () {
      this.$router.push({
        path: 'Beditor',
        name: 'Beditor', // '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',
        params: {
          blogContent: this.article
          // msgKey: this.msg
        }
      })
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  },
  mounted: function () {
    this.article = this.$route.params.parentParms
  }
}
</script>
<style>

</style>

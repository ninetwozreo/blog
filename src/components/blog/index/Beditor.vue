<template>
  <div class="bottom" style="width: 100%;text-align: left">
    <div v-html="str" class="ql-editor">
      {{str}}
    </div>
    <el-form :model="form" status-icon :rules="rules" ref="form"  label-width="100px" class="demo-ruleForm">
      <el-form-item label="标题" prop="title" >
        <el-input v-model="form.title" ></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content" >
        <quill-editor
          v-model="form.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
          @change="onEditorChange($event)">
        </quill-editor>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" @click="submitForm('form')" >确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

import { quillEditor } from 'vue-quill-editor' // 调用编辑器
import {saveEssay} from '../../../api/blogEssay.js'

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  name: 'beditor',
  components: {
    quillEditor
  },
  data () {
    return {
      // params: {
      //   blogContent: ''
      // },
      editorOption: {},
      form: {
        // id: '',
        title: ``,
        content: ``
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          debugger
          saveEssay(this.form).then((res) => {
            this.$router.go(0)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    commitEssay () {
      // saveEssay({'content':content,'title':})
    },
    onEditorReady (editor) { // 准备编辑器

    },
    onEditorBlur () {}, // 失去焦点事件
    onEditorFocus () {}, // 获得焦点事件
    onEditorChange () {}, // 内容改变事件
    // 转码
    escapeStringHTML (str) {
      str = str.replace(/&lt;/g, '<')
      str = str.replace(/&gt;/g, '>')
      return str
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted () {
    debugger
    if (this.$route.params.blogContent) {
      var contentt = this.$route.params.blogContent
      this.form.id = contentt.id
      this.form.title = contentt.title
      this.form.content = contentt.content
    }
  }

}
</script>
<style>

</style>

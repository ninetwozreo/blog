<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import UserIndex from './components/userserver/UserIndex'
import Head from './components/userserver/Head'

// import {register} from './api/register'

export default {
  data () {
  },
  name: 'App',
  components: {Head, UserIndex},
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  --bgc:#5aadff;
  --hfc:#87e3e2;
  --cc:#2c3e50;
  --fc:#000;
  margin-top: 0px;
}

</style>

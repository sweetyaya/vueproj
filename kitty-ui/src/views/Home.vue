<template>
  <div class="page">
    <h2>Home Page</h2>
    <el-button type="primary" @click="getUser()">获取用户</el-button>
    <el-button type="primary" @click="getMenu()">获取菜单</el-button>
  </div>
</template>

<script>
/*
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
  name: 'Home',
  methods: {
    getUser() {
      axios.get('http://localhost:8080/user').then(function (res) {
        alert(JSON.stringify(res.data));
      }).catch(function (err) {
        alert(err);
      });
    },
    getMenu() {
      axios.get('http://localhost:8080/menu').then(function (res) {
        alert(JSON.stringify(res.data));
      }).catch(function (err) {
        alert(err);
      });
    }
  }
}
*/
</script>

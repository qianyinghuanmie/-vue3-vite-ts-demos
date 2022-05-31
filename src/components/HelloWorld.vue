<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineProps<{ msg: string }>();
function greeter(person: string) {
  return "Hello, " + person;
}
let usetHtml = greeter("测试");
const count = ref(0);

const route = useRoute(); // 相当于 vue2 中的 this.$route route   用于获取当前路由数据
const router = useRouter(); // 相当于 vue2 中的 this.$router router  用于路由跳转
function handleclick() {
  router.push({ path: "/home" });
}
</script>

<template>
  <el-row class="mb-4">
    <el-button>
            <router-link to="/home" >家庭</router-link>
    </el-button>


    <el-button type="warning">
            <router-link to="/demo" >测试页面</router-link>
    </el-button>
    <el-button type="danger">
            <router-link to="/home" >家庭</router-link>
    </el-button>
    <el-button>中文</el-button>
  </el-row>
  <h1>{{ msg }}</h1>
  <p>{{ usetHtml }}</p>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
/* #myGrid{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
} */
#myGrid {
  display: flex;
}
#myGrid div {
  flex: 1;
  background-color: red;
  box-sizing: content-box;
  border: 1px solid black;
}
</style>

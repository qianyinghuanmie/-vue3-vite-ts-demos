<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
function handleclick() {
  router.go(-1);
}
</script>
<template>
  <div id="backButton">
      <el-page-header content="" title="返回" @click="handleclick" />
  </div>
</template>
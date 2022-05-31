<template>
  <div>
    <div><button-counter></button-counter></div>
    不小心404了
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
onMounted(() => {
  console.log("这是一个404页面");
});
</script>
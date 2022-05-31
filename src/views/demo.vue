<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
let shenHuiFuJson: any;
// let shenJson: any;
// import { apiGetUserInfo } from '../apis/user'
import { getShenHuiFuInfo } from "../apis/demoApi";
export default defineComponent({
  name: "demo",

  setup() {
    const route = useRoute();
    const router = useRouter();
    const obj = reactive({ count: 0,demoStr:"demo",shenJson:""})

    let demoStr  = ref("demoStr");
    function changeStr(){
      demoStr=ref("111");
      console.log(111);
      obj.demoStr="23"
    }
    getShenHuiFuInfo({ myType: "json" })
      .then((res) => {
        shenHuiFuJson = res;
        obj.shenJson =shenHuiFuJson[0].shenhuifu;s
      })
      .catch(() => {
        router.replace("404");
      });
    onMounted(() => {});
    
    const store = useStore();
    const changeStoreCount = () => {
      // 在这里提交了mutations中的addCount方法
      //一个直接同步提交的方法
      store.commit("addCount", 1);
    };
    const asyncChangeStoreCount = () => {
      setTimeout(() => {
        //异步分发到action进行提交
        store.dispatch("asyncAddStoreCount", 2);
      }, 1000);
    };
    return { store,obj, changeStoreCount, asyncChangeStoreCount,changeStr ,demoStr};
  },
});
</script>
<template>
  <div>
    <button-counter></button-counter>
    <h1>vuex中的数据{{ store.state.count }}</h1>
    <button @click="changeStoreCount">改变vuex数据</button>
    <button @click="asyncChangeStoreCount">异步改变vuex数据</button>
    <div>{{ obj.shenJson }}</div>
    <div v-html="obj.demoStr"></div>
    <p>我是一个数字{{obj.count}}</p>
    <button @click="changeStr">点击更改字符</button>
    <button @click="obj.count++">点击更改字符</button>
  </div>
</template>

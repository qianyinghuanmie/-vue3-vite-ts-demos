# Vue 3 + TypeScript + Vite + vuex +vue-router
###### 比较凌乱的一些尝试，为的是保证能够正常使用一些新的api(全部基于vue3)



[1、vuex的配置](#vuex的配置)
[2、全局组件的使用](#全局组件的使用)
[3、vue-router的使用](#vue-router的使用)
[4、ts使用中的一些问题](#ts使用中的一些问题)
[5、vite的一些注意点](#vite的一些注意点)
[6、与element-plus的使用](#与element-plus的使用)
[7、与百度地图的使用](#与百度地图的使用)
[8、axios的使用](#axios的使用)


###### vuex的配置
###### 全局组件的使用
###### vue-router的使用
文件1：新建一个文件夹router,再router建一个文件index.ts
里面代码如下
```JavaScript


import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/demo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
```
***值得注意的是***
###### ts使用中的一些问题
###### vite的一些注意点
###### 与element-plus的使用
###### 与百度地图的使用
###### 在实际项目中使用的一些状况
###### axios的使用
文件1，vue.config.ts中修改如下
```JavaScript
import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig(({ mode }) => {
  // 获取当前环境的配置
  const config = loadEnv(mode, './')
  return {
    plugins: [vue()],
    resolve:{
      alias:{
        'vue':'vue/dist/vue.esm-bundler.js'
      }
    },
    server: {
      proxy: {
        '/api': {
          target: "https://v.api.aa1.cn/",
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  }
})
```
文件2：新建一个requests的文件夹，新建一个index.ts，内容如下
```JavaScript
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: '/api', // 所有的请求地址前缀部分
	timeout: 60000, // 请求超时时间毫秒
	withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'token': 'your token',
		'X-Requested-With': 'XMLHttpRequest',
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config
	},
	function (error) {
		// 对请求错误做些什么
		console.log(error)
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	function (response) {
		console.log(response)
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		// dataAxios 是 axios 返回数据中的 data
		const dataAxios = response.data
		// 这个状态码是和后端约定的
		const code = dataAxios.reset
		return dataAxios
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		console.log(error)
		return Promise.reject(error)
	}
)

export default service
```
文件3，新建一个apis文件夹，建一个demoApi.ts，
例如，我这请求一个免费的api
```JavaScript
// 导入axios实例
import httpRequest from '../requests/index'

// 定义接口的传参
interface getShenHuiFu {
	myType: string
}

// 获取神回复
export function getShenHuiFuInfo(param: getShenHuiFu) {
    return httpRequest({
		url: `/api/api-wenan-shenhuifu/index.php?aa1=${param.myType}`,
		method: 'get',
	})
}

```

***注意：loadEnv可设置也可以不设置,
rewrite看你调用的真实api是否要重写***


###### 一些参考 
[vue3中文文档](https://www.javascriptc.com/vue3js)
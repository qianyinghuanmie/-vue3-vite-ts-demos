// 自写插件

import backPlugin from './back.vue'
import { createApp } from 'vue'



// 当main.js执行到.use(toast)代码(安装插件)时，会执行obj的install函数
(backPlugin as any).install = (app:any) => {

    /* Vue3的自定义插件 */
    // 1.实例化并绑定组件
    const toastConstructor = createApp(backPlugin);
    const instance = toastConstructor.mount(document.createElement('div'));

    // 2.将挂载的Node添加到body中
    document.body.appendChild(instance.$el);

    // 3.定义全局($toast即是此插件的名称)
    app.config.globalProperties.$back = instance;
}

export default backPlugin

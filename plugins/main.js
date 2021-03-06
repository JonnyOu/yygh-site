import Vue from 'vue' // vue 文件引入 - 方便在vue方法内容直接 this 调取
import Globe from '../config/config.vue' // 自定变量内容 

let main = {
    install(Vue) {
        Vue.prototype.$globe = Globe; // 变量的内容 后期可以在vue中 this->$globe.xxx 使用
    }
};

Vue.use(main); // 这里不能丢

// 这里是 为了在 asyncData 方法中使用
export default ({ app }, inject) => {
    // Set the function directly on the context.app object
    app.$globe = Globe // 名称
}
// 入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//按需导入Mint-ui组件
import { Header } from 'mint-ui';
    //轮播图组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header);

//导入App组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
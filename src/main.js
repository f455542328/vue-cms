// 入口文件
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//按需导入Mint-ui组件
    //轮播图组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
//导入时间插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//全局配置接口地址
Vue.http.options.root = 'http://47.89.21.179:8080'
Vue.http.options.emulateJSON = true

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



//导入App组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
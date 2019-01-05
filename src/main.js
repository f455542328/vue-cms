// 入口文件
import Vue from 'vue'

//按需导入Mint-ui组件
import { Header } from 'mint-ui';

//导入mui样式
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);

//导入App组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})
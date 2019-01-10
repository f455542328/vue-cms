// 入口文件
import Vue from 'vue'
//配置浏览器调试代码
Vue.config.devtools = true

//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//按需导入Mint-ui组件
    //轮播图组件

import MintUI from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
Vue.use(MintUI);
import 'mint-ui/lib/style.css'
//导入时间插件
import moment from 'moment'

//定义全局过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//全局配置接口地址
Vue.http.options.root = 'http://47.89.21.179:8080'
Vue.http.options.emulateJSON = true

//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
    // ...
    state: {//调用方式 this.$store.state.***
        car: car,
    },
    mutations: {//this.$store.commit('方法的名称','按需传递唯一的参数')
        addToCar(state, goodsinfo){

            var flag = false;

            state.car.some(item => {
                if( item.id == goodsinfo.id){
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true;
                }
            });
            if(!flag){
                state.car.push(goodsinfo)
            } 

            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state, goodsinfo) {
            // 修改购物车中商品的数量值
            // 分析： 
            state.car.some(item => {
              if (item.id == goodsinfo.id) {
                item.count = parseInt(goodsinfo.count)
                return true
              }
            })
            // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
          },
          removeFormCar(state, id) {
            // 根据Id，从store 中的购物车中删除对应的那条商品数据
            state.car.some((item, i) => {
              if (item.id == id) {
                state.car.splice(i, 1)
                return true;
              }
            })
            // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
            localStorage.setItem('car', JSON.stringify(state.car))
          },
          updateGoodsSelected(state, info) {
            state.car.some(item => {
              if (item.id == info.id) {
                item.selected = info.selected
              }
            })
            // 把最新的 所有购物车商品的状态保存到 store 中去
            localStorage.setItem('car', JSON.stringify(state.car))
          }
    },
    getters: { // this.$store.getters.***
        // 相当于 计算属性，也相当于 filters
        getAllCount(state) {
          var c = 0;
          state.car.forEach(item => {
            c += item.count
          })
          return c
        },
        getGoodsCount(state) {
          var o = {}
          state.car.forEach(item => {
            o[item.id] = item.count
          })
          return o
        },
        getGoodsSelected(state) {
          var o = {}
          state.car.forEach(item => {
            o[item.id] = item.selected
          })
          return o
        },
        getGoodsCountAndAmount(state) {
          var o = {
            count: 0, // 勾选的数量
            amount: 0 // 勾选的总价
          }
          state.car.forEach(item => {
            if (item.selected) {
              o.count += item.count
              o.amount += item.price * item.count
            }
          })
          return o
        }
      }
})




//导入App组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})
import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
    //导入二级组件
        //导入新闻列表组件
import NewsList from './components/news/NewsList.vue'
        //导入新闻详情页
import NewsInfo from './components/news/NewsInfo.vue'
    //导入图片分享组件
import PhotoList from './components/photos/PhotoList.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [//配置路由规则
    {path: '/',redirect: './home'},
    {path: '/home',component: HomeContainer},
    {path: '/home/newslist',component: NewsList},
    {path: '/home/newsinfo/:id',component: NewsInfo},
    {path: '/home/photolist',component: PhotoList},
    {path: '/member',component: MemberContainer},
    {path: '/search',component: SearchContainer},
    {path: '/shopcar',component: ShopCarContainer},

  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router
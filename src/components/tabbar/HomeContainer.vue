<template>
  <div>
   <swiper :lunbotulist="lunbotulist" :isfull="true" ></swiper>
    <!-- 六宫格布局 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
          <img
            src="../../images/menu1.png"
            alt=""
          >
          <div class="mui-media-body">新闻资讯</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
          <img
            src="../../images/menu2.png"
            alt=""
          >
          <div class="mui-media-body">图片分享</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
          <img
            src="../../images/menu3.png"
            alt=""
          >
          <div class="mui-media-body">商品购买</div>
        </router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../images/menu4.png"
            alt=""
          >
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../images/menu5.png"
            alt=""
          >
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img
            src="../../images/menu6.png"
            alt=""
          >
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper.vue';
export default {
  data() {
    return {
      lunbotulist: [] //保存轮播图数据
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          this.lunbotulist = result.body.message;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  },
  components: {
      swiper
  }
};
</script>

<style lang="scss" scoped>


.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    height: 50%;
    width: 50%;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>
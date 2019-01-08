<template>
    <div>
         <mt-swipe :auto="4000">
             <!-- lunbotuList由使用者传值 -->
      <mt-swipe-item
        v-for="item in lunbotulist"
        :key="item.img"
      ><img
          :src="item.img"
          :class="{'full': isfull}"
          alt=""
        ></mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
    export default {
        props: ["lunbotulist","isfull"]
    }
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
      text-align: center;
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: yellow;
    }

    img {
      height: 100%;
     // width: 100%;
    }
    .full{
        width: 100%;
    }
  }
}
</style>
<script setup>
import axios from 'axios';
import {onMounted,reactive} from "vue";
import {getBanner} from "../../request/api/home.js";

onMounted(async () => {
    const res = await getBanner();
    // console.log(res.data);
    state.images = res.data.banners.map(item => item.pic);
});
const state = reactive({
    images: [
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
        'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]});

</script>

<template>
<div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for=" image in state.images" :key="image">
    <img :src="image" />
    </van-swipe-item>
    </van-swipe>
</div>

</template>

<style>
#swiperTop{
   .van-swipe{
       width: 100%;
       padding: 0.1rem;
       height: 30rem;
   }
    .van-swipe-item{
        width: 100%;
        height: 30rem;
        border-radius: 8px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }
    .van-swipe__indicator--active{
        background-color: #921252;
    }
}

</style>
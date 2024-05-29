<script setup>
const props = defineProps({
    musicDetail: {
        type: Object,
        default: () => ({coverImgUrl: ""})
    }
});

// Optional logging for debugging
console.log(props.musicDetail);
</script>

<template>
    <div class="musicTop">
        <div class="bgContainer">
            <img v-if="props.musicDetail?.value?.coverImgUrl" :src="props.musicDetail?.value?.coverImgUrl" alt="" class="bgImg">
            <img v-else src="https://p1.music.126.net/s3jv-5uRZW0i-jcG9skZpA==/1099511" alt="">
        </div>

        <div class="itemLeft">
            <svg @click="$router.go(-1)" class="icon special-icon" t="1716793199183" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2459" width="200" height="200"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" p-id="2460"></path></svg>
            <span>歌单</span>
        </div>
        <div class="itemRight">
            <svg class="icon" t="1716793744651" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1841" width="200" height="200"><path d="M1005.888 993.728c23.36-23.232-0.832-44.096-0.832-44.096L829.376 774.4c59.392-78.528 105.28-186.368 105.28-292.672 0-256.704-206.656-464.768-462.016-464.768C217.664 16.96 11.008 225.024 11.008 481.664c0 256.576 206.656 464.704 461.632 464.832 109.312 0 233.664-61.504 312.64-124.992l175.168 174.72c0.064 0 17.152 25.792 45.44-2.496zM190.72 765.504a401.024 401.024 0 0 1-116.928-283.968A400.832 400.832 0 0 1 190.72 197.76a394.752 394.752 0 0 1 281.984-117.632c106.816 0 206.656 41.728 282.048 117.568a400 400 0 0 1 117.12 283.904 399.296 399.296 0 0 1-117.12 283.904 393.152 393.152 0 0 1-282.048 117.376 392.896 392.896 0 0 1-281.984-117.376z" p-id="1842"></path></svg>
            <svg t="1716793791387" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7104" width="200" height="200"><path d="M62.5 255.817c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.345-31.912-31.962z m0 255.695c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.346-31.912-31.962z m0 255.694c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.345-31.912-31.962z" fill="#ffffff" p-id="7105"></path></svg>
        </div>
    </div>
    <div class="itemContent">
        <div class="imgSmall">
            <img v-if="props.musicDetail?.value?.coverImgUrl" :src="props.musicDetail?.value?.coverImgUrl" alt="">
            <img v-else src="https://p1.music.126.net/s3jv-5uRZW0i-jcG9skZpA==/1099511" alt="">
        </div>
        <div>
<!--            <span>{{props.musicDetail.value.name}}</span>-->
        </div>

    </div>
</template>

<style scoped>
.musicTop {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    width: 100%;
    height: 40%;
    box-sizing: border-box;
    position: relative;
    /*overflow: hidden;*/
    .bgImg {
        /*width: 100%;*/
        /*height:400px;*/
        position: absolute;
        z-index: -1;
        /*height: 40%;*/
        /*width: 100%;*/
        background-size: 40% 100%;
        filter: blur(30px);
    }
    .itemLeft {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        width: 25%;
        height: auto;
        span{
            color: white;
        }


    }
    .itemRight{
        display:flex;
        flex-direction: row;
        gap: 20px;

    }
}

.icon {
    height: 28px;
    width: 40px;
    fill: white;
}
.special-icon {
    height: 34px;
}
span {
    font-size: 3.4rem;
    font-weight: bold;
    margin-left: 2.4rem;
}
.bgContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Places the background container behind other elements */
}

.itemContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    height: 60%;
    box-sizing: border-box;

    .imgSmall {
        width: 25%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

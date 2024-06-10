<script setup>
import {onMounted,ref} from "vue";
import {getRemMusicList} from "@/request/api/home.js";
import router from "@/router/index.js";
import {useItemMusicDetail} from "@/stores/item.js";
const musicList = ref([]);
onMounted(() => {
    getRemMusicList().then(res => {
        musicList.value = res.data.result;
        // console.log(musicList.value);
        // useItemMusicDetail().playlist = musicList.value;
        // console.log(useItemMusicDetail().playlist);
    });
});
function changePlayCount(playCount){
    if(playCount>1000000000){
        return (playCount/1000000000).toFixed(1)+'亿';
    }
    else if(playCount>10000) {
        return (playCount / 10000).toFixed(1) + '万';
    }
    else{
        return playCount;
    }
}
function navigateToMusic(item){
    // console.log(id);
    router.push({path:'/ItemMusic',query:{id:item.id}});
    const itemDetailStore = useItemMusicDetail();
    //设置我的当前歌单id
    itemDetailStore.playlist = item;
    // console.log(useItemMusicDetail().idState);
}
</script>

<template>
<div class="musicList">
    <div class="musicTop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
    </div>
    <div class="musicRem">
        <van-swipe :loop="false" :width="200" :height="250" class="my-swipe" :show-indicators="false">
            <van-swipe-item v-for="item in musicList" :key="item" class="item-swipe"  @click="navigateToMusic(item)">
<!--                <router-link :to="{path:'/ItemMusic',query:{id:item.id}}"></router-link>-->

                <img :src="item.picUrl" alt="">
                <span class="playCount">
                   <svg t="1716731137329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12972" width="200" height="200"><path d="M683.11867466 511.93378743L305.13945048 286.673108V737.3202714L683.11867466 511.93378743zM222.13577976 882.78857422V141.21142578l622.39510714 370.72236165L222.13577976 882.78857422z" p-id="12973" fill="#ffffff"></path></svg>
                    {{changePlayCount(item.playCount)}}
                </span>
                <span class="name">{{item.name}}</span>
            </van-swipe-item>

        </van-swipe>

    </div>
</div>
</template>
<style scoped>
.musicList {
    .musicTop {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        height: 6rem;
        box-sizing: border-box;
        .title {
            font-size: 3.4rem;
            font-weight: bold;
            text-align: center;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            /* 其他样式 */
        }
        .more {
            border: 1px solid #cccccc;
            font-size: 2.4rem;
            text-align: center; /* 添加此行来居中文本 */
            line-height: 3rem; /* 确保文本垂直居中 */
            padding: 0 1rem;
            border-radius: 1.7rem;
            height: auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;

        }
    }
}

.musicRem{
    width: 100%;
    position: relative;
    .my-swipe{
        height: 100%;
        display: flex;
        overflow: hidden;
        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
        }
        .item-swipe{
            padding: 5px;
            border-radius: 8px;
            .name{
                font-size: 17px;
                color: #000;
            }
        }
        .playCount{
            position: absolute;
            top: 10px;
            right: 10px;
            /*background: rgba(0,0,0,0.5);*/
            color: #fff;
            padding: 0 5px;
            display: flex;
            justify-items: center;
            align-items: center;
            svg{
                width: 22px;
                height: 23px;
                margin-right: 5px;
                margin-bottom: 1px;
            }


        }
    }
}
</style>
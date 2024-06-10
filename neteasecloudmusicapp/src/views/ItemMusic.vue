<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount} from "vue";
import {getMusicListDetail,getMusicList} from "@/request/api/home.js";
import {ref,reactive } from "vue";
import ItemMusicList from "../components/item/ItemMusicList.vue";
import ItemMusicTop from "../components/item/ItemMusicTop.vue";
import {useItemMusicDetail} from "@/stores/item.js";


const itemState = reactive(
    {
        musicList: [],
        listDetail: [],
    }
)
onBeforeMount(() => {
    //这是歌单详情动态,介绍歌单的数据
    let id = useRoute().query.id;
    getMusicListDetail(id).then(res => {
        itemState.listDetail = res.data.playlist;
        // console.log(itemState.musicDetail);
    });
    //这是歌单的歌曲列表
    getMusicList({id,limit:100,offset:0}).then(res => {
        itemState.musicList = res.data.songs;
        useItemMusicDetail().musiclist = res.data.songs;
        // console.log(itemState.musicList);
    });
    //为了防止刷新页面数据丢失,将数据存储到piania里
    useItemMusicDetail().playlist = itemState.listDetail;
    useItemMusicDetail().subscribedCount = itemState.listDetail.subscribedCount;

    // console.log('gedan');
    // console.log(useItemMusicDetail().musiclist);
    // console.log(useItemMusicDetail().playlist);

});
</script>

<template>
<div class="itemMusic">
    <div class="itemTop">
       <ItemMusicTop :musicDetail="itemState.listDetail"></ItemMusicTop>
    </div>
    <div class="itemBottom">
        <ItemMusicList
            :musicList="itemState.musicList"
            :subscribedCount="itemState.listDetail.subscribedCount">
        </ItemMusicList>
    </div>
</div>
</template>

<style scoped>
.itemMusic {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /*background: #000;*/
    .itemTop {
        width: 100%;
        height: 40%;
        /*background: #000;*/
    }
    .itemBottom {
        width: 100%;
        height: 60%;
        background: #fff;
        border-radius: 16px;
    }
}
</style>
<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount} from "vue";
// import {getAllMusicList} from "@/request/api/home.js";
import {ref,reactive } from "vue";
import ItemMusicTop from "@/components/item/itemMusicTop.vue";
onBeforeMount(() => {
    // console.log(useRoute());
    // let id = useRoute().query.id;
    // console.log(id);
    // getAllMusicList(id).then(res => {
    //     musicDetail.value = res.data.playlist;
    //     console.log(musicDetail.value);
    // });
    var viewportWidth = window.innerWidth;
    // console.log(viewportWidth);
});
const musicList = ref([]);
const musicDetail = reactive({});
</script>

<template>
<div class="itemMusic">
    <div class="itemTop">
        <itemMusic-top :musicDetail="musicDetail"></itemMusic-top>
    </div>
    <div class="itemBottom"></div>
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
    }
}
</style>
<script setup>
import {ref} from "vue";
import {useItemMusicDetail} from "@/stores/item.js";

const musicDetail = ref(); // 确保默认值是一个对象

const props = defineProps({
   musicDetail: Object
});
//检验父传子的数据
musicDetail.value = props.musicDetail;
//为了防止刷新数据消失
if(props.musicDetail==null){
    musicDetail.value = useItemMusicDetail().playlist;
}


</script>

<template>
    <div class="musicTop">
        <div class="bgContainer">
            <img v-if="musicDetail.coverImgUrl" :src="musicDetail.coverImgUrl" alt="" class="bgImg">
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
            <img v-if="musicDetail.coverImgUrl" :src="musicDetail.coverImgUrl" alt="" class="bgImg">
            <img v-else src="https://p1.music.126.net/s3jv-5uRZW0i-jcG9skZpA==/1099511" alt="">
        </div>
        <div class="text-style">
            <span class="nameText">{{musicDetail.name}}</span>

            <div class="creator-content">
                <img v-if="musicDetail.creator.backgroundUrl" :src="musicDetail.creator.backgroundUrl" alt="">
                <div>
                    <span>{{musicDetail.creator.nickname}}</span>
                    <svg t="1717071567571" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2308" width="200" height="200"><path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z" p-id="2309" fill="#dddddd"></path></svg>
                </div>

            </div>
            <span class="descriptionText">{{musicDetail.description}}</span>
        </div>

    </div>
    <div class="itemBottom">
        <div>
            <svg t="1716944418541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3032" width="200" height="200"><path d="M510.9248 977.4848h-465.92v-465.92c0-256.896 209.024-465.92 465.92-465.92 256.9216 0 465.92 209.024 465.92 465.92s-208.9984 465.92-465.92 465.92z m-404.48-61.44h404.48c223.0272 0 404.48-181.4528 404.48-404.48s-181.4528-404.48-404.48-404.48-404.48 181.4528-404.48 404.48v404.48z" fill="" p-id="3033"></path><path d="M719.2064 482.7904H305.9456c-16.9728 0-30.72-13.7472-30.72-30.72s13.7472-30.72 30.72-30.72h413.2608c16.9728 0 30.72 13.7472 30.72 30.72s-13.7728 30.72-30.72 30.72zM561.792 686.5152h-253.9008c-16.9728 0-30.72-13.7472-30.72-30.72s13.7472-30.72 30.72-30.72h253.9008c16.9728 0 30.72 13.7472 30.72 30.72s-13.7728 30.72-30.72 30.72z" fill="" p-id="3034"></path></svg>
            <span>{{musicDetail.commentCount}}</span>
        </div>

        <div>
            <svg t="1716944509421" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4039" width="200" height="200"><path d="M729.421868 592.96194c-48.383964 0-90.440825 26.126031-113.861234 64.768119L394.33309 537.957185c17.308201-22.50762 28.02017-50.344618 28.02017-80.886215 0-25.245987-7.436366-48.599881-19.651572-68.744687l209.729675-123.097596c22.592554 41.771359 66.267263 70.521147 116.990504 70.521147 73.617671 0 133.512806-59.878762 133.512806-133.512806S803.039539 68.724221 729.421868 68.724221 595.910085 128.60196 595.910085 202.236004c0 10.903328 1.682315 21.366633 4.15974 31.519878L382.027833 361.727485c-24.084535-23.533996-56.92857-38.169321-93.187379-38.169321-73.617671 0-133.512806 59.878762-133.512806 133.512806s59.895135 133.512806 133.512806 133.512806c30.53034 0 58.359152-10.707876 80.878029-28.016077l232.395908 125.803217c-3.651157 12.157901-6.205329 24.77322-6.205329 38.104853 0 73.634044 59.895135 133.512806 133.512806 133.512806s133.512806-59.878762 133.512806-133.512806S803.039539 592.96194 729.421868 592.96194zM729.421868 135.479601c36.81651 0 66.756403 29.955242 66.756403 66.756403s-29.938869 66.756403-66.756403 66.756403c-36.81651 0-66.756403-29.955242-66.756403-66.756403S692.605358 135.479601 729.421868 135.479601zM288.840454 523.82635c-36.81651 0-66.756403-29.955242-66.756403-66.756403s29.938869-66.756403 66.756403-66.756403 66.756403 29.955242 66.756403 66.756403S325.657988 523.82635 288.840454 523.82635zM729.421868 793.231149c-36.81651 0-66.756403-29.955242-66.756403-66.756403 0-36.801161 29.938869-66.756403 66.756403-66.756403 36.81651 0 66.756403 29.955242 66.756403 66.756403C796.178271 763.274884 766.239402 793.231149 729.421868 793.231149z" fill="" p-id="4040"></path></svg>
            <span>{{musicDetail.shareCount}}</span>
        </div>

        <div>
            <svg t="1716944536220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5076" width="200" height="200"><path d="M512 741.877551c-11.493878 0-20.897959-9.404082-20.897959-20.897959V303.020408c0-11.493878 9.404082-20.897959 20.897959-20.897959s20.897959 9.404082 20.897959 20.897959v417.959184c0 11.493878-9.404082 20.897959-20.897959 20.897959z" fill="" p-id="5077"></path><path d="M512 741.877551c-5.22449 0-10.44898-2.089796-14.628571-6.269388-8.359184-8.359184-8.359184-21.420408 0-29.779592l169.273469-169.273469c8.359184-8.359184 21.420408-8.359184 29.779592 0 8.359184 8.359184 8.359184 21.420408 0 29.779592l-169.27347 169.273469c-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" fill="" p-id="5078"></path><path d="M512 741.877551c-5.22449 0-10.44898-2.089796-14.628571-6.269388l-169.27347-169.273469c-8.359184-8.359184-8.359184-21.420408 0-29.779592 8.359184-8.359184 21.420408-8.359184 29.779592 0l169.273469 169.273469c8.359184 8.359184 8.359184 21.420408 0 29.779592-4.702041 4.179592-9.926531 6.269388-15.15102 6.269388z" fill="" p-id="5079"></path><path d="M512 929.959184c-230.4 0-417.959184-187.559184-417.959184-417.959184s187.559184-417.959184 417.959184-417.959184 417.959184 187.559184 417.959184 417.959184-187.559184 417.959184-417.959184 417.959184z m0-794.122449c-207.412245 0-376.163265 168.75102-376.163265 376.163265s168.75102 376.163265 376.163265 376.163265 376.163265-168.75102 376.163265-376.163265-168.75102-376.163265-376.163265-376.163265z" fill="" p-id="5080"></path></svg>
            <span>下载</span>
        </div>

        <div>
            <svg t="1716944558649" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6073" width="200" height="200"><path d="M805.888 301.568c-6.656 0-13.312 2.56-17.92 7.68l-373.76 373.76c-10.24 10.24-10.24 26.112 0 36.352 5.12 5.12 11.776 7.68 17.92 7.68s13.312-2.56 17.92-7.68l373.76-373.76c10.24-10.24 10.24-26.112 0-36.352-4.608-5.12-11.264-7.68-17.92-7.68z" fill="" p-id="6074"></path><path d="M215.552 458.24c-6.656 0-13.312 2.56-17.92 7.68-10.24 10.24-10.24 26.112 0 36.352L414.72 719.36c5.12 5.12 11.776 7.68 17.92 7.68s13.312-2.56 17.92-7.68c10.24-10.24 10.24-26.112 0-36.352L233.472 465.92c-5.12-5.12-11.264-7.68-17.92-7.68z" fill="" p-id="6075"></path><path d="M512 51.2c253.952 0 460.8 206.848 460.8 460.8s-206.848 460.8-460.8 460.8-460.8-206.848-460.8-460.8 206.848-460.8 460.8-460.8m0-51.2C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z" fill="" p-id="6076"></path></svg>
            <span>多选</span>
        </div>
    </div>
</template>

<style scoped>
.musicTop {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem; 
    width: 100%;
    /*background: #000;*/
    height: 40%;
    box-sizing: border-box;
    position: relative;
    /*overflow: hidden;*/
    .bgImg {
        width: 100%;
        height:400px;
        position: absolute;
        z-index: -1;
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
    flex-direction: row;

    padding: 0.5rem;
    width: 100%;
    height: 60%;
    box-sizing: border-box;
    margin-top: 3rem;
    border-radius: 5px;

    .imgSmall {
        width:34%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
    .nameText{
        /*color: white;*/
        font-size: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 限制在两行 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal; /* 或者使用 pre-line, 取决于是否需要保留空白符 */
        height: 3em; /* 两行文字的最大高度，需要根据字体大小调整 */
        color: #eeeeee;
    }
    .descriptionText{
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 限制在两行 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal; /* 或者使用 pre-line, 取决于是否需要保留空白符 */
        height: 3em; /* 两行文字的最大高度，需要根据字体大小调整 */
        font-size: 10px;
        /*margin-top: 1rem;*/
        color: white;

    }
    .text-style{
         display: flex;
         flex-direction: column;
         justify-content: start;
         align-items: start;
         width: 60%;
         height: 100%;
        gap: 3px;
        .creator-content{
            display: flex;
            justify-items: center;
            align-items: center;
            img{
                height: 6rem;
                width: 6rem;
                margin-left: 2rem;
                border-radius: 100%;
            }

            div{
                display: flex;
                flex-direction: row;
                gap: 4px;
                align-items: center;
                span{
                    color: #ddd;
                    font-size: 10px;
                }
                svg{
                    height: 10px;
                    width: 20px;
                }
            }
            .message{
                display: -webkit-box;
                -webkit-line-clamp: 2; /* 限制在两行 */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal; /* 或者使用 pre-line, 取决于是否需要保留空白符 */
                height: 3em; /* 两行文字的最大高度，需要根据字体大小调整 */
                font-size: 10px;
                /*margin-top: 1rem;*/
                color: white;
            }
        }

    }
}
.itemBottom{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap:12rem;
    div{
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        gap: 0.544rem;
        :hover{
            fill: #eee;
            cursor: pointer;
            transition-duration: 0.5s;
            /*filter: blur(1px);*/
        }
        span{
            color: white;
            font-size: 12px;
            margin: 0;
        }
    }
    svg{
        font-size: 2.8rem;

    }
}
</style>

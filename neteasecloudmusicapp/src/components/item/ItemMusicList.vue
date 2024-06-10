<script setup>
import {ref} from "vue";
import {useItemMusicDetail} from "../../stores/item.js";

const props = defineProps({
    musicList: Array,
    subscribedCount:Number,
});
// console.log(props.musicList[1].ar.name);
const musicList = ref();
musicList.value = props.musicList;

// console.log(useItemMusicDetail().musiclist[0].ar[0].name);
// console.log(props.subscribedCount);
const  subscribedCount = ref();
subscribedCount.value= props.subscribedCount;

if(props.musicList){
    musicList.value = useItemMusicDetail().musiclist;
}
if(props.subscribedCount){
    subscribedCount.value = useItemMusicDetail().subscribedCount;
}
function changeSubscribedCount (subscribedCount){
    if(subscribedCount>1000000000){
        return (subscribedCount/1000000000).toFixed(1)+'亿';
    }
    else if(subscribedCount>10000) {
        return (subscribedCount / 10000).toFixed(1) + '万';
    }
    else{
        return subscribedCount;
    }
}
// console.log(musicList.value);
</script>

<template>
<div class="itemMusicList">
    <div class="listTop">
        <div class="listTopLeft">
            <svg t="1717121556829" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4154" width="200" height="200"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667zM456.704 305.92C432.704 289.152 405.333333 303.082667 405.333333 331.797333v360.533334c0 28.586667 27.541333 42.538667 51.370667 25.856l252.352-176.768c21.76-15.253333 21.632-43.541333 0-58.709334l-252.373333-176.768z m-8.597333 366.72V351.466667l229.269333 160.597333-229.269333 160.597333z" fill="#3D3D3D" p-id="4155"></path></svg>
            <span class="text-black">播放全部</span>
            <span class="text-grey">(共{{musicList.length}}首)</span>
        </div>
        <div class="listTopRight">
            <svg t="1717121595411" class="icon add-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5145" width="200" height="200"><path d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z" fill="" p-id="5146"></path></svg>
            <span>收藏({{changeSubscribedCount(subscribedCount)}})</span>
        </div>
    </div>
    <div class="playList">
        <div class="itemOfList" v-for="(item,i) in musicList" :key="i">
            <div class="contentOfItem">
                <span class="idList">{{i+1}}</span>
                <div>
                    <p>{{item.name}}</p>
                    <span>{{item.ar[0].name}}</span>
                </div>
            </div>
            <div class="svgOfItem">
                <svg v-if="item.mv !==0" t="1717634037994" class="icon play-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3166" width="200" height="200"><path d="M885.333333 938.666667H138.666667a53.393333 53.393333 0 0 1-53.333334-53.333334V138.666667a53.393333 53.393333 0 0 1 53.333334-53.333334h746.666666a53.393333 53.393333 0 0 1 53.333334 53.333334v746.666666a53.393333 53.393333 0 0 1-53.333334 53.333334zM138.666667 128a10.666667 10.666667 0 0 0-10.666667 10.666667v746.666666a10.666667 10.666667 0 0 0 10.666667 10.666667h746.666666a10.666667 10.666667 0 0 0 10.666667-10.666667V138.666667a10.666667 10.666667 0 0 0-10.666667-10.666667z m298.666666 597.286667a53.373333 53.373333 0 0 1-53.333333-53.333334V352.066667A53.333333 53.333333 0 0 1 467.373333 308L702 467.933333a53.333333 53.333333 0 0 1 0 88.133334L467.373333 716a53.286667 53.286667 0 0 1-30.04 9.286667z m0.08-383.933334a11.093333 11.093333 0 0 0-5.08 1.28 10.446667 10.446667 0 0 0-5.666666 9.433334v319.866666a10.666667 10.666667 0 0 0 16.666666 8.82l234.666667-159.94a10.666667 10.666667 0 0 0 0-17.626666l-234.666667-159.933334a10.313333 10.313333 0 0 0-5.906666-1.92z" fill="#e6e6e6" p-id="3167"></path></svg>
                <svg  t="1716793791387" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7104" width="200" height="200"><path d="M62.5 255.817c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.345-31.912-31.962z m0 255.695c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.346-31.912-31.962z m0 255.694c0-17.652 14.296-31.962 31.911-31.962h829.11c17.624 0 31.911 14.346 31.911 31.962 0 17.652-14.296 31.962-31.911 31.962H94.41c-17.624 0-31.912-14.345-31.912-31.962z" fill="#dddddd" p-id="7105"></path></svg>
            </div>

        </div>
    </div>
</div>
</template>

<style scoped>
.itemMusicList {
    width: 100%;
    height: 100%;
    background: white;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #eee;
    .playList{
        width: 100%;
        .svgOfItem{
            display: flex;
            flex-direction: row;
            justify-content:end;
            align-items: center;
            /*margin-right: 16px;*/
            width: 20%;

            .play-icon{
                width: 32px;
                height: 32px;
            }
            svg{
                width: 28px;
                height: 28px;
                margin-left: 10px;

            }
        }
        .itemOfList{
            display: flex;
            flex-direction:row;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            width:100%;
            :hover{
                cursor: pointer;
                .play-icon{
                    visibility: visible;
                }
            }
            .contentOfItem{
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .idList{
                    display: inline-block;
                    width: 2rem;
                    text-align: center;
                }
                /*div{*/
                /*    display: flex;*/
                /*    flex-direction: column;*/
                /*    margin-left: 20px;*/
                /*    justify-content: start;*/
                /*    p {*/
                /*        font-size: 13px;*/
                /*        font-weight: 500;*/
                /*        position: relative; !* 为绝对定位伪元素做准备 *!*/
                /*        overflow: hidden;*/
                /*        text-overflow: ellipsis;*/
                /*        white-space: nowrap;*/
                /*        width: 50%;*/
                /*    }*/
                /*    span {*/
                /*        font-size: 10px;*/
                /*        color: #999;*/
                /*        display: inline-block; !* 使元素可以设置宽度 *!*/
                /*        overflow: hidden; !* 超出部分隐藏 *!*/
                /*        text-overflow: ellipsis; !* 超出部分显示省略号 *!*/
                /*        white-space: nowrap; !* 不换行 *!*/
                /*        position: relative;*/
                /*        width: 75%;*/

                /*    }*/
                /*}*/
                div {
                    display: flex;
                    flex-direction: column;
                    margin-left: 10px;
                    justify-content: start;
                    /* 限制 div 的宽度不超过其父元素的宽度 */
                    max-width: 100%;
                    /* 其他样式保持不变 */
                }

                p, span {
                    font-size: 13px;
                    font-weight: 500;
                    position: relative;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap; /* 对于p元素，如果需要多行省略，可以改为 normal */
                    word-break: break-word; /* 允许在单词内断行 */
                    /* 使用视口宽度单位 */
                    width: 40vw; /* 对于p元素，如果50%太宽，可以调整为视口宽度的百分比 */
                    max-width: 65%; /* 限制最大宽度 */
                }

                span {
                    font-size: 10px;
                    color: #999;
                    display: inline-block;
                    width: 65vw; /* 调整为视口宽度的百分比 */
                    max-width: 65%; /* 限制最大宽度 */
                    /* 其他样式保持不变 */
                }
            }
        }
    }

    .listTop {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 2rem;
        margin-top: 0.2rem;
        justify-content: space-between;
        .listTopLeft{
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;


        }

        .text-black {
            color: #000;
            font-size: 14px;
            font-weight: bold;
            white-space: nowrap;
            margin-left: 1rem;
        }
        .text-grey {
            color: #999;
            font-size: 10px;
            white-space: nowrap;
        }
        svg{
            Height: 4rem;
            width: 4rem;

        }
        .listTopRight {
            display: flex;
            align-items: center;
            justify-items: center;
            border: 2px solid red;
            background: red;
            color: white;
            fill: white;
            border-radius: 16px;
            padding:3px;
            .add-icon{
                margin-right: 2px;
                height: 3.4rem;
            }
            span{
                margin-right: 3px;
            }
        }
        }

}

</style>
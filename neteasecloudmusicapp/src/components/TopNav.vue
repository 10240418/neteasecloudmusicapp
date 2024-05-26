<script setup>

</script>

<template>
<div class="topNav">
    <div><i-material-symbols-light-menu class="icon-list"></i-material-symbols-light-menu></div>
    <div class="topContent">
        <span>我的</span>
        <span class="active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <div> <i-lucide-search class="icon-search"></i-lucide-search></div>
</div>
</template>

<style scoped>
.icon-list{
    font-size: 4rem;
}
.icon-search{
    font-size: 3.2rem;
}
.topNav{
    width: 100%;
    padding:1rem 0;
    height: 5rem;
    display: flex;
    margin-top: 1rem;
    justify-content: space-around;
    align-items: center;
    .topContent{
        width: 70%;
        display: flex;
        justify-content: space-around;
        height: 100%;
        font-size: 3rem;
        align-items: center;
        margin-top: -1rem;
        .active{
            font-weight: 700;
        }

    }
}
</style>
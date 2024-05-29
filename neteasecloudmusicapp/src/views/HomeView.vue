<script setup>
import TopNav from "@/components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwpierTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
</script>

<template>
    <div class="home">
        <TopNav />
        <router-view />
        <SwiperTop />
        <IconList />
        <MusicList />
    </div>

</template>

<style>
</style>

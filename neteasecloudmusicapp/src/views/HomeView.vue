<script setup>
import TopNav from "@/components/TopNav.vue";
import SwiperTop from "@/components/SwpierTop.vue";
import IconList from "@/components/IconList.vue";
import MusicList from "@/components/MusicList.vue";
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

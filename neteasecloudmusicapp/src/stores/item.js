import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useItemMusicDetail =defineStore('itemMusicId',()=>{
    const musiclist =ref([])
    const playlist =ref([])
    const subscribedCount = ref();
 return{musiclist,playlist,subscribedCount}
})

//播放列表
export const usePlayList = defineStore('playList',()=>{
    //播放列表
    const playList = ref([

        
    ])

    return {playList}
}
)
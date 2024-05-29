import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useItemMusicDetail =defineStore('itemMusicId',()=>{
 const idList = ref([]);
 const idState = ref();
 const idListNew = computed(()=>{idList.value})
 const playlist =ref([])
 return{idList,idListNew,idState,playlist}
})
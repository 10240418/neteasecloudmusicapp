import service from "..";
 export  function getBanner(){
    return service({
        method:"GET",
        url:"/banner?type=1",

    })
}
export function getRemMusicList(){
    return service({
        method:"GET",
        url:"/personalized?limit=6",
    })
}
//歌单详情动态
export function getMusicListDetail(id){
     return service({
         method:"GET",
            url:"/playlist/detail?id="+id,
     })
}
//获取歌曲全部歌曲
//获取歌单的所有歌曲
export function getMusicList(data){
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data.id}&limit=${data.limit}&offset=${data.offset}`
    })
}
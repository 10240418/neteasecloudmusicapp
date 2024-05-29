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

export function getMusicListDetali(id){
     return service({
         method:"GET",
            url:"/playlist/detail?id="+id,
     })
}
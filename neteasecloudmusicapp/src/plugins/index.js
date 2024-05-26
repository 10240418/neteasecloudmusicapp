import { Swipe, SwipeItem } from 'vant';
let plugins=[Swipe,SwipeItem]
//统一管理vant组件
export default function getVant(app){
    plugins.forEach(plugin=>{
        app.use(plugin)
    })
}



function remSize(){
    //获取设备的宽度
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if(deviceWidth >= 750 ){
        deviceWidth = 750;
    }
    if(deviceWidth <= 320 ){
        deviceWidth = 320;
    }
    // console.log(deviceWidth);
    document.documentElement.style.fontSize = (deviceWidth / 75) + 'px';
    //设置字体大小
    document.documentElement.style.fontSize = (deviceWidth / 75) + 'px';
    // console.log(document.documentElement.style.fontSize);
}
remSize();
// 当窗口出现变化时，重新计算rem的大小
window.onresize = function(){
    remSize();
}
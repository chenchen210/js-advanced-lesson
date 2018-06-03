/*window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },false);//默认值为false，为冒泡方式
    div2.addEventListener("click",function(e){
        console.log("div2 click");
    },false);
    document.addEventListener("click",function(e){
        console.log("document click");
    },false);
    document.body.addEventListener("click",function(e){
        console.log("body click");
    },false);
}*/
/*
点击div2，结果为
div2 click
div1 click
body click
document click

false为冒泡方式，冒泡嘛，从小向大，具体到模糊
*/

window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    document.addEventListener("myEvent",function(){console.log("xx");},false);
    div1.addEventListener("myEvent",function(){console.log("yy");},false);
    div2.addEventListener("myEvent",function(){console.log("zz");},false);

    //console.log("dispatchEvent" in div1);
    // console.log("dispatchEvent" in div2);true

    var myEvent=new Event("myEvent");
    console.log(myEvent.cancelBubble);

    //事件对象从顶层（不精确）节点流动到目标（精确）节点
    // div1.dispatchEvent(myEvent);
    div2.dispatchEvent(myEvent);
}
/*
false
zz
*/
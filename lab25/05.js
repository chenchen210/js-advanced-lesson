//再谈事件响应与事件流
/*window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var div3=document.getElementById("div3");
    div1.addEventListener("click",function(e){
        console.log("div1 click");
    },false);
    //第三个参数选填，false为冒泡方式【默认方式】，true为捕获方式

    div2.addEventListener("click",function(e){
        console.log("div2 click");
    },false);
    div3.addEventListener("click",function(e){
        console.log("div3 click");
    },false);
    
    document.addEventListener("click",function(e){
        console.log("document click");
    },false);
    document.body.addEventListener("click",function(e){
        console.log("body click");
    },false);
}*/
/*
div3 click
div2 click
div1 click
body click
document click

如果都改为true
document click
body click
div1 click
div2 click
div3 click
*/

window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    document.addEventListener("myEvent",function(){console.log("xx")},false);
    div1.addEventListener("myEvent",function(){console.log("yy")},false);
    div2.addEventListener("myEvent",function(){console.log("zz")},false);
    
    // console.log("dispatchEvent" in div1);
    // console.log("dispatchEvent" in div2);

    var myEvent = new Event("myEvent");
    //console.log(myEvent.cancelBubble);

    //事件对象从顶层（不精确）节点流动到目标（精确）节点
    // div1.dispatchEvent(myEvent);
    div2.dispatchEvent(myEvent);//若3个都捕获(true) xx,yy,zz 若3个都是冒泡(false)则zz

}
//zz
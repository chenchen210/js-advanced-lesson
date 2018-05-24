window.onload=function(){
    console.log("window onload");
    var div1=document.getElementById("div1");
    // div1.onclick=function(){
    //     console.log("div1 onclick");
    // };
    div1.ondrag=function(){
        console.log("div1 ondrag");
    }
}

// window.onload=function(e){
//     console.log(e.target);
//     console.log(this);

// }

function div2click(e){
    console.log(e.target);
}

//DOM 0级（将事件抽离，便于其他使用，修改）
// window.onload=function(e){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     function clickHandler(e){
//         console.log(e.target);
//     }
//     div1.onclick=clickHandler;
//     div2.onclick=clickHandler;
//     div2.onclick=null;//----------------取消事件
//     div1.onclick=function(){
//         console.log("xx");
//     }//--------------------------0级只会保留一个，有覆盖
// }

//DOM 2级
window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    function clickHandler(e){
        console.log(e.target);
    }
    div1.addEventListener("click",clickHandler);//(有第三个参数，是以冒泡还是捕获形式，默认为冒泡)
    div1.removeEventListener("click",clickHandler);//取消事件监听
}
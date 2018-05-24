//------------- 测试2 DOM0级事件处理------------
/*window.onload=function(e){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     var eventHandler=function(e){
//         console.log(e.clientX,e.clientY);
//     }
//     div1.onclick=eventHandler;//---------这是给他这个功能绑定事件
//     div1.onclick=function(){  //---------即将覆盖eventHandler功能，输出xx
//         console.log("xx");
//     }
//     div2.onclick=eventHandler;//--------事件绑定功能
//     div2.onclick=null;        //--------取消事件响应
// }

// 测试3 DOM2级事件处理
// window.onload=function(e){
//     var div1=document.getElementById("div1");
//     var div2=document.getElementById("div2");
//     var eventHandler=function(e){
//         console.log(e.clientX,e.clientY);
//     }
//     div1.addEventListener("click",eventHandler);
//     // div1.addEventListener("click",eventHandler,false);//第三个参数可选，默认为冒泡形式
//     div1.addEventListener("click",function(){
//         console.log("xx");
//     });//---------没有覆盖，俩个语句均输出

//     div2.addEventListener("click",eventHandler);
//     // div2.addEventListener("click",eventHandler,false);
//     // div2.removeEventListener("click",eventHandler);//取消事件响应处理

//     //自定义事件、事件分发、事件监听
//     div2.addEventListener("MyEvent",function(){console.log("处理自定义事件")});
//     div2.dispatchEvent(new Event("MyEvent"));

    //addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在哪个原型上的？
    console.log(div2.__proto__);//HTMLDivElement
    console.log(div2.__proto__.__proto__);//HTMLElement
    console.log(div2.__proto__.__proto__.__proto__);//Element
    console.log(div2.__proto__.__proto__.__proto__.__proto__);//Node
    console.log(div2.__proto__.__proto__.__proto__.__proto__.__proto__);//EventTarget
    // addEventListener、removeEventListener、dispatchEvent这3个方法都是定义在EventTarget上
    // EventTarget是一个由可以接受事件的对象实现的接口，并且可以为他们创建侦听器
}
*/

//自定义事件（创建、分发、捕获的综合案例）
window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var eventHandler=function(e){
        // console.log(e.target);
        // console.log(this);
        var MyEvent=new Event("MyEvent");
        div2.dispatchEvent(MyEvent);
        // div1.dispatchEvent(MyEvent);
    }
    div1.onclick=eventHandler;

    //下述部分代码，参见事件流部分
    div2.addEventListener("MyEvent",function(e){
        console.log("div2 listener",e.type);
    },false);

    document.addEventListener("MyEvent",function(e){
        console.log("document handler");
    },true);
    //第三个参数默认是false使用的是冒泡方式，若改为true的话则为捕获方式
}

/*
DOM0级事件响应的定义范围
document.body.__ptoto__.hasOwnProperty("onclick");//false
document.body.__ptoto__.__proto__.hasOwnProperty("onclick");//true

DOM2级事件的定义范围
document.body.__proto__.hasOwnProperty("addEventListener");//false
"addEventListener" in document;//true
document.body.__proto__.__proto__.__protp__.__proto__.__proto__.hanOwnProperty("addEventListener");//true
*/

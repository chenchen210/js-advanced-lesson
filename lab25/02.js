window.onload=function(e){
    console.log("window onload");
    console.log("e:",e);//---------e:Event
    console.log(e.target);//-------#document
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var eventHandler=function(e){
        //测试0
        // console.log(e.type);//------click
        // console.log(e.target);//-----<div  xxx></div>

        //测试1
        // console.log(e.clientX,e.clientY);//-----输出点击点的横纵坐标
        // console.log(this,"------",e.target.id);//this为你点击的容器

        //测试2
        // console.log(e);
        // console.log(e.__proto__);
        // console.log(e.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__);
        // console.log(e.__proto__.__proto__.__proto__.__proto__);

        //测试3
        for(var k in e){
            console.log(k,e[k]);
        }
        for(var k in e.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__){
            console.log(k);
        }
        for(var k in e.__proto__.__proto__.__proto__){
            console.log(k);
        }
    }
    div1.onclick=eventHandler;
    div2.onclick=eventHandler;

    //自定义事件监听、事件分发
    document.addEventListener("xx",function(){console.log("11")});
    document.dispatchEvent(new Event("xx"));
}
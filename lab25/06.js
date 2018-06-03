window.onload=function(e){
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var div3=document.getElementById("div3");

    /*
    bubbles 事件属性返回一个布尔值，如果事件是起泡类型，则返回 true，否则返回 fasle
    cancelable 事件返回一个布尔值。如果用 preventDefault() 方法
        可以取消与事件关联的默认动作，则为 true，否则为 fasle
    cancelBubble 设置或获取当前事件是否要在事件句柄中向上冒泡
    */
    div1.addEventListener("click",function(e){
        console.log("div1 click---red");
        console.log("target:",e.target);
        console.log("this:",this);
        console.log(e.bubbles,e.cancelable,e.cancelBubble);
        // e.stopPropagation();
    },false);
    //不论是true还是false，结果都是true true false，原因为下：
    //这个属性显示的是点击事件支持冒泡，但是它上面的节点不会在冒泡阶段响应而已

    div2.addEventListener("click",function(e){
        console.log("div2 click--yellow");
        this.style.backgroundColor='black';
        //和this.hidden = true;e.target.hidden = true;//有什么区别？为什么？
        //this是div3和div2一起消失，e是只消失div3（这个更具体）
        // this.hidden = true;
        
        //e.stopPropagation(); 
    },false);
    div3.addEventListener("click",function(e){
        console.log("div3 click--blue");
        // e.stopPropagation();
    },false);

    document.addEventListener("click",function(e){
        console.log("document click");
    },false);
    document.body.addEventListener("click",function(e){
        console.log("body click");
    },false);
    //这块的document要是改成true，则先输出document在输出body，捕获嘛，先抓大的

    //组织默认事件行为
    document.getElementById("aId").addEventListener("click",function(e){
        e.preventDefault();//阻止默认事件，阻止了链接的跳转
        console.log("a click")
    })
}
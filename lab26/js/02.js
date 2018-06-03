//----------------Part 1 函数回调-----------------
//=================================1 同步执行的回调
var arr1=[1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1=arr1.map(function(a){
    return a*a;
});
console.log("newArray1:",newArray1);
/*
arr1:[1,3,5,7,9]
newArray1:[1,9,25,49,81]
*/

var arr2=[1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2=arr2.filter(function(a){
    //产生新数组，元素是返回true的
    return(a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);
/*
arr2:[1,3,5,7,9]
newArray2:[3,5,7]
*/

//=================================2 异步执行的回调（通过定时模拟器）
var LTimeOperation=function(taskID){
    var id=taskID;
    this.go=function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay=parseInt((Math.random()*10000000)%5000);//随机时间
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2,i am callback!\n');
}
for(var i=0;i<5;i++){
    var task=new LTimeOperation(i);
    task.go(f2);
}
/*
Start LTimeOperation #0
Start LTimeOperation #1
Start LTimeOperation #2
Start LTimeOperation #3
Start LTimeOperation #4

task #0 cost 577 ms.
this is f2,i am callback!

task #2 cost 1873 ms.
this is f2,i am callback!

task #3 cost 1934 ms.
this is f2,i am callback!

task #4 cost 3175 ms.
this is f2,i am  
*/


//----------------Part 1 事件触发与事件监听-----------------
//=================================1 
document.onclick=function(){
    console.log("document 被点击了！");
};

//=================================2
for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","heigth:20px");
    document.body.appendChild(btn);
}
for(var i=0;i<5;i++){
    //(function (i) {
        document.getElementById("btnId" + i).addEventListener("click", function(){
            document.bgColor = "#"+i*2+i*2+i*2+i*2+"00";
            console.log("#"+i*2+i*2+i*2+i*2+"00");
        });
    //})(i);
}

//=================================3-Node.js下调试
var http=require('http');
var url='http://www.baidu.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});
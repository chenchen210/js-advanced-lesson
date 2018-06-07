//使用let就可以避免var所带来的问题
let userId=123;
document.onclick=function(){
    console.log("userId=",userId);
    // alert("userId:"+userId);
};
//~~~~~~~
var a=2,b=3;
if(a<b){
    let userId=456;
}
//userId=123

//let的定义不像var直接作为全局对象的属性
var x=23;
let y=34;
console.log(window.x,window.y);
//23 undefined
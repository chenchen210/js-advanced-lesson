//----例一，通过var定义变量，ES5中没有块作用域，{}外可以访问{}内变量
{
    var a=23;
}
console.log(a);
//23-------------因为没有块作用域，a正常输出

//------------例二----------
for(var i=0;i<5;i++){
    //xxxxxx
}
console.log("i:",i);
//i:5

//例三 通过var声明变量，由于没有块作用域，容易造成变量污染
var userId=123;
document.onclick=function(){
    console.log("userId=",userId);
    // alert("userId="+userId);
};
//~~~~~~~~
var a=2,b=3;
if(a<b){
    var userId=456;
}
//userId=456,变量覆盖

// 通过IIFE来解决上述问题
/*
(function(){
    var a=2,b=3;
    if(a<b){
        var userId=456;
    }
}());
*/
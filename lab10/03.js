//ES5中无块作用域
{
    var a=4;
}
console.log(a);//4

/*变量污染、变量共享问题，尤其是异步执行的情况下
如果是俩个单独的文件更容易造成变量污染
*/
var userId=123;
document.onclick=function(){
    console.log("userId=",userId);
};
//xxxxx若干行代码
var a=2,b=3;
if(a<b){
    var userId=234;
}
//userId=234

var userId=123;
document.onclick=function(){
    console.log("userId=",userId);
};
( function(){
        var a=2,b=3;
        if(a<b){
            var userId=234;
        }
}());
//userId=123
    
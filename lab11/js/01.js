//立即执行表达式   常见形式
(function max(x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
//the max is 3

(function (x,y){
    console.log("the max is",x>y?x:y);
})(2,3);
//the max is 3

(function(){
    console.log('111');
})();//-----------------------此处没有分号会报错
(function(){
    console.log('222');
})()
//111
//222

// IIFE的其他形式，与运算符相结合
var i=function(){
    return 10;
}();//----------------i=10

true&&function(a,b){
    return a>b?a:b;
}(5,9);
//9

0&&function(a,b){
    return a>b?a:b;
}(5,9);
//0---------------------短路原则
 !function(x,y){
     return x==y?true:false;
 }("5",5);
 //false---------------  == 结果为true，加上！结果为False

 !function(){
     return 2;
 }();
 //false
 !function(){
    return 0;
}();
//true-------------------除去！就会报错，加上！结果为true
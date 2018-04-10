// 文件内的变量污染问题，尤其是在异步执行的条件下
// var userid=123;
// document.onclick=function(){
//     console.log("userid=",userid);
// };
// //``````````
// (function(){
//     var a=2,b=3;
//     if(a<b){
//         var userid=234;
//     }
// }());
// //userid=123

//(function(){-------------立即执行表达式开始
    var x=10;
    document.onclick=function(){
        //console.log("x=",x);
        alert("x="+x);
    };
//})();------------------立即执行表达式结束
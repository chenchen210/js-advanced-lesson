//let和const的暂时性死区特征
/*
只要块级作用域内存在let，他所声明的变量就会绑定在这个区域，不再受外部影响
let对这个块从一开始就形成了封闭的作用域，凡是在声明之前就使用该变量，就会报错
*/

typeof b;//报错，使用前需要定义
let b;//定义了一个变量，放在typeof前面，输出‘undefined’

var tmp=123;
if(true){
    tmp="abc";
    let tmp;
}//报错

var tmp=123;
if(true){
    let tmp;
    tmp="abc";
}//"abc"

//let、const不能重复声明
let abc;
let abc;//报错

function foo1(){
    let x;
    var x;
}
foo1();//报错，重复定义

function foo2(){
    let x;
    let x;
}
foo2();//报错，重复定义

var temp=new Date();
function f(){
    console.log(temp);
    if(false){
        let temp="Hi";
    }
}
f();
//Thu Jun 07 2018 08:19:01 GMT+0800 (中国标准时间)

var temp=new Date();
function f(){
    console.log(temp);
    // if(false){
        let temp="Hi";
    // }
}
f();
//报错------------这里出现了暂存性死区，f（）{这里面被锁死（因为存在let），temp只能在内部寻找}
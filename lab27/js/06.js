//ES6中 let和const不进行变量提升
//varshengmingbianliang
console.log(a);
var a=1;
console.log(a);
/*
undefined
1
*/
//预解析，上述代码等效于
var a;
console.log(a);
a=1;
console.log(a);

//-----------------ES5
var temp=new Date();
function f(){
    console.log(temp);
    if(false){
        var temp="Hi";
    }
}
f();
/*
undefined
等效于
var temp=new Date();
function f(){
    var temp;
    console.log(temp);
    if(false){
        temp="Hi";
    }
}
f();
*/

//let和const不存在变量提升

// console.log(a);//报错
let a=2;
console.log(a);//2
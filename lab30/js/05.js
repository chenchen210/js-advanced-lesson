// ---------------------------Part 1-------------------------------
// ES5中 实参个数大于形参个数，可以通过arguments来获得所有的参数
function test(){
    console.log(arguments);
}
test("a","b","c");
/************************** 
Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]
0:"a"
1:"b"
2:"c"
callee:ƒ test()
length:3
Symbol(Symbol.iterator):ƒ values()
__proto__:Object
***********************************************/


// ...Rest相当于合并若干个参数为一个数组，主要用于函数定义时，代替arguments，解决arguments弊端
function f(...y){
    console.log(y);
}
f("a","b","c");
//  ["a", "b", "c"]

function add(...values){
    let sum=0;
    for(var val of values){
        sum+=val;
    }
    return sum;
}
add(2,5,3);//0+2+5+3=10

// 比arguments使用更灵活，比如只想看从第二个开始之后的参数
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");
//a,["b","c","d"]
f("a");//a,[]
f();//undefined,[]

function f(x,...y,z){
    console.log(y);
}
f("a","b","c","d");//--报错，...y必须为最后一个
f("a");//--------------报错，...y必须为最后一个
f();//-----------------报错，...y必须为最后一个


// ---------------------------Part 2-------------------------------
// ...Spread 扩展操作符，相当于解数组为分散的参数，主要用于函数调用时，...Reat逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//a,["b","c"]-----------等价于f("a","b","c")
f("a");//a,[]
f();//undefined,[]

// ---------------------------Part 3-------------------------------
// call 和 apply的转换 俩者之间的区别 通过...Rest和...Spread转换
function abc(...v){
    console.log(v);
}
o1={};
abc.call(o1,...[1,2,3]);
// 等效于abc.apply(o1,[1,2,3]);

// 剩余操作符...Rest(...y)-----------------------将元素合并为一个数组
// ...Spread(...[x,x,x])---------------------将数组拆分为一个个的元素

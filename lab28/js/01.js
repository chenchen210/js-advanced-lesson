//不用解构赋值方法定义变量
var a=1;var b=2;var c=3;
console.log(a,b,c);
//1 2 3

//用解构定义方式定义变量
//--------------Part 1 数组的解构方式-------------
var [a,b,c]=[1,2,3];
console.log(a,b,c);
//1 2 3

//let也支持解构
let [foo,[[bar],baz]]=[1,[[2],3]];
console.log(foo,bar,baz);
//1 2 3

let [ , ,xx]=["foo","bar","baz"];
console.log(xx);
//baz

let[x, ,y]=[1,2,3];
console.log(x,y);
//1,3

let[head, ...tail]=[1,2,3,4];//...表示扩充，前面匹配完之后剩下的都塞到里面
console.log(head,tail);
//1  [2, 3, 4]

let [d,e,...f]=['a'];
console.log(d,e,f);
//"a" undefined []

//如果解构不成功，变量的值就等于undefined
var [foo2]=[];
var [bar2,fee2]=[1];
console.log(foo2,fee2);
//undefined undefined

//不完全解构情况
let [x2,y2]=[1,2,3];
console.log(x2,y2);
//1 2

let[a2,[b2],d2]=[1,[2,3],4];
console.log(a2,b2,d2);
//1 2 4

//如果等号右边不是数组（严格地说，不是可遍历的结构），那将报错
let [foo]=1;
let [foo]=false;
let [foo]=NaN;
let [foo]=undefined;
let [foo]=null;
let [foo]={};
//以上均报错

//解构赋值中的默认值
var [foo3=true]=[];//foo3---true
[x3,y3='b']=['a'];//x3--'a' y3--'b'
[x4,y4='b']=['a',undefined];//x4--'a' y4--'b'

/*
ES6内部使用严格的 === ，判断一个位置是否有值
如果数组成员不严格等于undefined，默认值不会生效
*/
var [x5=1]=[undefined];//x5--1
var [x6=1]=[null];//x6--null

function f2(){
    return 2;
}
let [x7=f2()]=[1];
console.log(x7);//1

//默认值可以解构赋值的其他变量，但该变量必须已经声明
let[m1=1,n1=m1]=[];//m1=1,n1=1
let[m2=1,n2=m2]=[2];//m2=2,n2=2
let[m3=1,n3=m3]=[1,2];//m3=1,n3=2
// let[m4=n4,n4=1]=[]; Uncaught ReferenceError: n4 is not defined
console.log(m1,n1,m2,n2,m3,n3);

let a=[];
let b=[2,3,4];
[a[0],a[1],a[2]]=b;
console.log(a==b);//false----俩个指向不同的空间

let [x8,y8,z8]=new Set(["a","b","c"]);

function*fibs(){
    var a8=0;
    var b8=1;
    while(true){
        yield a8;
        [a8,b8]=[b8,a8+b8];
    }
}
var [first,second,third,fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp]=fibs();
console.log(first,second,third,fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);
//0 1 1 2 3 5 8 13 21 34 55 89

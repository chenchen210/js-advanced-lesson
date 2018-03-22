//内容回顾
var a=[1,2,3];
var b=a;
console.log(a,b);//[1,2,3],[1,2,3]
b.pop();
console.log(a,b);//[1,2],[1,2]
b=[4,5,6];
console.log(a,b);//[1,2],[4,5,6]

function foo(x){
    x.push(4);
    x=[5,6,7];
    x.push(8);
    //console.log(x);[5,6,7,8]
}
var a=[1,2,3];
foo(a);
console.log(a);//[1,2,3,4]

function foo(x){
    x.push(4);
    //console.log(x);[1,2,3,4]
    x.length=0;
    x.push(5,6,7,8);
   // console.log(x);[5,6,7,8]
}
var a=[1,2,3];
foo(a);
console.log(a);//[5,6,7,8]

//=================================字面量
var obj={x:1,y:2};
var arr=[1,2,3,4,5];
//=================================表达式与语句、表达式语句
var o={x:1,y:3};
a>b;
//-------------------存在二义性的语句，一定要避免（了解就行，不用太纠结怎么个二义法）
var max=function(x,y){
    return x>y?x:y;
}
{
    foo:max(2,3)
};//------------------不知道是按语句块走还是对象走

var max=function(x,y){
    return x>y?x:y;
};
var x={
    foo:max(2,3)
}//------------------按对象走

var max=function(x,y){
    return x>y?x:y;
}
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}//------------------按语句块走

//=======================不同类型性表达式
23;//----原始表达式
obj={x:1};//-----对象的初始表达式
arr=[1,2];//-----数组的初始表达式
var foo=function(){
    console.log("foo");//-----function(){}为函数定义表达式
};
obj.x;//----obj.x属性访问形式
foo();//----foo()为函数调用表达式
2+3;//----算术运算表达式
2>3;//----关系运算表达式
1&&7;//----逻辑运算表达式
//============================关于语句
2>3;//----表达式语句
//-----------条件语句
var a=2,b=3;
if(a>b){
    console.log("a>b");
}else{
    console.log("a<b");
}

function foo(){
    var a=b=3;
}
foo();
console.log("b:",b);//b:3
console.log("a:",a);//报错
/*var a=b=3等价于 var a=3，b=3，a为局部变量，b为全局变量
这里访问不到a */
//循环语句
for(var i=0;i<5;i++){
    console.log("in for",i);//in for--0,1,2,3,4
}
console.log("out for",i);//out for--5
//==========================ES5中的块
{
    var a=2;
}
console.log("大括号外依然访问到a：",a)//xxxxx:2

for(var i=0;i<5;i++){
    console.log("in for",i);//in for--0,1,2,3,4
}
console.log("out of for",i);//out of for 5

if(true){
    var a=2;
}
console.log(a);//2

if(false){
    var b=3;
}
console.log(b);//3,因为ES5没有块作用域

//====================================严格模式
"use strict"//-------全局使用

function foo(){
    "use strict"//函数内部使用
}

function sloppyFunc(){
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);//123

function sloppyFunc(){
    "use strict"
    sloppyVar=123;
}
sloppyFunc();
console.log(sloppyVar);//报错，严格模式下，sloppyVar为局部变量

//---------------检测是否在严格模式下的方法
"ude strict"
function isStrictMode(){
    return this===window?false:true;
}
console.log(isStrictMode());/*true，严格模式下this为undefined
非严格模式下，this为全局变量（window）*/

// ------------严格模式下禁止删除不可改变的属性的变量
var str="abc";
var strDescriptor=Object.getOwnPropertyDescriptor(window,"str");
console.log(strDescriptor);

function sloppyFunc(){
    str.length=7;
    //console.log(Object.getOwnPropertyDescriptor(str,"length"));
    console.log(str.length);
}
sloppyFunc();//3

function sloppyFunc(){
    "use strict"
    console.log(Object.getOwnPropertyDescriptor(str,"length"));//照常输出
    str.length=7;
    console.log(str.length);// 报错
}
sloppyFunc();// 报错
// --------------严格模式下禁止删除未定义的变量
delete foo;//true
delete window.foo;//true
'use strict';
delete foo;//报错
delete window.foo;//true

// --------------严格模式下禁止函数重名
function f(a,a,b){
    return a+b;
}
f(2,3,4);//非严格模式下正常执行----7

'use strict'
function f(a,a,b){
    return a+b;
}
f(2,3,4);//严格模式下报错

//============================switch
var i="1";
switch(i){
    case 1:
        console.log("case 1 number");
        break;
    default:
        console.log("default");
}
//default-----------switch做的是===判断，不会发生类型转换

var i="1";
switch(i){
    case 1:
        console.log("case 1 number");
        break;
    case "1":
        console.log("case 1 string");
        break;
    default:
        console.log("default");
}
//case 1 string

var j=23;
var j="23";
var j=new String("23");
var j=new Number(23);
switch(j){
    case 23:
        console.log("case 111");
        break;
    case "23":
        console.log("case 222");
        break;
    case new Number(23):
        console.log("case 333");
        break;
    default:
        console.log("case default");
}/*
case 111
case 222
case default
case default因为new为引用类型，全等判断这俩个不在同一空间，不等
 */
var i=65;
switch(i){
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log("不及格");
        break;
    default:
        console.log('default');
}
//及格，若是将条件改为switch(new Boolean(true)),输出default因为65！=new Boolean(true)

var i=1;
switch(i){
    case 1:
        console.log("case 1");
    case 2:
        console.log("case 2");
        break;
    case 3:
        console.log("case 3");
    case 4:
        console.log("case 4");
    default:
        console.log("default");
}
/*                   
case 1
case 2
 */
/*i=2
case 2
*/
/*i=3
case 3
case 4
default
*/
/*i=4
case 4
default
*/

//===========================for```````in
//遍历数组
var arr=[2,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}
/*
0,2
1,"33"
 */
//遍历对象
var obj={x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
/*
 x,10,number 
 y,20,number
 z,30,string
 */
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
obj2.z=3;
for(var i in obj2){
    console.log(i,obj2[i]);
}
/*
 y,2
 z,3 
 x,1
 */
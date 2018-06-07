const PI=3.1415926;
console.log(PI);
PI=3;//-----------------报错，给常量赋值报错

const foo;//------------报错，声明时必须赋值，一旦声明必须立即初始化
const foo=123;//--------正常

//const作用于同let
if(true){
    const MAX=5;
}
console.log(MAX);
//报错

//const除了声明常量之外，也用来声明不变的函数
const fee=function(){

};

//const指向的对象的引用不可变，但其属性或者元素（如果是数组对象的话）是可变的
const a=[];
a.push(123,234);//正常
a.length=1;//正常
a="str";//报错，因为它使a指向了一个字符串，它原本是指向一个数组的

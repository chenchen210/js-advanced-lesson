// ----------------------Part 1--------------------------
/*
为什么要使用Symbol
因为它可以确保每个属性名都是独一无二的
*/
var obj={
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x=x;
        this.y=y;
    }
}
obj.moveTo=function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);
// ES6里面引入Symbol，用它来产生一个独一无二的值

// 定义Symbol变量，注意Symbol是基本数据类型的一种，不能使用new
let s=Symbol();
typeof s;//"symbol"

// Symbol函数可以接受一个字符传作为参数，表述对Symbol实例的描述
// 主要是为了在控制台显示，或者转化为字符串时，比较容易区分
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString());
/*
Symbol(foo)
Symbol(bar)
'Symbol(foo)'
'Symbol(bar)'
*/

// ----------------------Part 2--------------------------
//Symbol函数的参数只是表示对当前Symbol值的描述，因此相同参数的Symbol函数的返回值是不相等的
// 没有参数的情况
var s1=Symbol();
var s2=Symbol();
s1 === s2;//false
// 有参数的情况
var s1=Symbol("foo");
var s2=Symbol("foo");
s1 === s2;//false

// 如果Symbol的参数是一个对象，就会调用该对象的toString方法，将其转化为字符串，然后才生成一个Symbol值
const obj={
    toString(){
        return 'abc';
    }
};
const sym=Symbol(obj);
sym;//Symbol(abc)

// Symbol值不能与其他类型的值进行运算，会报错
var sym=Symbol('My symbol');
// "your symbol is"+sym;报错
// 但是Symbol值可以显示转为字符串
var sym=Symbol('My symbol');
String(sym);//"Symbol(My symbol)"
sym.toString();//"Symbol(My symbol)"
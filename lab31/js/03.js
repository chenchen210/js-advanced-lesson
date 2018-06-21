// --------------------Part 1--------------------------
// 遍历实例一
var obj={};
var a=Symbol('a');
var b=Symbol('b');
obj[a]='Hello';
obj[b]='World';
var objectSymbols=Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);
// [Symbol(a), Symbol(b)]

// 遍历实例二
var obj={};
var foo=Symbol('foo');
Object.defineProperty(obj,foo,{value:"foo bar"});
for(var i in obj){
    console.log(i);//无输出
}
Object.getOwnPropertyNames(obj);//[]
Object.getOwnPropertySymbols(obj);//[Symbol(foo)]

// -----------------------Part 2--------------------------
var s1=Symbol.for('foo');
var s2=Symbol.for('foo');
console.log(s1===s2);//true
/*
Symbol.for()与Symbol（）这俩种写法，都会产生新的Symbol。
它们的区别是，前者会被登记在全局环境中供搜索，后者不会
Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在
如果不存在才会新建一个值。比如，如果你调用Symbol.for("cat")30次，每次都会返回同一个Symbol值，
但是调用Symbol("cat")30次，会返回30个不同的Symbol值
*/

console.log(Symbol.for("bar") === Symbol.for("bar"));//true
console.log(Symbol("bar") === Symbol("bar"));//false
console.log(Symbol.for("bar") === Symbol("bar"));//false

// Symbol.keyFor方法返回一个已经登记的Symbol类型值得key
var s1=Symbol.for("foo");
console.log(Symbol.keyFor(s1));//"foo"
var s2=Symbol("foo");
console.log(Symbol.keyFor(s2));//undefined

var s3=Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);//false
console.log(s2 === s3);//false
var s4=Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);//true
console.log(s2 === s4);//false

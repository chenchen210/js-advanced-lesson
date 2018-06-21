// ---------------------Part 1-----------------------
/*
因为每一个Symbol值都是是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名
就能保证不会出现同名的属性
这对于一个对象由多个模块构成的情况非常有用，能防止某一个键不小心被改写或者被覆盖
使用Symbol是用[]，而不是点操作符
*/
var mySymbol=Symbol();
// 第一种写法
var a={};
a[mySymbol]='Hello!';
// 第二种写法
var a={
    [mySymbol]:'Hello!'
};
// 第三种写法
var a={};
Object.defineProperty(a,mySymbol,{value:'Hello!'});
// 以上写法都得到同样的结果
a[mySymbol]
//Hello!

var aSymbol=Symbol("abc");
var obj={
    [aSymbol]:'Hello!'
};
Object.defineProperty(obj,Symbol("abc"),{value:"World!"});
console.log(obj);
// {Symbol(abc): "Hello!", Symbol(abc): "World!"}

// ---------------------Part 2-----------------------
/*
上面代码通过方括号结构和Object.defineProperty，将对象的属性名指定为一个Symbol值
Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
*/
var mySymbol=Symbol();
var a={};
a.mySymbol='Hello!';
a[mySymbol];//undefined
a['mySymbol'];//Hello
// 上面代码，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所代指的那个值，
// 导致a的属性名实际上是一个字符串，而不是一个Symbol值

var myS1=Symbol("xx");
var myS2="xx";
var obj={
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);
console.log(obj[myS2],obj["xx"]);
// 123 undefined
// 456 456
// console.log(obj["myS1"]); undefined
// console.log(obj["myS2"]); undefined

/*
同理，在对象内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
如果不用[]的话相当于使用s对应的字符串定义属性
*/
let s=Symbol();
let obj={
    [s]:function(arg){console.log("xx");}
};
obj[s](123);
// xx
// 上面代码中，如果s不放在方括号中，该属性的键名就是字符串s，而不是s所代表的那个Symbol值
// 采用增强对象写法，上面代码的obj对象可以写得更简洁一些
let obj={
    [s](arg) {console.log("xx");}
};

// 还需注意一点，Symbol值作为属性名时，该属性还是公开属性，不是私有属性

// Symbol用于switch时可以避免重复问题
/*const COLOR_RED=Symbol();
const COLOR_GREEN=Symbol();
function getComplement(color){
    switch(color){
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}
常量使用Symbol值最大的好处，就是其他任何值都不可能有相同的值了
一次可以保证上面的switch语句会按设计的方式工作*/

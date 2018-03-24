/*###---------表示你做错的 */
//函数定义 函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);//3

//函数定义 函数表达式方式（等号右侧可以是匿名函数也可以是非匿名函数）
var max=function(a,b){//------匿名函数
    return a>b?a:b;
};
max(2,3);//3
//非匿名函数便于调用栈的追踪

// 函数定义 Function构造函数方式
var max=new Function("a","b","return a>b?a:b");
max(2,3);//3

//--------------------函数的调用
//普通函数直接调用
function test1(){
    console.log("this is",this);
}
test1();//window

//嵌套的情况下,ES5中嵌套在里面的函数基本属于window
function test2(){
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//对象方法调用
var obj={
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//23
var sayhi=function(){
    console.log("Hi,i'm",this.name);
};
obj.sayhi=sayhi;//给对象添加方法
obj.sayhi();//Hi i'm obj;


var name="全局";
var obj={
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var sayhi=function(){
    console.log("Hi,i'm",this.name);
};
obj.sayhi=sayhi;//给对象添加方法
obj.sayhi();//Hi,i'm obj----给obj添加的属性自然调用obj的属性


var obj={
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1=function(){
    return function fun2(){
        return this.x;
    }
};
obj.fun3=fun1;
obj.fun4=fun1();
console.log(obj.fun3());/*ƒ fun2(){
    return this.x;
}*/
console.log(obj.fun3()());//undefined
console.log(obj.fun4());//23

/*间接调用,间接调用的对象要和原对象之间，在数据结构上有对应的相似之处，
以便不影响调用效果*/
objA={name:AA};
objB={name:BB};
objA.foo=function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

var fish={
    name:"fish",
    swim:function(m,n){
        console.log("i'm "+this.name+" i can swim_",m,n);
    }
};
var bird={
    name:"bird",
    fly:function(m,n){
        console.log("i'm "+this.name+" i can fly_",m,n);
    }
};
var person={
    name:"person",
};
bird.fly(1,2);//i'm bird i can fly_ 1 2
fish.swim.call(person,3,4);//i'm person i can swim_ 3 4
bird.fly.call(person,5,6);//i'm person i can fly_ 5 6
bird.fly.apply(person,[7,8]);//i'm person i can fly_ 7 8
/*apply后面跟[](数组)||||||swim(1,2)与swim（null，1,2）效果相同 */

// 很多方法都可以通过间接调用的方式来调用，例如：原型方法
function test(){
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);//[1,2,3,"4",5]

//构造函数
function Person(name){
    this.name=name;
}
Person.prototype.sayHi=function(){
    console.log("Hi,i'm "+this.name);
};
var p1=new Person("jack");
p1.sayHi();//Hi,i'm jack

//--------------------------实参和形参
function test(){
    console.log(arguments);/*Arguments(2) ["hello,", "wrold!"] */
    console.log(Array.prototype.slice.call(arguments));//["hello,","wrold!"]
    var s="";
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;//"hello,wrold!"
}
test("hello,","wrold!");

function test(){
    console.log(arguments.length);//###2
    console.log(typeof arguments);//###object
    console.log(arguments instanceof Array);//false
    console.log(arguments instanceof Object);//true
    var s="";
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s;//"hello,wrold!"
}
test("hello,","wrold!");

var sum=function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
}
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10

//---------------------------------------------------传递
//值传递
var a=1;
function foo(x){
    console.log("a:",a,"x:",x);
    x=2;
    console.log("a:",a,"x:",x);
}
console.log("a:",a);
foo(a);
console.log("a:",a);
/*
a:1
a:1,x:1
a:1,x:2
a:1
 */

 //引用传递(会有连带关系)
 var obj={x:1};
 function fee(o){
     console.log("obj.x:",obj.x,"o.x:",o.x);
     o.x=3;
     console.log("obj.x:",obj.x,"o.x:",o.x);
 }
 console.log("obj.x:",obj.x);
 fee(obj);
console.log("obj.x:",obj.x);
/**
 obj.x:1
 obj.x:1 , o.x:1
 obj.x:3 , o.x:3
 obj.x:3
 */
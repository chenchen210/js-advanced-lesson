//----------------------Part 1----------------------
// ES6允许直接写入变量和函数，作为对象的属性和方法。这样的书写更简洁
var foo='bar';
var baz={foo};
baz;//{foo: "bar"}
// 等同于
var baz={foo:foo};

/*上面代码表明，ES6允许在对象之中，只写属性名，不写属性值
这是属性值等于属性名所代表的变量
*/
// 返回对象的简洁表示法
function f(x,y){
    return {x,y};
}
// 等同于
function f(x,y){
    return {x:x,y:y};
}
f(1,2);
// {x: 1, y: 2}

// 除了属性简写，方法也可以简写
var o={
    method(){
        return "Hello!";
    }
};
// 等同于
var o={
    method:function(){
        return "Hello!";
    }
};
// 实际例子
var birth="2000/01/01";
var p1={
    name:'aa',
    birth,//--------------等同于birth:birth
    hello(){console.log('我的名字是',this.name);}//等同于--hello:function()...
};
// 这种写法用于函数的返回值，将会非常方便
function getPoint(){
    var x=1;
    var y=10;
    return {x,y};
}
getPoint();
// {x: 1, y: 10}


//----------------------Part 2----------------------
// ES6允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在放括号内
let propKey='foo';
let obj={
    [propKey]:true,
    ['a'+'bc']:123
};
// 下面是另一个例子
var lastWord='last word';
var a={
    'first word':'hello',
    [lastWord]:'word'
};
a['first word'];//"hello"
a[lastWord];//"word"
a['last word'];//"word"
// 表达式还可以用于定义方法
let obj={
    ['h'+'ello'](){
        return 'hi';
    }
};
obj.hello();//"hi"

// 注意：属性名表达式与简洁表达式法，不能同时使用，会报错
var foo='bar';
var bar='abc';
// var baz={[foo]};------报错

// 正确
var foo='bar';
var baz={ [foo]:'abc'};
// 或者var baz={[foo]:bar}

//------------------------Part 3----------------------
// Object.is---------它用来比较俩个值是否严格相等，与（===）行为基本一致
console.log(Object.is(1,"1"));//false
console.log(Object.is(1,1));//true
// 和 === 的区别之处如下
console.log(+0 === -0);//true
console.log(NaN===NaN);//false
console.log(Object.is(+0,-0));//false
console.log(Object.is(NaN,NaN));//true

// Object.assign---------用于对象的合并，将源对象（source）得所有可枚举属性，复制到目标对象（target）
var target={a:1};
var source1={b:2};
var source2={c:3};
Object.assign(target,source1,source2);
target;
// {a: 1, b: 2, c: 3}

// 如果目标对象与源对象有同名属性，或多个对象有同名属性，则后面的属性会覆盖前面的属性
var target={a:1,b:1};
var source1={b:2,c:2};
var source2={c:3};
Object.assign(target.source1,source2);
target;
// {a: 1, b: 2, c: 3}

// Object.assign()----------实现的是浅拷贝，而不是深拷贝
// 就是说，如果源对象某个属性的值是对象，那么目标对象拷贝到的是这个对象的引用
var obj1={a:{b:1}};
var obj2=Object.assign({},obj1);
obj1.a.b=2;//-------------------根源上修改
obj2.a.b;//2

/*Object.getPrototypeOf()------得到原型
Object.setPrototypeOf(a,b)-----为对象a设置一个原型b
*/
var obj=Object.create({x:1,y:2});
console.log(Object.getPrototypeOf(obj));
Object.setPrototypeOf(obj,{z:3});
console.log(Object.getPrototypeOf(obj));
// {x: 1, y: 2}
// {z: 3}

// values 和 entries方法
var obj={foo:'bar',baz:42};
Object.values(obj);//["bar",42]
var obj={foo:'bar',baz:42};
Object.entries(obj);
for(var [k,v] of Object.entries(obj)){
    console.log(k,v);
}
/*
foo bar
baz 42
*/
/*Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 
（两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）*/
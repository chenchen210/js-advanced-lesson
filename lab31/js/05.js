// ----------------------Part 1-------------------
var m=new Map();
var o={p:'Hello World'};
m.set(o,'content');
m.get(o);//"content"
m.has(o);//true
m.delete(o);
m.has(o);//false

// 作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
var o={};
var map=new Map([
    ['name','张三'],
    [o,'Auther']
]);
map.size;//2
map.has('name');//true
map.get('name');//"张三"
map.has(o);//true
map.get(o);//"Auther"

// Map构造函数接受数组作为参数，实际上执行的是下面的算法
var items=[
    ['name','张三']
    ['title','Auther']
];
var map=new Map();
items.forEach(([key,value])=>map.set(key,value));
// 等效于
/*items.forEach(function(v){
    map.set(v[0],v[1]);
});*/

// 如果对同一个键多次赋值，后面的值将覆盖前面的值
let map=new Map();
map.set(1,'aaa').set(1,'bbb');
map.get(1);//"bbb"
// 上面的代码对键1连续赋值俩次，后一次的值覆盖前一次的值
// 如果读取一个未知的键，则返回undefined
new Map().get('asdfdghjkl');//undefined

// 只有对同一个对象的引用，Map结构才将其视为同一个键。这一点要非常小心
var map=new Map();
map.set(['a'],555);
map.get(['a']);
// undefined 
// 数组为引用对象类型，二者所指的并不是一块空间

var map=new Map();
map.set('a',555);
map.get('a');//555

var map=new Map();
var k1=['a'];
var k2=['a'];
map.set(k1,111);
map.set(k2,222);
map.get(k1);//111
map.get(k2);//222
/*
上述代码可知，虽然k1和k2的值是一样的，但是二者的物理地址不一样
所以被视为俩个键
这样就解决了同名属性碰撞（clash）的问题，我们在扩展别人的库时
若使用对象作为键名，就不用担心自己的属性与原属性同名
*/

// 如果Map的键是一个简单类型的值（数字、字符串、布尔值），只要俩个值严格相等，Map就将其视为一个键
// 包括0和-0.另外，虽然NaN不严格等于自身，但是Map将其视为一个键
let map=new Map();
map.set(NaN,123);
map.get(NaN);//123
map.set(-0,123);
map.get(0);//123

// ---------------------Part 2------------------------
// Map属性原型和方法
let map=new Map();
map.set('foo',true);
map.set('bar',false);
map.size;//2

var m=new Map();
m.set("edition",6);//键是字符串
m.set(262,"standard");//键是数值
m.set(undefined,'nah');//键是undefined

// set方法返回的是Map本身，因此可以采用链式写法
let map=new Map()
    .set(1,'a')
    .set(2,'b')
    .set(3,'c');
// get方法读取key对应的键值，如果找不到key，返回undefined
var m=new Map();
var hello=function(){console.log("hello");};
m.set(hello,"Hello ES6!");//键是函数
m.get(hello);//"Hello ES6!"

// has方法返回一个布尔值，表示某个键是否在Map数据结构中
var m=new Map();
m.set("edition",6);
m.set(262,"standard");
m.set(undefined,'nah');
m.has("edition");//true
m.has("years");//false
m.has(262);//true
m.has(undefined);//true

// delete方法删除某个键，返回true。如果删除失败，返回false
var m=new Map();
m.set(undefined,"nah");
m.has(undefined);//true
m.delete(undefined);
m.has(undefined);//false

// clear方法清除所有成员，没有返回值
let map=new Map();
map.set('foo',true);
map.set('bar',false);
map.size;//2
map.clear();
map.size;//0

// Map相关的遍历方法
let map=new Map([
    ['F','no'],
    ['T','yes'],
]);
console.log(typeof map.keys());
// object  注意类型是对象，不是数组
for(let key of map.keys()){
    console.log(key);
}
// F
// T
console.log(typeof map.keys());//注意类型是对象，不是数组
// object
for(let value of map.keys()){
    console.log(value);
}
// no
// yes
for(let item of map.entries()){
    console.log(item[0],item[1]);
}
// F no
// T yes
for(let [key,value] of map.entries()){
    console.log(key,value);
}
// F no
// T yes
// 等同于使用map.entries()
for(let [key,value] of map){
    console.log(key,value);
}


// Map结构转为数组结构，比较快速的方法是结合使用扩展运算符（...）
let map=new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);
console.log([...map.keys()]);
// [1,2,3]
console.log([...map.values()]);
// ['one','two','three']
console.log([...map.entries()]);
// [[1,'one'], [2, 'two'], [3, 'three']]
console.log([...map]);
// [[1,'one'], [2, 'two'], [3, 'three']]

// 结合数组的map方法、filter方法、可以实现Map的便利和过滤（Map本身没有map和filter方法）
let map0=new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1=new Map(
    [...map0].filter(([k,v])=>k<3)
);
// 产生Map结构{1=>"a",2=>"b"}
let map2=new Map(
    [...map0].map(([k,v])=>[k*2,"_"+v])
);
// {2 => "_a", 4 => "_b", 6 => "_c"}

// 此外，Map还有一个forEach方法，与数组的forEach方法类似，也可以实现遍历
map.forEach(function(value,key,map){
    console.log("Key: %s,Value: %s",key,value);
});


// 扩展内容
// Map转为数组
// 转为数组最方便，就是使用扩展运算符(...)
let myMap=new Map().set(true,7).set({foo:3},['abc']);
[...myMap];
// [[true,7],[{foo:3},['abc]]]

// 数组转为Map
// 将数组转入Map构造函数，就可以转为Map
new Map([[true,7],[{foo:3},['abc']]]);
// Map{true=>7,Object {foo:3}=>['abc]}

// Map转为对象
// 如果所有Map的键都是字符串，它可以转为对象
function strMapToObj(strMap){
    let obj=Object.create(null);
    for(let [k,v] of strMap){
        obj[k]=v;
    }
    return obj;
}
let myMap=new Map().set('yes',true).set('no',false);
strMapToObj(myMap)
// {yes:true,no:false}

// 对象转为Map
function objToStrMap(obj){
    let strMap=new Map();
    for(let k of Object.keys(obj)){
        strMap.set(k,obj[k]);
    }
    return strMap;
}
objToStrMap({yes:true,no:false});
// [['yes',true],['no',false]]
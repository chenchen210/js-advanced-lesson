//-------Part1--------数组的静态方法
//Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例
const bar=["a","b","c"];
Array.from(bar);//["a","b","c"]
Array.from('foo');//["f","o","o"]


//Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型
Array.of(7);//[7]
Array.of(1,2,3);//[1,2,3]
Array(7);//(7)[empty x 7]
Array(1,2,3);//[1,2,3]

//Array.isArray() 用于确定传递的值是否是一个 Array
var arr1=[1,3,4];
console.log(Array.isArray(arr1));//true

function foo(){
    console.log(Array.isArray(arguments));//不是数组是类数组
    // console.log(arguments.pop());只有数组才能调用
    console.log(Array.prototype.pop.call(arguments));//啊！强大的移花接木
}
foo(3,2,5);
//false 
//5

//---------Part2------数组添加删除元素的原型方法--破坏性
//Array.prototype.shift() 方法从数组中删除第一个元素，并返回该元素的值
var arr2=[1,3,5,7];
var shiftElement=arr2.shift();//返回去除的元素
console.log(shiftElement,arr2);//1 (3)[3,5,7]

//unshift() 方法将一个或多个元素添加到数组的开头，并返回新数组的长度
var newLength=arr2.unshift(1,2);//返回新的数组长度
console.log(newLength,arr2);//[1,2,3,5,7] 5

var popElement=arr2.pop();//返回删除的最后一个元素
console.log(popElement,arr2);//7 (4)[1,2,3,5]

var newLength=arr2.push(77,88);//返回新的数组长度
console.log(newLength,arr2);//6 (6)[1,2,3,5,77,88]

var arr3=["a","b"];
var arr4=["c","d"];
Array.prototype.push.apply(arr3,arr4);
console.log(arr3);
//["a","b","c","d"]

var arr5=["a","b","c","d"];
var spliceElement=arr5.splice(1,2,"x");//从索引为1的开始删除俩个元素并插入"x"
console.log(spliceElement,arr5);
//["b","c"](被删除的元素) ["a","x","d"]

var arr5=["a","b","c","d"];
var spliceElement=arr5.splice(-2,2,"x");//从索引（右向左数，1开始）为2的地方删除俩个元素（从右向左删），并插入"x"
console.log(spliceElement,arr5);
//["c","d"]  ["a","d","x"]
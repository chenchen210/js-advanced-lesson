//------Part1---排序和颠倒元素顺序 破坏性---------
//Array.prototype.reverse()将数组中元素的位置颠倒
var arr1=[1,2,3];
arr1.reverse();
console.log(arr1);//[3,2,1]

//Array.prototype.sort(compareFunction？---按这个东西排序（可选）)
var arr2=["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);//["apple","banana","orange","pear"]
//这是按照开头字母排序的

var arr3=[-1,-20,7,50]
arr3.sort();
console.log(arr3);
//(4) [-20,-1,50,7]------按照第一个数字排序的

arr3.sotr(function(a,b){return a-b;});
//对于数字类型，大于0则交换，-------冒泡排序
arr3.sort(function(a,b){return a>b;});
//对于布尔类型，true则交换，--------冒泡排序

//让arr2按第二个字母排序
var arr2=["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);//(4) ["banana", "pear", "apple", "orange"]


//------------Part2----合并、切分和连接 非破坏性--------------
//Array.prototype.concat(arr1?,arr2?,...)方法用于合并两个或多个数组并返回一个新数组
var arr4=["banana","apple"];
var arr5=["pear","orange"];
var newArray=arr4.concat(arr5);
console.log(newArray,arr4,arr5);
//["banana","apple","pear","orange"] ["banana","apple"] ["pear","orange"]

//Array.prototype.slice(begin?,end?)返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象
var arr6=[1,2,3,4,5];
var newArray=arr6.slice(2,4);
console.log(newArray,arr6);
//[3,4] [1,2,3,4,5]
var newArray2=arr6.slice(2);
console.log(newArray2,arr6);
//[3,4,5] [1,2,3,4,5]

//Array.prototype.join(separator?)将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
var arr7=[3,4,5];
var joinReturn=arr7.join("--");
console.log(joinReturn,arr7);
//'3--4--5' [3,4,5]
console.log(typeof joinReturn);//string
//注意：稀疏数组调用join
console.log([3,,,,,,5].join("*"));
//3******5

//---------------Part3--值的查找 非破坏性----------------------
//Array.prototype.indexOf(searchValue,startIndex?)返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
var arr8=[1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//2
console.log(arr8.indexOf(5,3));//5--从索引为3的开始找5
console.log(arr8.indexOf(5,5));//6
//Array.prototype.lastIndexOf(searchElement,startIndex?)
//在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从startIndex处开始
console.log(arr8.lastIndexOf(5));//6
console.log(arr8.lastIndexOf(5,3));//3
console.log(arr8.lastIndexOf(5,5));//3


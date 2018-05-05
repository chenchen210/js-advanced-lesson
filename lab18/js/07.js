//Part1数组原型方法（迭代-非破坏性-检测方法）thisValue可以指定callback中的this
//Array.prototype.forEach(callback,thisValue?)----不返回新的数组
var arr1=[2,5,8];
arr1.forEach(function(a){
    if(a>3){
        console.log(a,"大于3");
    }else{
        console.log(a,"不大于3");
    }
});
console.log(arr1);
/**
2 "不大于3"
5 "大于3"
8 "大于3"
 */

//Array.prototype.every(callback,thisValue?) 
//返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2=[2,5,8];
var returnValue=arr2.every(function(a){
    //console.log(a);2  5
    return a%2===0;
});
console.log(returnValue);//false

// Array.prototype.some(callback,thisValue?)
//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2=[2,5,8];
var returnValue=arr2.some(function(a){
    console.log(a);//2
    return a%2===0;
});
console.log(returnValue);//true


//---------------Part2-----------数组原型方法（迭代-非破坏性-转换方法）
//Array.prototype.map(callback,thisValue?)Map映射 返回新的数组
var arr2=[1,3,5,7,9];
var newArray=arr2.map(function(a){
    return a*a;
});
console.log(newArray,arr2);
//(5)[1,9,25,49,81] (5)[1,3,5,7,9]

//Array.prototype.filter(callback,thisValue?)Filter过滤 返回新的数组
var arr2=[1,3,5,7,9];
var newArray=arr2.filter(function(a){
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);
//(3)[3,5,7] (5)[1,3,5,7,9]


//--------------Part3--------数组原型方法（迭代-非破坏性-归约方法）
//Array.prototype.reduce(element,initialValue?)--从左向右迭代
function add(prev,cur){
    return prev+cur;
}
var arr3=[10,3,1];
console.log(arr3.reduce(add));//14

//Array.prototype.reduceRight(callback,initialValue?)--从右向左迭代
function add(prev,cur){
    return prev+cur;
}
var arr3=[10,3,1];
console.log(arr3.reduceRight(add));//14


function printArgs(prev,cur,i){
    console.log("prev",prev,"cur",cur,"i:",i);
    return prev+cur;
}
var arr4=["a","b","c","d"];
console.log(arr4.reduce(printArgs));
/**
 * i对应的是current的索引值，是否从0开始是取决于你reduce是否有第二个参数
prev a cur b i: 1----此时a之后reduce有第二个参数，索引为1
prev ab cur c i: 2----此时ab之后reduce有第二个参数，索引为2
prev abc cur d i: 3----此时abc之后reduce有第二个参数，索引为3
abcd 
*/
console.log(arr4.reduce(printArgs,"x"));
/**
prev x cur a i: 0---此时x之后reduce有的二个参数，索引为0
prev xa cur b i: 1---此时xa之后reduce有的二个参数，索引为1
prev xab cur c i: 2---此时xab之后reduce有的二个参数，索引为2
prev xabc cur d i: 3---此时xabc之后reduce有的二个参数，索引为3
xabcd 
*/
console.log(arr4.reduceRight(printArgs));
/**
prev d cur c i: 2--此时d之后reduceRight有第二个参数，索引为2（c的索引）
prev dc cur b i: 1--此时dc之后reduceRight有第二个参数，索引为1（b的索引）
prev dcb cur a i: 0--此时dca之后reduceRight有第二个参数，索引为0（a的索引）
dcba 
*/
console.log(arr4.reduceRight(printArgs,"x"));
/**
prev x cur d i: 3
prev xd cur c i: 2
prev xdc cur b i: 1
prev xdcb cur a i: 0
xdcba 
*/

var flattened=[[0,1],[2,3],[4,5]].reduce(function(a,b){
    return a.concat(b);
});
console.log(flattened);
//(6) [0,1,2,3,4,5]

var names=['Alice','Bob','Tiff','Bruce','Alice'];
var countedNames=names.reduce(function(allNames,name){
    if(name in allNames){
        allNames[name]++;
    }else{
        allNames[name]=1;
    }
    return allNames;
},{});
// {'Alice':2,'Bob':1,'Tiff':1,'Bruce':1}
//创建数组的不同方式
var arr1=[1,2,3,"4"];

var arr2=new Array(5);
console.log(arr2);
//(5) [empty × 5]
for(var i=0;i<arr2.length;i++){
    arr2[i]=i;
}
//此时的arr2：(5) [0, 1, 2, 3, 4]

var arr22=[];
for(var i=0;i<5;i++){
    document.onclick=function(){
        arr22[i]=i;
    }
}
//(6) [empty × 5,5]
//这是异步执行，首先执行for里面的i，点击后执行函数，但此时i已经是5，所以添加第六个元素5

var arr3=new Array(1,2,3,4);
console.log(arr1,arr2,arr3);
/*
[1,2,3,"4"]   (5) [0, 1, 2, 3, 4]   [1,2,3,4]
*/


//数组直接量中的值不一定要是常量，可以是任意表达式
var base=1024;
var table=[base,base+1,base+2,base+3];//[1024,1025,1026,1027]
//也可以包含对象直接量或其他数组直接量
var b=[[1,{y:2}],[2,{x:3}]];
/*二维数组
[ [1,{y:1}]
  [2,{x:3}] ] 
*/

var a1=[1,2,3];
var a2=a1;//-------------数组也是对象，二者指向同一块区域
a2.length=0;//这里存在连坐关系
console.log(a1,a2);
//[] []

var a3=[1,2,3];
var a4=a3;//-------------数组也是对象，二者指向同一块区域
a4=[];//-------------这里给a4另辟了一个空间为空数组，4和3无连坐关系
console.log(a3,a4);
//(3) [1, 2, 3] []

//Error
function idlog(x){
    try{
        var arr=new Array(-1);
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("222");
    }
}
idlog(123);
//222


//数组求平均值和标准差

//不用map和redeuce的写法
var data=[1,1,3,5,5]
var total=0;
for(var i=0;i<data.length;i++){
    total+=data[i];
}
var average=total/data.length;
total=0;
for(var i=0;i<data.length;i++){
    var deviation=data[i]-average;
    total+=deviation*deviation;
}
var stddev=Math.sqrt(total/(data.length-1));

//使用map和reduce方法
//map() 方法返回一个由原数组中的每个元素调用一个指定方法后的返回值组成的新数组。
//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
var data=[1,1,3,5,5];
function sum(x,y){return x+y;}
var average=data.reduce(sum)/data.length;

function deviation(x){return x-average;}
var tempArr=data.map(deviation);
total=0;
function square(z){return x*x;}
total=tempArr.map(square).reduce(function(x,y){
    return x+y;
});
var stddev=Math.sqrt(total/(data.length-1));

//使用map和reduce精简方法
var data=[1,1,3,5,5];
var average=data.reduce(function(x,y){return x+y;})/data.length;
var tempArr=data.map(function(x){return x-average;});
total=0;
total=tempArr.map(function(x){return x*x;}).reduce(function(x,y){
    return x+y;
});
var stddev=Math.sqrt(total/(data.length-1));

/*
使用Es6中的箭头函数会更精简
var data=[1,1,3,5,5];
var average=data.reduce((x,y)=>{return x+y;})/data.length;
var tempArr=data.map((x)=>{return x-average;});
total=0;
total=tempArr.map((x)=>{return x*x;}).reduce((x,y)=>{return x+y;});
var stddev=Math.sqrt(total/(data.length-1));
*/
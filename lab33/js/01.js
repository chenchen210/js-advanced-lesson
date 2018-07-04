/*
Promise构造函数用于实例化Promise对象
Promise构造函数接受一个函数（执行器）作为参数，创建Promise对象时，执行器会立即执行
该执行器的俩个参数分别是resolve函数和reject函数
resolve和reject这俩个函数，有JavaScript引擎提供，不用自己部署

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功“（即从pending变为resolved）
在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从pending变为rejected）
在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

Promise实例生成以后，可以用then方法指定resolved状态和rejected状态的回调函数
*/

// Promise 实例一
var myFirstPromise=new Promise(function(resolve,reject){
    // 当异步代码执行成功时，我们才会调用resolve(...),当异步代码失败时就会调用reject(...)
    // 在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码可能是XHR请求或是HTML5的一些API方法
    console.log("step1");
    setTimeout(function(){
        resolve("成功！");
    },2500);
    // setTimeout(resolve,2500,"成功！");等效于上面三行
    console.log("step2");
});

myFirstPromise.then(function(successMessage){
    console.log("Yes!"+successMessage);
},function(errorMessage){
    console.log("No!"+errorMessage);
})
/*
step1
step2
// Promise {<pending>}
Yes!成功！
*/
var myFirstPromise=new Promise(function(resolve,reject){
     console.log("step1");
    setTimeout(function(){
       reject("失败！");
    },2500);
    console.log("step2");
});

myFirstPromise.then(function(successMessage){
    console.log("Yes!"+successMessage);
},function(errorMessage){
    console.log("No!"+errorMessage);
})
/*
step1
step2
// Promise {<pending>}
No!失败！
*/

// Promise 实例二
var promise=new Promise(function(resolve,reject){
    console.log("创建Promise对象时，执行器会立即执行");
    var a="xxx";
    setTimeout(()=>{
        if(a=="abc"){
            resolve(a);
        }else{
            reject(new Error("error"));
        }
    },2000);
    a="abc";
});
promise.then(function(val){//切换到fulfilled状态后调用，接收resolve的参数
    console.log(val);
},function(err){//切换到rejected状态后调用，接收reject的参数
    console.log(err);
});
/*
创建Promise对象时，执行器会立即执行
// Promise {<pending>}
abc
*/
var promise=new Promise(function(resolve,reject){
    console.log("创建Promise对象时，执行器会立即执行");
    var a="xxx";
    setTimeout(()=>{
        if(a=="abc"){
            resolve(a);
        }else{
            reject(new Error("error"));
        }
    },2000);
    a="yyy";
});
promise.then(function(val){//切换到fulfilled状态后调用，接收resolve的参数
    console.log(val);
},function(err){//切换到rejected状态后调用，接收reject的参数
    console.log(err);
});
/*
创建Promise对象时，执行器会立即执行
// Promise {<pending>}
Error: error
    at setTimeout (<anonymous>:8:20)
*/


//案例三
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done');//一旦状态改变，就不会再变状态就凝固了，不会再变了
        setTimeout(reject,ms+500,'failed');
    });
} 

timeout(1000).then(
    (value)=>{
        console.log(value);
    },
    (err)=>{
        console.log(err);
    }
);
/*
Promise {<pending>}
done
*/

// 补充案例
new Promise((a,b)=>{
     setTimeout(a,1000,"x");
}).then(
    (v)=>{console.log("v1:",v)},
    (e)=>{console.log("e1:",e)}
).then(
    (v)=>{console.log("v2:",v)},
    (e)=>{console.log("e2:",e)}
)
/*
// Promise {<pending>}
v1: x
v2: undefined
*/
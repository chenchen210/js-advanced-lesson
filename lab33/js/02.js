// Promise的原型方法，Promise.prototype.then
// then的基本案例
function promiseTest(ms){
    return new Promise((resolve,reject)=>{
        console.log(111);
        setTimeout(resolve,ms,'done');
        // return setTimeout(resolve,ms,'done');
        console.log(222);
    });
}
promiseTest(2000).then(
    (val)=>{console.log('this is success callback:',val)},
    (err)=>{console.log('this is fail callback:',err)}
)
/*
111
222
// Promise {<pending>}
this is success callback: done
*/

// then的链式调用
var p=new Promise(function(resolve,reject){
    console.log("11");
    resolve("22");
    console.log("33");
});
p.then(function(v1){
    console.log("44",v1);
},function(e1){
    console.log("55",e1);
})
.then(function(v2){
	console.log("66",v2);
},function(e2){
	console.log("77",e2);
})
.then(function(v3){
	console.log("88",v3);
},function(e3){
	console.log("99",e3);
});
/*
11
33
44 22
66 undefined
88 undefined
*/

// 返回值为新Promise的情况
var p=new Promise(function(resolve,reject){
    console.log("11");
    reject("22");
    console.log("33");
});
p.then(function(v1){
    console.log("44",v1);
},function(e1){
    console.log("55",e1);
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,"66");
    });
})
.then(function(v2){
	console.log("77",v2);
},function(e2){
	console.log("88",e2);
})
console.log("99");
/*
11
33
99
55 22
88 66
*/

// 补充案例
// 1111111111111
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{console.log(v)});
//hi

// 2222222222222
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
var x=p.then((v)=>{console.log(v)});
console.log(x instanceof Promise);
// true

// 333333333333
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
var x=p.then((v)=>{console.log("x:",v)});
console.log(x instanceof Promise);
var y=x.then((v)=>{console.log("y:",v)})
console.log(y instanceof Promise);
/*
true
true
// undefined
x: hi
y: undefined
*/

// 4444444444444
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{
    console.log("x:",v);
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,v+":xx");
    })
}).then(v=>console.log(v),
e=>console.log(e));
/*
x: hi
hi:xx
*/
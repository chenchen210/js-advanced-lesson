// Promise的原型方法，Promise.prototype.catch
// 基本案例
var p1=new Promise((resolve,reject)=>{
    console.log(111);
    // resolve(222);
    reject(222);
    console.log(333);
});
p1.then(
    ()=>{console.log('this is success callback')}
).catch(
    (err)=>{console.log(err)}
)
/*
111
333
222
*/

// 注意：避免then中的rejected回调和catch同时使用
// 一般写法
var p2=new Promise((resolve,reject)=>{
    console.log(111);
    // resolve(222);
    reject(new Error("222"));
    console.log(333);
});
p2
.then(()=>{console.log('444');})
.then(()=>{console.log("555");})
.catch((err)=>{console.log("666",err);})
/*
111
333
666 Error: 222
    at Promise (<anonymous>)
    at new Promise (<anonymous>)
    at <anonymous>
*/

// Promise的原型方法，Promise.prototype.finally
var p2=new Promise((resolve,reject)=>{
    console.log(111);
    // resolve(222);无论是resolve还是reject，finally都会执行
    reject(new Error("222"));
    console.log(333);
});
p2.then(()=>{console.log('444');})
.then(()=>{console.log("555");})
.catch((err)=>{console.log("666",err);})
.finally(()=>{console.log("finally");})
/*
111
333
666 Error: 222
finally
*/

// 其他案例----------catch
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{
    console.log("x:",v);
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,new Error("xx"));
    })
}).then(v=>console.log(v),e=>console.log(e))
.catch((e)=>console.log("zz:",e));
/*
x: hi
Error: xx
*/
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{
    console.log("x:",v);
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,new Error("xx"));
    })
}).then(v=>console.log(v))
.catch((e)=>console.log("zz:",e));
/*
x: hi
zz: Error: xx
*/
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{
    console.log("x:",v);
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,new Error("xx"));
    })
}).then(v=>console.log(v)).then(v=>console.log(v))
.catch((e)=>console.log("zz:",e));
/*
x: hi
zz: Error: xx
*/

// finally
var p=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"hi");
});
p.then((v)=>{
    console.log("x:",v);
    return new Promise((resolve,reject)=>{
        setTimeout(reject,2000,new Error("xx"));
    })
}).then(v=>console.log(v),e=>console.log("yy:",e))
.catch(e=>console.log("zz:",e))
.finally(f=>console.log("finally"));
/*
x:hi
yy:Error:xx
finally
*/
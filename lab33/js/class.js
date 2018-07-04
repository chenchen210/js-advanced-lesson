var myFirstPromise=new Promise(function(resolve,reject){
    console.log("step1");
    setTimeout(function(){
        resolve("成功！");
    },2500);
    console.log("step2");
});
myFirstPromise.then(function(successMessage){
    console.log("Yes!"+successMessage);
},function(errorMessage){
    console.log("No!"+errorMessage);
});
/*
step1
step2
// Promise {<pending>}
Yes!成功！
因为执行“成功”之后代码有pending转变为resolved，转变后代码状态不变
所以不会再变成rejected，不会执行“No”操作
*/


new Promise((a,b)=>{
	setTimeout(a,1000,"x");//setTimeout(b,1000,"x");
}).then(
	(v)=>{console.log("v1:",v)},
    (e)=>{return new Promise((c,d)=>{d("y");})
}).then(
	(v)=>{console.log("v2:",v)},
	(e)=>{console.log("e2:",e)}
)


var p = new Promise(function(resolved,rejected){
	console.log("11");
	resolved("22");//思考：rejected("22");
	console.log("33");
});
p.then(function(v1){
	console.log("44",v1);
},function(e1){//若没有rejected响应，则rejected向下传递。若有则后续then为resolved状态
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
var p = new Promise(function(resolved,rejected){
	console.log("11");
	rejected("22");//思考：rejected("22");
	console.log("33");
});
p.then(function(v1){
	console.log("44",v1);
})
.then(function(v2){
	console.log("66",v2);
})
.then(function(v3){
	console.log("88",v3);
},function(e3){
	console.log("99",e3);
});
/*
11
33
99 22
把then后面的接受rejected的去掉，这个错误会冒泡一般的像后面传递
resolved的不调用
*/



var p = new Promise(function(resolved,rejected){
	console.log("11");
	rejected("22");
	console.log("33");
});
p.then(function(v1){
	console.log("44",v1);
},function(e1){
	console.log("55",e1);
	return new Promise((resolved,rejected)=>{
		setTimeout(() => {
			rejected("55");
		}, 2000,);
	});
})
.then(function(v2){
	console.log("66",v2);
},function(e2){
	console.log("77",e2);
})
console.log("99");
/*
11
33
99//-----------------console.log是同步的，then是异步的
55 22
// 2秒后输出下面
77 55
*/
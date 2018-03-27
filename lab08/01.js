// 函数对象
function foo(){}
console.log(foo);
console.log(typeof foo);//Function
console.log(foo instanceof Object);//true
console.log(foo instanceof Function);//true
console.log(foo===window.foo);//true

console.log(typeof Function);//Function
console.log(typeof Array);//Function
console.log(typeof Date);//Function
console.log(typeof Error);//Function
console.log(typeof Math);//Object
console.log(typeof JSON);//Object

console.log(typeof new Function());//Function
console.log(typeof new Array());//Object
console.log(typeof new Date());//Object

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

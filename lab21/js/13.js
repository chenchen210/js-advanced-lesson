//Error相关
var e1=new Error("e1 Error Msg");
try{
    throw e1;
}catch(e){
    console.log(e.name+":"+e.message);
}
//Error:e1 Error Msg

//可以直接创建Error对象
console.log(Error.prototype);
var myError=new Error("NewMessage");
console.log(myError.name,myError.message);
//{constructor: ƒ, name: "Error", message: "", toString: ƒ}
//Error NewMessage

//基于Error的子类，可以创建自定义对象，并添加若干自有属性
function MyError(name,message){
    this.name=name||'MyError';
    this.message=message||'Default Message';
}
MyError.prototype.__proto__=Error.prototype;
// MyError.prototype=Object.create(Error.prototype);
// MyError.prototype.constructor=MyError;


try{
    //throw new MyError
    throw new MyError('custom message');
}catch(e){
    console.log(e.name);
    console.log(e.message);
}
/*
MyError
custom message
*/

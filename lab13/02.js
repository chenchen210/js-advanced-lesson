var i=new String("str");   //String  Object
var j=new Number(1);      //Number   Object
var h=new Boolean(true);    //Boolean  Object
var k=new Object({name:"jack"});    //Object  object
var l=new Array([1,2,3,4]);     //Array Object
var m=new Date();       //Date Object
var n=new Error();      //Error Object
var o=new Function();   //Function Object
var a=new RegExp("\\d");    //RegExp  object

console.log(typeof Array);//function
console.log(typeof Function);//function
console.log(typeof Date);//function
console.log(typeof Number);//function
console.log(typeof String);//function
console.log(typeof Boolean);//function
console.log(typeof Math);//Object
console.log(typeof JSON);//Object

console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
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
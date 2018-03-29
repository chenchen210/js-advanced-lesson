console.log(a);//undeifined
var a=1;
console.log(a);//1

var a;
console.log(a);//undefined
a=1;
console.log(a);//1

console.log(a,b);//undefined undefined
var b=23;
console.log(a,b);//undefined 23
var a=b;
console.log(a,b);//23 23

console.log(obj1.obj2);//报错
var obj1={x:23};
console.log(obj1,obj2);//{x:23} undefined
var obj2=obj1;
console.log(obj1,obj2);//{x:23} {x:23}
obj2.x=25;
console.log(obj1,obj2);//{x:25} {x:25}
//======================================解析器眼中的代码
foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2")
}
//f_2
/*等价于 */
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2")
}
foo();//f_2

//======================================同时有var和function
foo();
var foo=function(){
    console.log("foo");
};
//报错，等价于
var foo;
foo();
foo=function(){}//--------变量和函数不一样，不能混得到一起

console.log(foo);//undefined
var foo=function(){
    console.log("foo");
};
foo();//foo

/*等价于 
var foo;
console.log(foo);
foo=function(){
    console.log("foo");
};
foo();
*/

aa();
function aa(){
    console.log("aa_1");
}
var aa=function(){
    console.log("aa_2");
};
aa();
//aa_1
//aa_2
//等价于
function aa(){
    console.log("aa_1");
}
var aa;
aa();
aa=function(){
    console.log("aa_2");
};
aa();
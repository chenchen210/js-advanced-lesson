//词法作用域与调用形式无关
var name="jack";
function echo(){
    console.log(name);
}
function foo(){
    var name="bill";
    echo();
}
foo();
//jack因为echo的词法作用域为echo的附近而不是foo（）内部


//全局变量与局部变量
var x="outside f1";
var f1=function(){
    var x="inside f1";
    console.log(x);
};
f1();
console.log(x);
//inside f1
//outside f1

var x="outside f1";
var f1=function(){
    console.log(x);
};
f1();
console.log(x);
//outside f1
//outside f1

var f2=function(){
    var y="局部";
    console.log(y);
};
f2();
console.log(y);
//局部
//报错----因为压根就没有全局变量y

var f2=function(){
    y="全局";
    console.log(y);
};
f2();
console.log(y);
//全局
//全局

if(true){
    var z=23;
}
console.log(z);
//23

if(true){
    (function(){
        var z=23
    }());
}
console.log(z);
//报错()里面的函数是局部变量
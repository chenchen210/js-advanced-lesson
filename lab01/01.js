(function foo(){
    var n = 10;
    var m = true;
    var str = "Hello World"; // str:"Hello World"存在栈中

// obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
    var obj = {value:"Hello World"};
}());

var a = 23;
var b = 34;
//a和b都存在栈区
/*基本的数据类型的临时变量大部分分配在栈区；
引用数据类型的变量的引用存储在堆区
【栈区不用了就释放，堆区的如果没有特别的释放内存那就在结束整个程序之后系统会检测是否有占用的空间
还未被释放，检测出来后就释放该空间】*/

(function () {
    //基本（原始）数据类型与引用（对象）类型的区别 赋值方式不同
    var str_a = "a"; 
    var str_b = str_a; // 原始类型直接访问值,是值赋值
    str_b = "b";
    console.log(str_a,str_b);//a,b【因为是基本数据，没有连带关系】

    var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
    var obj_b = obj_a; // obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
    obj_b.v = "b"; // 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值，
    // 所以这时候打印都是{v:"b"}----【引用关系存在连带】
    console.log(obj_a,obj_b);//{v:"b"},{v:"b"}

    obj_b = {v:"c"}; // 注意：因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
    // 所以这里打印的obj_a依旧是{v:"b"},而obj_b是{v:"c"}(两者在内存中引用的是不同对象了)。
    console.log(obj_a,obj_b);//{v:"a"},{v:"c"}
}());

//注意：是值赋值还是引用赋值取决于变量的类型，而不取决于变量分配在堆区还是栈区
var obj_c = {x1:2,y1:3};//obj_c.x1存储在堆区
var obj_d = {x2:2,y2:3};
console.log(obj_c.x1 === obj_d.x2);//true【比较俩方存储在堆区的值】

(function () {
//基本（原始）数据类型与引用（对象）类型的区别1 判等不同
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);//true
console.log(a1 === b1);//true

//
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);//false
console.log(a2 === b2);//false
//【a2和b2同为Object，这类判等时首先看存储空间是否相等，否则免谈】
  
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);
console.log(a3 === b3);

b3 = new Number(200);//true
console.log(a3 === b3);//true
/*
var a4 = new Number(200);
var b4 = 200;
console.log(a4 == b4);//true---是a4转换了
console.log(a4 === b4);//false

//思考
var a5 = {x:1,y:2};
var b5 = {x:1,y:2};
console.log(a5 === b5);//false
console.log(a5.x === a5.x);//true
//基本内存分配在栈区，是值比较
*/
}());

(function () {
// 基本（原始）数据类型与引用（对象）类型的区别2 函数参数传递方式不同
// 值传递
var str_a = "Hello World";
function fn_a(arg){
    console.log(arg); // Hello World
    arg = "Hai";
    console.log(str_a,arg); // Hello World , Hai
};
fn_a(str_a);
console.log(str_a);// str_a:"Hello World"

//从上面#1处可以看出，传入函数fn_a的是str_a的值
//并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存)
//所以在#2处打印的是2个不同的字符串。也正是因为传值时候对str_a值进行了值的复制，而这又是原始类型的值，
//所以在#3处的str_a与早先声明的str_a保持一致


// 引用传递
var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);// 这时候obj_a是{value:3}

// 上面这个问题也可以从内存角度去理解，两个函数都是传址，而这个址引用了obj_a在内存中对应的对象，
// 所以两个函数中的arg起初都是引用和obj_a同一个内存中的对象值，
// 而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，
// 但是在fn_b中重新为arg赋值新的对象，arg指向新对象并不会影响obj_a

}());

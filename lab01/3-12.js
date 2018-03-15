//3.12课上代码复习
//重点包括：包装对象、类型转换、Number、String、Boolean相关方法等
var a1=20;
var a2=23.4;
console.log(parseInt(a2));//23
console.log(parseFloat("23.456xy"));//23.456
console.log(parseInt==window.parseInt);//true
console.log(parseFloat==window.parseFloat);//true
//parseFloat和parseInt都是全局方法，即window全局对象的方法
// 函数就是一个对象，对象可以包含属性和方法
// Node.js中的全局对象是 global（全局对象）
console.log(Math.ceil(a2));//24----对浮点数向上取整
console.log(Math.floor(a2));//23-----对浮点数向下取整
console.log(Math.round(a2));//23-----四舍六入五考虑，五后非零就进一，五后皆零看奇偶，五前为偶应舍去，五前为奇要进一！

a3=5e2;//指数形式
console.log(a3);//500
console.log(typeof Math);//Object

//NaN
var x=Number("xis021");
console.log(x);//NaN
isNaN(x);//true-----检查其参数是否为非数字
typeof NaN;//true
console.log(Math.log(-1));//NaN-----返回数的自然对数
console.log(Math.acos(2));//NaN-----返回数的反余弦值
console.log(NaN === NaN);//false----这个是特例，记住

// Infinity与-Infinity
var y1=2/0;
console.log(y1);//Infinity
var y2=-2/0;
console.log(y2);//-Infinity
isFinite(y2);//false---该函数用来判断传入的参数是否为有限数
isFinite(23);//true

//0与-0
var z1=1/Infinity;
console.log(z1);//0
var z2=-1/Infinity;
console.log(z2);//-0
//========================================strring
//转义字符\n \' \" \\
console.log("abc\ndefghi\\\n\'mn\'");//abc
                                    //defghi\
                                    //'mn'

var str="abc_def_ghi_jkl_mn";//下表从0开始
str.split("_");//["abc", "def", "ghi", "jkl", "mn"]--以_进行数组分割
str.split("_",2);//["abc","def"]--以_进行数组分割，只要前俩个
str.concat("_opq");//"abc_def_ghi_jkl_mn_opq"--拼接
str.substr(4,7);//"def_ghi"--截取，从4开始直至截取7个数
str.substring(4,7);//"def"--截取，范围从下标4至下标7（不包括7）
str.slice(2);//"c_def_ghi_jkl_mn"--切取，切去字符串前俩个
str.slice(2,5);//"c_d"--切取，切取下标为2至下标为5的（不包括5）
str.slice(-2);//"mn"--切取，从后向前切取俩个数
str.slice(2,-2);//"c_def_ghi_jkl_"---切取下标为2至下标为-2的（不包括-2）

str.bold();//"<b>abc_def_ghi_jkl_mn</b>"--加粗
str.link();//"<a href="undefined">abc_def_ghi_jkl_mn</a>"--显示为超链接
str.fontcolor("red");//"<font color="red">abc_def_ghi_jkl_mn</font>"--为字体添上色彩
str.fontsize(50);//"<font size="50">abc_def_ghi_jkl_mn</font>"---规定字体型号

//======================================Boolean
var a;
console.log(a);//undefined（未定义）,不加a直接使用会报错；undeclare（未声明）

function foo(x,y){
    console.log(x,y);
}
foo(1);
//1 undefined

function fee(){
    //没有返回值的情况
}
var feeReturnValue=fee();
console.log(feeReturnValue);
// undefined

//=========================================null
console.log(typeof null);//object

//===========================================对象类型
var obj={x:1,y:2};//obj的原型是Object.prototype，并且obj继承的属性和方法都源于这个原型
console.log(obj.__proto__===Object.prototype);
console.log(Object.prototype);

var arr=[1,2,3,4,5];//arr的原型是Array.prototype，并且arr继承的属性和方法都源于这个原型
console.log(arr.__proto__===Array.prototype);//true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__===Object.prototype);//true

function foo(){//foo的原型是Function.prototype，并且foo继承的属性和方法都源于这个原型
    console.log("foo function!");
};
console.log(foo.__proto__===Function.prototype);//true
console.log(foo.__proto__.__proto__===Object.prototype);//true

console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true

//所有对象都有属性，查看对象的属性
for(var k in obj){
    console.log(k,obj[k]);
}//遍历原型链上的所有可以遍历的属性

console.log(Object.keys(obj));//返回一个数组，包含自身所有可枚举的属性
console.log("x" in obj);//能够检查整个原型链上的属性，包括不可遍历的属性

// 函数也是对象，函数也有若干属性，查看foo函数有哪些属性
for(var k in foo){
    console.log(k,foo[k]);//没有自身属性，所以没有输出
}
console.log("call" in foo);//true
console.log("apply" in foo);//true
console.log("arguments" in foo);//true

//======================================包装对象
var a=123;
var b=new Number(a);
console.log(a==b);//true
console.log(a===b);//false
//======================================临时包装对象
var str="abcde";
console.log(str.length);//5 临时包装成了string对象
str.length=1;
console.log(str.length,str);//5,"abcde"临时包装对象并不影响原始值
  
var arr=[1,2,3,4];
console.log(arr.length);//4
arr.length=1;
console.log(arr.length,arr);//1,[1]

//=====================================数据的类型转换
console.log(Boolean(undefined));//flase
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//true
console.log(Boolean(""));//false
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true----对象总是为true
if(new Boolean(false)){
    console.log("执行");
}//执行------new是对象的象征，总为true

console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.456xx"));//NaN
console.log(Number("3232.456xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("322.456xx"));//322.456
console.log(parseInt("123.345xx"));//123
console.log(parseInt("3232.345xx"));//3232

console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object,object]

var a=3;
var b=4;
console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean true

var c="img"+3+".jpg";
var d="23"-5;
console.log(c,d);//img3.jpg 18x

var e=!23;
var f=!!34;
var g=!!{};
console.log(e,f,g);//false true true

var h={x:1};
if(h){
    console.log("h",h);
}//h {x: 1}

var h="";
if(h){
    console.log("h",h);
}//undefined

//显示类型转换Boolean()\Number()\String()\Object()\parseInt()
//parseFloat()\toString()\valueOf()

Number.MAX_VALUE//1.7976931348623157e+308---最大值
Number.MIN_VALUE//5e-324----最小的数（接近0）
Number.NaN//NaN
Number.NEGATIVE_INFINITY//-Infinity
Number.POSITIVE_INFINITY//Infinity
/*===============================Number原型方法（Number对象继承的方法）
Number.prototype.toFixed();--0---使用定点表示法来格式化一个数
Number.prototype.toPrecision();---0----指定的精度返回该数值对象的字符串表示
Number.prototype.toString();---0---返回指定 Number 对象的字符串表示形式
Number.prototype.toExponential();--0e+0--以指数的方式显示其数字
*/
var n1=12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

console.log(NaN===NaN);//false
console.log(isNaN("12.3"));//false
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4
//==================================================字符串
//字符串比较
console.log("A">"a");//false
console.log("B".localeCompare("A"));//1
console.log("A".localeCompare("A"));//0
console.log("A".localeCompare("B"));//-1

//字符串链接
var a="abc";
var b="def";
var c=a+b;
console.log(c);//abcdef

/*String.prototype.chatAt(pos);
String.prototype.charCodeAt(pos);
String.prototype.slice(start,end);
String.prototype.substr(start,length);
String.prototype.substring(start,end);
String.prototype.split(separator,limit);
字符串常用方法，字符串的方法源于string。prototype
*/
var str2="abcdef".slice(2);//cdef
var str3="abcdef".slice(2,5);//cde
var str4="abcdef".slice(-2);//ef----从下标为-2的开始截取
var str5="abcdef".slice(2,-2);//cd

var str6="abcdef".split("c");//["ab","def"]
var str7="abcdef".split("c",1);//["ab"]
var str8="abcdef".split("c",2);//["ab","def"]

var str9="abcdef".charAt(2);//c
var str10="abcdef".charCodeAt(3);//100--返回指定位置的字符的 Unicode 编码
var str11="abcdefabcdef".indexOf("d",1);//3
var str12="abcdefabcdef".indexOf("d",4);//9----从的下标为4的开始找

var str13="abcdefghijklmn";
var str14=str13.substr(2,5);
console.log(str13,str14);//"abcdefhijklmn","cdefg"

var str15=str13.substring(2,5);
console.log(str13,str15);//"abcdefhijklmn","cde"

/*字符串的变换
String.prototype.trim();-----移除字符串两侧的空白字符或其他预定义字符
String.prototype.concat(str1,str2);--拼接字符串
String.prototype.toLowerCase();---全部转换为小写
String.prototype.toLocaleLowerCase();--按照本地方式把字符串转换为小写
String.prototype.toUpperCase();---全部转换为大写
String.prototype.toLocaleUpperCase();--按照本地方式把字符串转换为大写
*/
var str1="aaa".concat("bbb");//aaabbb
var str2="   abc def    \r\n  ".trim();//abc def
var str3="abcDEF".toLowerCase();//abcdef
var str4="abcDEF".toUpperCase();//ABCDEF

/*检索和比较
String.prototype.indexOf(searchingString,position);----从下标为p的开始向后找，输出找的第一个下标
String.prototype.laseIndexOf(searchingString,position);--输出最后一个要找的下标
String.prototype.localeCompare(other);--用于比较
*/ 
var indexOf="abcDEFabcDEFabcDEF".indexOf("D",6);//9
var laseIndexOf="abcDEFabcDEFabcDEF".lastIndexOf("D");//15

/*与正则相关的方法
String.prototype.search(regexp);---检索与正则表达式相匹配的子字符串
String.prototype.match(regexp);---找到一个或多个正则表达式的匹配
String.prototype.replace(regexp);--替换一个与正则表达式匹配的子串
*/
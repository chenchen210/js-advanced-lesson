//JS中一切都是对象，任何支持的类型都可以通过对象来表示
//JSON是JS对象的字符串表示法，它使用文本表示一个JS对象的信息，本质是一个字符串
//JSON可以以字符串的形式表示 JS基本数据类型变量和对象（引用）类型变量
var obj1="xxx";
var obj2=23;
var obj3=false;
var obj4={x:1,y:2,a:[1,3,5],b:"xyz"};
var obj5=[123,456];
var obj6=[{z:3},[1,2]];
var obj7={x:true};

var json1='"xxx"';
var json2='23';
var json3='false';
var json4='{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5='[123,456]';
var json6='[{"z":3},[1,2]]';
var json7='{"x":true}';

//在线测试工具http://www.json.cn/
var j1='[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2='{"x":1,"y":"2"}';

var foo=new Function("x","y","return x>y?x:y");
foo(2,3);
//3

var af=["x","y","return x<y?x:y;"];
var fee=new Function(af[0],af[1],af[2]);
fee(2,3);
//2
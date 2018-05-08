//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());
//1525700912125
//以毫秒为单位返回当前时间（从1970年1月1日00：00：00开始计算）
console.log((new Date()).getTime());
//1525700912126

console.log(Date.parse("1970-01-01"));
//0
//dateTimeString字符串转换成毫秒(与1970年1月1日00：00：00比较)
console.log(Date.parse("1970-01-02"));
//86400000（与1970年1月1日00：00：00比较正好是一天的毫秒）

console.log(Date.UTC(2017,9,1));
//1506816000000
//将给定的日期转换为毫秒，解释为UTC，协调世界时间


//Date原型方法 getter和setter相关
var d=new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 25 8
//getDay()是显示星期几
console.log(d.getTimezoneOffset());
//-480
d.setDate(11);//setDate() 方法用于设置一个月的某一天
//279590400000
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
//1999 5 4 3 8

//Date原型方法 转换成字符串相关
var d=new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
//15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString());
//Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON());
//2012-04-21T07:07:23.234Z
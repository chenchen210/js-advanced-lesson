//日期格式实例
// YYYY-MM-DDTHH:mm:ss.sssZ(注意这是个点)
console.log(Date.parse("2010-01-01 11:12:23.111"));
//1262315543111
//parse()解析一个日期时间字符串，并返回 1970/1/1 午夜距离该日期时间的毫秒数
console.log(new Date("2010-01-01 11:12:13.111"));
//Fri Jan 01 2010 11:12:13 GMT+0800 (中国标准时间)
console.log(new Date().toISOString());
//toISOString()使用ISO标准将 Date 对象转换为字符串
//2018-05-08T09:22:57.150Z

console.log(Date.parse("2010-01-01T11:12:23.111Z"));
console.log(new Date("2010-01-01T11:12:23.111Z"));
console.log(new Date().toISOString());
/*
1262344343111
Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)
2018-05-08T09:46:01.197Z 
*/

//日期格式（无时间）
console.log(new Date("2001"));
console.log(new Date("2001-02"));
console.log(new Date("2001-02-22"));
/*
Mon Jan 01 2001 08:00:00 GMT+0800 (中国标准时间)
Thu Feb 01 2001 08:00:00 GMT+0800 (中国标准时间)
Thu Feb 22 2001 08:00:00 GMT+0800 (中国标准时间)
只是给出年份时，时间、日期按照默认的走，给什么，什么按照给的走
*/

//时间的比较和运算，内部转化为数字进行比较和运算
//（从1970年1月1日00：00：00开始计算）
//getTime()返回距 1970 年 1 月 1 日之间的毫秒数
console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));
/**
0
84600000
-315532800000
true
84600000
Thu Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)86400000
*/

//时间运算 和 时间综合练习 输出50天后是几月几号，星期几？
var today=new Date();
console.log(new Date(today.getTime()+50*84600000));
//Tue Jun 26 2018 19:35:28 GMT+0800 (中国标准时间)
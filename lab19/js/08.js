var date1=new Date(2017,9,18,12,34,1);
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)
//东八区，比英国早8个小时，这里月份为10月，大输入的一个月

var date2=new Date(17,9,18,12,34,1);
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)
//year若为俩位数，则自动加上1900，此处也是输出大输入一个月

var date3=new Date("2017-08-09");
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)
//此处的月份为8月，输出与输入的月份是一致的

var date4=new Date(0);
console.log(date4);
//Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)

var date4=new Date(1000);//这里的1000是1000毫秒，即1秒
console.log(date4);
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date5=new Date();//与new Date(Date.now())等价
console.log(date5);
//Mon May 07 2018 21:38:01 GMT+0800 (中国标准时间)

var date5=new Date(Date.now());
console.log(date5);
//Mon May 07 2018 21:39:51 GMT+0800 (中国标准时间)

//无效日期
var date6=new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1=new Date();//----------用new实例化对象
var d2=Date();//-----------作为函数使用，结果为字符串
console.log(d1,typeof d1);
//Mon May 07 2018 21:43:23 GMT+0800 (中国标准时间)  "Object"
console.log(d2,typeof d2);
//Mon May 07 2018 21:43:23 GMT+0800 (中国标准时间)  string

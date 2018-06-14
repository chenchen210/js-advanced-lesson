// 在ES5中，RegExp构造函数的参数有俩种情况
// 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
var regex=new RegExp('xyz','i');
//等价于
var regex=/xyz/i;

// 第二种情况是，参数是一个正则表达式，这是会返回一个原有的正则表达式的拷贝
var regex=new RegExp(/xyz/i);
//等价于
var regex=/xyz/i;
// 但是，ES5不允许此时使用第二个参数，添加修饰符，否则会报错
var regex=new RegExp(/xyz/,'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another

// ES6改变了这种行为，如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符
// 而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只是用指定的修饰符。
new RegExp(/abc/ig,'i').flags;//i

// (粘连sticky)修饰符
var s='aaa_aa_a';
var r1=/a+/g;
var r2=/a+/y;
r1.exec(s);//[aaa]------从下标为0开始匹配，匹配输出后，下标从3开始
r2.exec(s);//[aaa]------从下标为0开始匹配，匹配输出后，下标从3开始
r1.exec(s);//[aa]-------从下标为3开始匹配，匹配输出后，下标从6开始
r2.exec(s);//null-------从下标为3开始匹配，但是 _aa_a 不符合从头匹配，输出null
//由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。

var r=/hello\d/y;
r.sticky;//true

// ES5的source属性
//返回正则表达式的正文
/abc/gi.source
//abc

// ES6的flags属性
//返回正则表达式的修饰符
/abc/ig.flags
//gi
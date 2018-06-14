// ES6为字符串添加了遍历器接口，使得字符串可以被for...of遍历循环
for(let codePoint of "foo"){
    console.log(codePoint);
}
/*
f
o
o
*/

for(let key in 'foo'){
    console.log(key);
}
/*
0
1
2
*/

// 提供新的方法用于查找、判和生成字符串
var s='Hello world!';
s.startsWith('Hello');//true
s.endsWith('!');//true
s.includes('o');//true

// 第二个参数，表示开始搜索的位置
var s='Hello world!';
s.startsWith('world',6);//true
s.endsWith('Hello',5);//true-------------这个的第二个参数代表的是截止位置
s.includes('Hello',6);//false

// repeat方法返回一个新字符串，表示将原字符串重复n次
'x'.repeat(3);//"xxx"
'hello'.repeat(2);//"hellohello"
'na'.repeat(0);//""
//参数如果是小数会被取整        
'na'.repeat(2.9);"nana"

// 如果repeat的参数是负数或者Infinity，会报错
'na'.repeat(Infinity);
//RangeError
'na'.repeat(-1);
//RangeError
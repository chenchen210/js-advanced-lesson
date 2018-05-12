//lastIndex（）下一个匹配的索引值
var reg1=/\w/;
var reg2=/\w/gi;
console.log(reg1.global,reg1.ignoreCase,reg1.multiline,reg1.lastIndex,reg1.source);
console.log(reg2.global,reg2.ignoreCase,reg2.multiline,reg2.lastIndex,reg2.source);
/**
false false false 0 "\w"
true true false 0 "\w"
*/
//reg1的global是定义在\w上的

console.log(reg2.lastIndex);//0
reg2.test("abc23def");
console.log(reg2.lastIndex);//1
reg2.test("abc23def");
console.log(reg2.lastIndex);//2

while(reg2.test("abc23def")){
    console.log(reg2.lastIndex);
}
//3 4 5 6 7 
//每一次的匹配都是一个进阶，即下标加1（向后走一个）

//exec()---检索字符串中正则表达式的匹配，有就返回数组，没有就返回null
var reg3 = /\w/gi;
var str = "slfls3r3sfsf";
var returnArray1 = reg3.exec(str);
console.log(reg3.lastIndex,returnArray1);
/**
1 ["s", index: 0, input: "slfls3r3sfsf", groups: undefined]
*/

var returnArray2=reg3.exec(str);
console.log(reg3.lastIndex,returnArray2);
/**
2 ["l", index: 1, input: "slfls3r3sfsf", groups: undefined]
*/

var returnArray3;
while(returnArray3=reg3.exec(str)){
    console.log(reg3.lastIndex,returnArray3);
}
/**
3 ["f", index: 2, input: "slfls3r3sfsf", groups: undefined]
4 ["l", index: 3, input: "slfls3r3sfsf", groups: undefined]
5 ["s", index: 4, input: "slfls3r3sfsf", groups: undefined]
6 ["3", index: 5, input: "slfls3r3sfsf", groups: undefined]
7 ["r", index: 6, input: "slfls3r3sfsf", groups: undefined]
8 ["3", index: 7, input: "slfls3r3sfsf", groups: undefined]
9 ["s", index: 8, input: "slfls3r3sfsf", groups: undefined]
10 ["f", index: 9, input: "slfls3r3sfsf", groups: undefined]
11 ["s", index: 10, input: "slfls3r3sfsf", groups: undefined]
12 ["f", index: 11, input: "slfls3r3sfsf", groups: undefined] 
*/

//RegExp静态属性
console.log(RegExp.$_);
console.log(RegExp.lastMatch);

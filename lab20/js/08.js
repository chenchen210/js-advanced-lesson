//-----------Part1 RegExp.prototype.test 方法-----------
var regExp=/a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp = /a/gi;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false--加上全局，下标从1开始，自然没有a匹配
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//false--下标又从1开始，自然没有a匹配

while (regExp.test("aaa")){
    console.log(regExp.lastIndex);
}
//1 2 3
//每次执行后从上一次结束的地方开始重新匹配

//------------Part2 RegExp.prototype.exec 方法------------ 
//可以获得更为详细的信息，返回一个有属性的数组，
//属性index表示匹配到的位置
//对于非全局模式下返回第一个匹配的和所有的分组项，正则对象的lastIndex不起作用
var execExp = /\d{1,2}(\d)(\d)/;
var retExp = execExp.exec("12s342dsfsf233s");
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
console.log(retExp instanceof Array,retExp,execExp.lastIndex);
/**
true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0
true (3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 0 
*/

//对于全局模式下 每检测一次lastIndex增加一次，再次用此正则对象匹配时，匹配的起始点为上一次的lastIndex
var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);
console.log(execExp2.exec(ts),execExp2.lastIndex);
/**
(3) ["342", "4", "2", index: 3, input: "12s342dsfsf233s", groups: undefined] 6
(3) ["233", "3", "3", index: 11, input: "12s342dsfsf233s", groups: undefined] 14
*/
var ret2;
while (ret2 = execExp2.exec(ts)){
    console.log(execExp2.lastIndex);
}
//6 14
//每次执行后上一次匹配结束的地方开始重新匹配？
//g全局，i忽略大小写，m换行
//正则对象的俩种基本使用方式 1.字符串方法（正则对象）2.正则对象。正则方法（字符串）
var regExp=/ab/i;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//Ab-----["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]

var regExp=/ab/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(2)["Ab", "aB"] 

var regExp=/a*b/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(3)["Ab","aaB","b"]
//a*b有三种情况：1.ab 2.b 3.aab

var regExp=/a*b/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(1)["aaB"]
//a.b是从开头找，某个字符的左右字符分别是a、b

//test初步了解
var regExp=/a/i;
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true
console.log(regExp.test("ab"));//true

var regExp=/a/gi;
console.log(regExp.test("ab"));//true-----index=0
console.log(regExp.test("ab"));//false----从index=1处开始找，没有为false
console.log(regExp.test("ab"));//true----从index=0开始找
console.log(regExp.test("ab"));//false----从index=1处开始找，没有为false
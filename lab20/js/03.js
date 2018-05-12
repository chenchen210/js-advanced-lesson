//正则表达式
//匹配一个词的边界 \b 一个词的边界不被另一个词的跟随的位置或者不是另一个词汇字符前边的位置
//注意：一个匹配的词的边界并不包含在匹配的内容中
console.log(/oo/.test("moom"));//true
console.log(/oo\b/.test("moon"));//false
console.log(/oon\b/.test("moon"));//true
console.log(/\boo/.test("moon"));//false

//search()如果没有找到任何匹配的子串，则返回 -1
console.log("moon".search(/oo/));//1
console.log("moon".search(/oo\b/));//-1
console.log("moon".search(/oon\b/));//1
console.log("moon".search(/\boo\b/));//-1

//匹配一个非单词边界 \B 匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词
//一个字符串的开始和结尾都被认为是非单词
//test()一个在字符串中测试是否匹配的RegExp方法，它返回true或false
console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//true
//结果与\b相反就是了

//match()一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null
console.log("moon".match(/oo\B/));
//["oo", index: 1, input: "moon", groups: undefined]
console.log("moonoonxoo".match(/oo\B/));
//["oo", index: 1, input: "moonoonxoo", groups: undefined]
console.log("moon".match(/oon\B/));//null---前后类型不一致
console.log("moo".match(/\Boo\B/));//null---前后类型不一致

"noonday".replace(/\Boo/,"xx");//nxxnday
"noonday".search(/\Boo/);//1

//练习将"aaa"替换为"axa"
"aaa".replace(/\Ba\B/,"x");

"possibly yesterday".replace(/y\B./,"aaa");//"possibly aaasterday"
//possibly yesterday中替换的那个地方必须包含y，二y后面跟的那个东西的前后类型必须一致，所以只能是ye
"possibly yesterday".replace(/y\B/,"aaa");//"possibly aaaesterday"
//此处的正则是“y”----non-word boundary，所以是第二个y

/**
\d匹配一个数字等价于[0-9]  例如，/\d/ 或者 /[0-9]/ 
匹配"B2 is the suite number."中的'2'
* "B2 is the suite number.".replace(/\d/,"x");
 
\D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 
匹配"B2 is the suite number."中的'B'
* "B2 is the suite number.".replace(/\D/,"x");
*/

/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
"apple," .replace(/\w/,"x");
"$5.28,".replace(/\w/,"x");
"3D." .replace(/\w/,"x");
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。

"50%.".replace(/\W/,"x"); 
*/

// \s匹配一个空白字符 例如, /\s\w*/ 
//匹配"foo bar."中的' bar'--"foo bar.".replace(/\s\w*/,"x");

// \S匹配一个非空白字符 例如, /\S\w*/
//匹配"foo bar."中的'foo'--"foo bar.".replace(/\S\w*/,"x");

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");//sdafsa sdfe*
"sdafsa sdfea2s".replace(/a\Ds/g,"*");//sd**dfea2s
"sdafsa sdfea2s".replace(/a\ws/g,"*");//sd*a sdfe*
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//sdafs*dfea2s

var str="test22314234244dgfqeqe232qe13ed";
var newStr=str.search(/\dqe/);
console.log(newStr);//24
str.replace(/\dqe/,11223344);
console.log(str);//test22314234244dgfqeqe232qe13ed

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 
//而/y\B./匹配"possibly yesterday"中得'ye'
console.log("noonday".match(/\B../));//["oo", index: 1, input: "noonday", groups: undefined]
console.log(/\B../.test("noonday"));//true
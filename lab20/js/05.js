//贪婪模式与非贪婪模式
"12345678".replace(/\d{3,6}/,"X");
//贪婪模式   X78
"12345678".replace(/\d{3,6}?/,"X");
//非贪婪模式  X45678
"12345678".replace(/\d{3,6}?/g,"X");
//非贪婪模式  XX78

//正则表达式的分组
console.log("NameNameName_11111".replace(/Name{3}/,"X"));
//NameNameName_11111--------这个是指连续的3个e
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));
//X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));
//a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));
//Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));
//Xe5
console.log("a1b2c3d4e5".replace(/([a-z\d]){3,4}?/,"X"));
//X2c3d4e5

//与分组相关的 或
"abcdefghijk".replace(/abcde|fghijk/g,"X");
//XX
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");
//abcdefghijk_X_X

//将"xxabccxxdexx"替换为"yyabccxxdeyy"
"xxabccxxdexx".replace(/(\bxx)|(xx\b)/g,"yy");
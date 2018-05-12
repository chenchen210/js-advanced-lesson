//-------------------Part 1----------------------
//字符类
console.log("absxsdfe123Ab".replace(/[abd]/,"X"));
//Xbsxsdfe123Ab----正则是 one of[a,d,d];
console.log("absxsdfe123Ab".replace(/[abd]/g,"X"));
//XXsxsXfe123AX
console.log("absxsdfe123Ab".replace(/[abd]/gi,"X"));
//XXsxsXfe123XX

//字符类 的取反[^]
console.log("absxsdfe123Ab".replace(/[^abd]/,"X"));
//abXxsdfe123Ab
console.log("absxsdfe123Ab".replace(/[^abd]/g,"X"));
//abXXXdXXXXXXb
console.log("absxsdfe123Ab".replace(/[^abd]/gi,"X"));
//abXXXdXXXXXAb

//范围类
console.log("12345667".replace(/[3-9]/gi,"X"));
//12XXXXXX
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));
//XXsxsXXXXXXXX
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));
//absxsdfX23Ab
//如果单独替换，则需要分组，见后续
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));
//absxsdfX2Xb

//思考：如何匹配 -
console.log("2017-10-23".replace(/[0-9]/g,"X"));
//XXXX-XX-XX
console.log("2017-10-23".replace(/[0-9-]/g,"X"));
//XXXXXXXXXX

// \d、\D、\w、\W、\s、\S 用[]如何表示
/**
[0-9]
[^0-9]
[a-zA-Z0-9]匹配一个单字字符（字母、数字或者下划线）
[^a-zA-Z0-9]
[\t\n\x0B\f\r]匹配一个空白字符
[^\t\n\x0B\f\r]
*/

//关于 . 除了回车和换行符之外的所有字符
/ab[0-9][^\r\n]/ //等效于/[ab\d.]/
console.log("@abc@123@".replace(/@./g,"Q"));
//QbcQ23@
console.log("@abc@123@".replace(/.@/g,"Q"));
//@abQ12Q

//-------------------Part 2----------------------
//关于边界 ^ $ \b \B
console.log("This is a Boy is".replace(/is/g,0));
//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/^is/g,0));
//This is a Boy is
console.log("This is a Boy is".replace(/is$/g,0));
//This is a Boy 0
console.log("This is a Boy is".replace(/is\b/g,0));
//Th0 0 a Boy 0
console.log("This is a Boy is".replace(/is\B/g,0));
//This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0));
//This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0));
//Th0 is a Boy is

//-------------------Part 3----------------------
//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));
//0Bb0b_0aBbb0ba

//+ 出现1次或多次（至少出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));
//0BbAb_0BbbAba

//* 出现0次或多次（任意次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));
//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));
//0BbAb_0aBbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));
//AaBbAb_0BbbAba

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));
//0BbAb_0BbbAba

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));
//AaBbAb_0BbbAba000
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));
//AaBbAb_0BbbAba0aa00

//注意：0到n次的写法{0,n}而不是{,n}

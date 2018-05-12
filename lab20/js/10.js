//1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
//2、联通号段有130，131，132，145，155，156，176，185，186
//3、电信号段有133，153，177，180，181，189
//将电话号码进行分类
var numbers = [
    13335361211, 13897516385, 15022457757, 15191936306, 18693949497,
    13933314962, 13138569753, 13125634288, 18168751105, 13240288945,
    13098645914, 15603692153, 13455257780, 15916685067, 14701124042,
    13089741902, 15560351609, 1211131444, 13017332800, 18937330815,
    15699699730, 13895038245, 18653855868, 15324150371, 13202536075,
    15873730173, 18828673819, 17658565118, 13069428953, 13814537603
];
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
for(var i=0;i<numbers.length;i++)
{
    if(/1(3[4-9]|47|5[0127-9]|78|8[2-47-8])\d{8}/.test(numbers[i])){
        CMCC.push(numbers[i]);
    }else if(/1(3[0-2]|45|5[5-6]|76|8[5-6])\d{8}/.test(numbers[i])){
        CUCC.push(numbers[i]);
    }else if(/1(33|53|77|8[0-1]|89)\d{8}/.test(numbers[i])){
        CTCC.push(numbers[i]);
    }else{
        Others.push(numbers[i]);
    }
}
console.log("移动号码：",CMCC);
console.log("联通号码：",CUCC);
console.log("电信号码：",CTCC);
console.log("其他号码：",Others);
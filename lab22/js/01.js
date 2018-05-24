//------------------Math对象属性---------------
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);
console.log("------------------");
/*
3.141592653589793
2.718281828459045
0.6931471805599453
2.302585092994046
1.4426950408889634
0.4342944819032518
------------------
*/

//------------------Math对象属性---------------
console.log(Math.random());//---------------返回介于 0 ~ 1 之间的一个随机数
console.log(Math.abs(-123.456));//----------取绝对值
console.log(Math.pow(2,3),Math.pow(4,0.5));//a的b次方
console.log(Math.sqrt(256));//--------------开平方
console.log("---------------");
/*
0.6762615772368901
123.456
8 2
16
---------------
*/

//Math.round()返回一个数字四舍五入后最接近的整数
//Math.ceil()返回大于或等于其数字参数的最小整数值
//Math.floor()返回小于参数x的最大整数,即对浮点数向下取整
console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60));
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50));
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40));
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));
/*
1 1 0
1 1 0
0 1 0
0 1 0
-4 -4 -5
-5 -4 -5
*/
console.log(Math.max(5,7),Math.max(5,7));
console.log(Math.max(-3,5),Math.max(-3,5));
console.log(Math.max(-3,-5),Math.max(-3,-5));
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));
console.log("------------------");
/*
7 7 
5 5 
-3 -3
7.3 7.3
------------------
*/

//------------------Math三角方法---------------
//角度转弧度方法
function toRadians(degrees){
    return degrees/180*Math.PI;
}
console.log(toRadians(180));

//弧度转角度方法
function toDegrees(randians){
    return randians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));
console.log("---------------");

console.log(Math.sin(toRadians(90)));
console.log(Math.cos(toRadians(180)));
console.log("---------------");
/*
3.141592653589793
45
---------------
1
-1
---------------
*/

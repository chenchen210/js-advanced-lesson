var a=34;
if(a=45){
    console.log("是否会输出？");
}//是否会输出？

var b=34;
if(45==b){
    console.log("是否会输出？");
}//不输出

console.log("1"+"2");//12
console.log("1"+2);//12
console.log(1+{});//1[object Object]
console.log(true+true);//2
console.log("5"-2);//3

var x="1";
console.log(++x);//2~~~~~~~ ++ --有隐式类型转换的功能，将字符串转换为数字
var x="1";
console.log(x+1);//11

var x="1";
console.log(x+=1);//11  +=、-=不会做类型转换
var x=1;
console.log(x+=1);//2

var i=1;
var y= ++i + ++i + ++i;
console.log(y);//9

console.log(3===3);//true
console.log(3==="3");//false
console.log(3=="3");//true
console.log(3==new String(3));//true
console.log(3===new String(3));//false

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1!==obj2);//true
console.log(obj1!=obj2);//true
console.log(obj1!=new String("xyz"));//true

var obj1=new String("xyz");
var obj2=new String("xyz");
console.log("xyz"===obj1);//false
console.log(obj1==obj2);//false
console.log(obj1===obj2);//false
console.log(obj1==new String("xyz"));//false

console.log(2==2);//true
console.log(new Number(2)==new Number(2));//false
console.log(2==new Number(2));//true   引用类型转换为基本类型

//---------------------------------------逻辑运算符进阶（&&、||）
console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2"==2));//false
console.log(false&&false);//false

console.log(2>1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2"==2));//true
console.log(false||false);//false

//-----------------------短路原则
console.log(2&&4);//4
console.log(0&&4);//0
console.log({x:2}&&{name:"jack"});//{name:"jack"}
console.log(null&&"hello");//null
console.log({}&&"world");//"world"

console.log(2||4);//2
console.log(0||4);//4
console.log({x:2}||{name:"jack"});//{x:2}
console.log(null||"hello");//"hello"
console.log({}||"world");//{}

console.log((new Boolean(false))&&234);//234
console.log((new Boolean(false))||234);//Boolean{false}

var score=76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
//良
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||(score<60&&"不及格"));

var sum=function(a,b,c){
    b=b||4;
    c=c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8------1+2+5
console.log(sum(1));//10-------1+4+5
console.log(sum(1,0,0));//10----1+4+5

var sum=function(a,b,c){
    if(b!=false){b=b||4;}
    if(c!=false){c=c||5;}
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8  -------undefined!=false
console.log(sum(1));//10
console.log(sum(1,0,0));//1
var f=function(v){
    return v+1;
}
f(3);//4

var f=v=>v+1;
// var f=(v)=>v+1;单数参数可以不用（），单语句可与不用return关键字
f(2);//3


// 没有参数和有多个参数的情况下，需要使用小括号来表示参数，
// 如果有多条语句则需要大括号表示函数体
var f=()=>5;
// 等同于
var f=function(){
    return 5;
};

var foo=(num1,num2)=>{
    if(num1>num2){
        return num1*2;
    }else{
        return num2*2;
    }
};
// foo(2,3);6
// foo(3,2);6
// 等同于
var foo=function(num1,num2){
    if(num1>num2){
        return num1*2;
    }else{
        return num2*2;
    }
};
// foo(2,3);6
// foo(3,2);6


var max=function(a,b){
    return a>b?a:b;
};

// 箭头函数可以与变量解构结合使用
const full=({first,last})=>last+' '+first;
full({first:"Ming",last:"Li"});
// "Li Ming"
// 等同于
function full({first,last}){
    return last+' '+first;
}
full({first:"Ming",last:"Li"});

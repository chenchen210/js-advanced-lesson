var tmp=100;
function foo(x){
    var tmp=3;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var fee=foo(2);
fee(10);//16
fee(10);//17
fee(10);//18
//闭包+静态词法作用域

function f1(m){
    var z=100;
    function f2(x){
        return function(y){
            console.log(x+y+(++z));
        }
    }
    return f2(m);
}
var f3=f1(2);
f3(10);//113
f3(10);//114
/**
 x---2;y----10;z----100
 x属于f2闭包，z属于f2闭包
 */

 function foo(x){
     var tmp=3;
     return function(y){
         x.count=x.count?x.count+1:1;
         console.log(x+y+tmp,x.count);
     }
 }
 var age=new Number(2);
 var bar=foo(age);//和相关作用域形成一个闭包
 bar(10);//15 1----x.count都是undefined
 bar(10);//15 2
 bar(10);//15 3

 function fn(){
     var max=10;
     return function bar(x){
         if(x>max){
             console.log(x);
         }else{
             console.log(max);
         }
     }
 }
 var f1=fn();
 var max=100;
 f1(15);//15
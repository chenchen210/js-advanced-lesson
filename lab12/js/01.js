function f1(){
    var x=1;
    function f2(){
        return x++;
    }
    return f2();
}
var f3=f1();
console.log(f3);
console.log(f3);
//1
//1
/**
 f3返回f1的运行结果，而f1返回f2的运行结果
 f2返回x的后++，即先进行返回值在进行++运算
 输出一次后，作用域被释放
 */

 function f1(){
     var x=1;
     function f2(){
         return x++;
     }
     return f2;
 }
 var f3=f1();
 console.log(f3());
 console.log(f3());
 //1
 //2
 /**
  * 第一个console.log返回f3的调用结果，f3返回f1的调用结果
  f1调用返回f2函数及f2的词法作用域，及f2的闭包
   var x=1;
    function f2(){
        return x++;
    }
 第一次返回1，但是该表达式并未释放作用域，所以第二次调用时返回2
  */

  function creareInc(startValue){
      return function(step){
          startValue+=step;
          return startValue;
      }
  }
  var inc=creareInc(5);
  console.log(inc(1));//6
  console.log(inc(2));//8
  var inc2=creareInc(5);
  console.log(inc(1));//9
  console.log(inc2(1));//6
  /**
6-----var inc=creareInc(5)-》说明startValue值为5，inc（1）-》step值为1
结果为6，但是作用域未被释放，startValue值变为6，inc为2，运行结果为8
以此类推，9就是这样来的，最后一个6是重新定义的一个函数，一切从头再来
   */

function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar();
}
foo();
foo();
//1
//1----第一次调用后变量的生命周期就被结束，变量被释放

function foo(){
    var i=0;
    function bar(){
        console.log(++i);
    }
    return bar;
}
var a=foo();
var b=foo();
a();//1------闭包
a();//2------闭包（作用域未被释放）
b();//1------闭包（重现开始的一个函数）
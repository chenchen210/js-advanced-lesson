//ES5作用域与变量共享问题
function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++){
        getNumFuncs[i]=function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();
//10
/**
 ES5里面没有作用域块，所以var前提
 function f(){
    var getNumFuncs=[];
    var i=0
    for(;i<10;i++){
        getNumFuncs[i]=function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();

每次运行for都会将数组里面的内容刷新，结果就是10（for是一次性运行完的）
所以不论是tmp[x]（），结果都是10
 */

 function f(){
     var getNumFuncs=[];
     for(var i=0;i<10;i++){
         (function(j){
             getNumFuncs[j]=function(){return j;};
         })(i);
     }
     return getNumFuncs;
 }
 var tmp=f();
 tmp[3]();
 //3
 /**
tmp[0]();==============0
tmp[9]();==============9
增添了立即执行表达式，所以结果是期望的结果
  */

  function f(){
      var getNumFuncs=[];
      var j;
      for(var i=0;i<10;i++){
          j=i;
          getNumFuncs[i]=function(){
              return j;
          };
      }
      return getNumFuncs;
  }
  var tmp=f();
  tmp[3]();
  //9
/*
tmp[0]();     tmp[9]();
结果均为9，这个同第一个，但是j是被i赋值，在循环里面i最大为9，所以结果为9
*/
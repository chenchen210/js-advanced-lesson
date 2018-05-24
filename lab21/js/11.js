//异常处理基本形式
//try语句的形式
/**
try...catch
try...finally
try...catch...fianlly 
*/
try{
    console.log("try_statements");
    throw "Some Error";
}
catch(e){
    console.warn("catch_statments");
}
finally{
    console.log("finally_statments");
}
/**
try_statements
catch_statments
finally_statments 
*/

/*
catch语句包含要执行的语句，当try抛出错误时，主动权到达catch的手上
如果try没有错误抛出，则跳过catch语句
finally子句---无论是否有异常抛出，它总是会被执行 
try语句可以嵌套一个或者更多个try语句，如果内部的try语句没有catch子句
那么将会进入包围它的try语句的catch子句
*/
try{
    try{
        throw "ErrorMessage11";
    }
    catch(e){
        throw "ErrorMessage22";//抛出异常后，将跳出catch
        console.log("inside catch",e);
        throw "ErrorMessage22";
    }
    finally{
        console.log("finally 111");
    }
}
catch(e){
    console.log("outside catch",e);
}
finally{
    console.log("finally 222");
}
/**
finally 111
outside catch ErrorMessage22
finally 222 
*/

//关于console
console.log("logInfo");
console.warn("warnInfo");
console.error("errorInfo");
console.assert(3>2,"有问题的话会输出这句话11111");//没问题，不输出信息
console.assert(2==="2","有问题的话会输出这句话22222");
/*
logInfo
warnInfo
errorInfo
Assertion failed: 有问题的话会输出这句话22222 
*/

//Part 22 --------------嵌套的try-blocks
try{
    try{
        throw "oops";
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.error("outer",ex);
}
/*
finally
outer oops
*/

try{
    try{
        throw "oops";
    }
    catch(ex){
        console.error("inner",ex);
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.error("outer",ex);
}
/**
inner oops
finally 
*/

try{
    try{
        throw "oops";
    }
    catch(ex){
        console.error("inner",ex);
        throw "ex";
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.error("outer",ex);
}
/**
inner oops
finally
outer oops 
*/

try{
    try{
        throw "oops";
    }
    catch(ex){
        console.warn("inner",ex);
        throw ex;
    }
    finally{
        console.log("finally");
    }
}
catch(ex){
    console.warn("outer",ex);
}
/*
inner oops
finally
outer oops 
*/

//Part 3
try{
    function abc(x,cb){
        console.log(x);
        cb();
    }
    abc("xx",function(){
        var arr=new Array(-1);
    });
}
catch(e){
    console.log(e);
}
/*
xx
*/
try{
    function abc(x,cb){
        console.log(x);
        cb();
    }
}
catch(e){
    console.log(e);
}
abc("xx",function(){
    var arr=new Array(-1);
});
//xx
//报错

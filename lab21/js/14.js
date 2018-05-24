//不论是否抛出异常，finally是一定要执行的
//------------Part 1 引用错误案例  ReferenceError
//var y=23;
try{
    var x=y;//-----------------因为没有定义y所以产生赋值错误，定义了y的话，则不会抛出异常
    // console.log("x")=23;
}catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
/*
ReferenceError y is not defined
finally
*/
try{
    console.log("x")=23;//---------------赋值引用错误
}catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
/*
x
ReferenceError Invalid left-hand side in assignment
finally
*/

//------------Part 2 范围错误 RangeError------------
try{
    var a=new Array(-1);//--------------抛出异常
}catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
/*
RangeError Invalid array length
finally
*/
try{
    var a=new Array(1);//-------------未抛出异常
}catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
//finally

//---------Part 3 类型错误 TypeError-------------
try{
    var a;//--------------这只是声明了一个变量
    a.aa();//-------------这个整的啥也不是（给变量添加了属性），即将抛出异常
}
catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
/*
TypeError a.aa is not a function
finally
*/
try{
    var a=new 123;//---------没见过，抛出异常
}
catch(e){
    console.log(e.name,e.message);
}
finally{
    console.log("finally");
}
/*
TypeError 123 is not a constructor
finally
*/

//自定义错误
function UserError(message,name){
    this.message=message||'默认信息';
    this.name=name||'UserError';
}
UserError.prototype.__proto__=Error.prototype;
// UserError.prototype=new Error();
// UserError.prototype.constructor=UserError;

//错误类型测试
try{
    throw new RangeError();
    // throw new TypeError();-----------输出TypeError
    // throw new ReferenceError();------输出ReferenceError
}catch(e){
    if(e instanceof TypeError){
        console.log("TypeError");
    }else if(e instanceof RangeError){
        console.log("RangeError");
    }else if(e instanceof ReferenceError){
        console.log("ReferenceError");
    }else{
        console.log("OtherError");
    }
}
//RangeError

try{
    throw n;//抛出一个异常数
}catch(e){
    if(e<=50){
        //异常在1-50之间时，直接处理
    }else{
        //异常无法处理时，重新抛出，可在外层再次被捕获
        throw e;
    }
}

//自定义错误
//输入月份异常案例  可以在外层进行捕获异常错误
function UserException(message){
    this.message=message;
    this.name="UserException";
}
UserException.prototype.__proto__=Error.prototype;
function getMonthName(mo){
    mo=mo-1;//调整月份数字到数组索引
    var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if(months[mo]!==undefined){
        return months[mo];
    }else{
        throw new UserException("InvalidMonthNo");
    }
}
try{
    //statements to try
    var myMonth=15;//-------------超出边界引发异常
    var monthName=getMonthName(myMonth);
}catch(e){
    var monthName="unknown";
    console.log(e.message,e.name);
}
//InvalidMonthNo UserException

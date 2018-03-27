//函数对象属性之arguments实参集合（类数组对象）
var foo=function (a,b) {
    console.log(arguments);//[1,2,3,4]---类似数组的一个对象
    // arguments是Symbol类型，独一无二，具体后讲
    console.log(arguments===test.arguments);//报错
    console.log(arguments.length);//4
    var args=Array.prototype.splice.call(arguments,0);
    console.log(args);//[1,2,3,4]
};
foo(1,2,3,4);

//函数对象属性之length形参个数
function checkVarCount(a,b) {
    if(checkVarCount.length!==arguments.length){
        alert("The count of the parmeters you passed into the function doesn't match the function definition");
    }else{
        alert("Successfully call the function");
    }
}
checkVarCount(1,2);//Successfully call the function
checkVarCount(1);
//The count of the parmeters you passed into the function doesn't match the function definition

//函数对象属性之caller获取当前函数的函数。例一
function test(){
    if(test.caller==null){
        console.log("test is called from the toppest level");
    }else{
        console.log("test is called from the function:");
        console.log(test.caller.toString());
    }
}
//caller属性只有当函数执行时才被定义
console.log("没有调用的情况下test.caller为：",test.caller);
test();
/*
没有调用的情况下test.caller为：null
test is called from the toppest level
*/
function testOuter(){
    test();
}
testOuter();
/*test is called from the function:
function testOuter(){
    test();
}*/

// 例二：
var obj={
    foo1:function(){
        console.log(this.foo1.caller);
    },
    foo2:function abc(){
        this.foo1();
    }
};
obj.foo1();
obj.foo2();
/*
 null
ƒ abc(){
    this.foo1();
}
*/
//函数对象属性之callee返回正被执行的Function对象，即指定的Function的正文
// callee属性是arguments对象的一个成员，该属性仅当相关函数正在执行时才用。
// 通常该属性被用来递归调用匿名函数
var func=function(){
    if(n<=0){
        return 1;
    }else{
        return n*func(n-1);
        //reutrn n*arguments.callee(n-1);
    }
};
console.log(funct(4));//24
(function(n){
    if(n<=0){
        return 1;
    }else{
        return n*arguments.callee(n-1);
    }
}(4));//24

//-----------------------------------函数属性prototype
/*获取对象的原型，每一个构造函数都有一个prototype属性，指向另一对象
对这个对象所有的属性和方法，都会被构造函数的实例继承*/
function Man(name,age){
    this.name=name;
    this.age=age;
}
Man.prototype.sex="M";
Man.prototype.sayHi=function(){
    console.log("Hi,i'm",this.name);
};
var li=new Man("Leo",10);
li.sayHi();//Hi,i'm Leo
console.log(li.sex);//"M"
Man.prototype.isString=true;
console.log(li.isString);//true
/*其他相关属性
constructor获取创建某个对象的构造函数，可以用来判断对象是哪一类
var x=new String("Hello");
if(x.constructor==string){
    console.log("Object is a String.");
}
function MyObj(){
    this.number=1;
}
var y=new MyObj();
if(y.constructor==MyObj){
    console.log("Objrct constructor id MyObj.")
}
 */

 /*===================================call、apply
  call是将所有的参数列举出来，用逗号分隔
  apply的第二个参数类型必须是Array
  */
  function swim(m,n){
      console.log("i'm: "+this.name+" i can swim_ ",m,n);
  }
  var bird={
      name:"bird",
      fly:function(m,n){
          console.log("i'm: "+this.name+" i can fly_ ",m,n)
      }
  };
  var person={
      name:"person"
  };
  swim(1,2);//i'm:  i can swim_ 1,2
  swim.call(person,3,4);//i'm: person i can swim_ 3,4
  bird.fly(5,6);//i'm: bird i can fly_ 5,6
  bird.fly.call(person,7,8);//i'm: person i can fly_ 7,8
  bird.fly.apply(person,[9,10]);//i'm: person i can fly_ 9,10
  swim.call(null,1,2);//i'm:  i can swim_ 1,2
  swim.apply(person,[9,10]);//i'm: person i can swim_ 9,10
  bird.fly.apply(person,[11,12]);//i'm: person i can fly_ 11,12
  swim.apply(null,[13,14]);//i'm: i can swim_ 13,14

 //============================================绑定
var x=45;
var obj={
    x:23,
    test:function(){
        function foo(){
            console.log(this.x);//23
        }
        foo.bind(this)();
        foo();//45
    }
};
obj.test();
//23
//45

var checkNumericRange=function(value){
    if(typeof value!=='number')
        return false;
    else
        return value>=this.minimum&&value<=this.maximum;
};
var range={minimum:10,maximum:20};
var boundCheckNumericRange=checkNumericRange.bind(range);
var result=boundCheckNumericRange(12);
console.log(result);//true

var displayArgs=function(x1,x2,x3,x4){
    console.log(x1+" "+x2+" "+x3+" "+x4);
}
var emptyObject={};
var displayArgs2=displayArgs.bind(emptyObject,12,"a");
displayArgs2("b","c");
//12 "a" "b" "c"

var foo=function(){
    console.log("foo");
};
console.log(foo.toString(),"___",typeof foo.toString());
console.log(foo.valueOf(),"___",typeof foo.valueOf());

console.log(foo.hasOwnProperty("toString"));
console.log(Object.prototype.hasOwnProperty("toString"));

console.log(foo.hasOwnProperty("valueOf"));
console.log(Object.prototype.hasOwnProperty("valueOf"));
/*
function(){
    console.log("foo");
} ___ string
ƒ (){
    console.log("foo");
} "___" "function"
false
true
false
true
*/
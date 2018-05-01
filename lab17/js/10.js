//静态方法实例与原型方法实例
var BaseClass=function(){};
BaseClass.prototype.f2=function(){
    console.log("This is a prototype method");
};
BaseClass.f1=function(){
    console.log("This is a static method");
};
BaseClass.f1();//This is a static method
var instance1=new BaseClass();
instance1.f2();//This is a prototype method

var BaseClass=function(){};
BaseClass.prototype.method1=function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1=new BaseClass();
instance1.method1();//1 This is a method in Base.prototype

instance1.method1=function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//2 This is a method in instance1


var BaseClass=function(){
    this.method1=function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1=new BaseClass();
instance1.method1=function(){
    console.log('2 Defined directpy in the instance method');
};
BaseClass.prototype.method1=function(){
    console.log('3 Defined by the prototype instance method');
};
instance1.method1();
//2 Defined directpy in the instance method
//就近找，找不到再去原型上找，一层一层递推
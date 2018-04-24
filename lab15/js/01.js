//使用3种方法来创建对象
var obj1,obj2,obj3
//通过字面量的方式创建
var obj={
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
console.log(obj.show());//Hi

//通过Object工厂方法创建js对象，注：js对象是通过原型链的方式实现的对象的集成
var newObj=Object.create(obj);
newObj.age=23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//23

var empty={};
var obj2=Object.create(empty,{
    x:{value:1},y:{value:2,enumerable:true}
});
console.log(obj2);//{y:2,x:1}
console.log(obj2.hasOwnProperty("x"));//true

//构造函数创建对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHi=function(){
    console.log("hello,i'm"+" "+this.name,this.age+" "+"years old");
};
var p1=new Person("Mike",20);
p1.sayHi();//hello,i'm Mike,20 years old
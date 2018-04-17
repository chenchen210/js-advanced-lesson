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
console.log(obj.__proto__);//原型为Object
console.log(obj.__proto__===Object.prototype);//true

var newObj=Object.create(obj);
newObj.age=23;
console.log(newObj.num);//10
console.log(newObj.str);//Hi
console.log(newObj.show());//Hi
console.log(newObj.age);//23
console.log(newObj.__proto__);//原型为obj
console.log(newObj.__proto__===obj);//true

/*
o={};
//以字面量方式创建的空对象就相当于：
o=Object.create(Object.prototype);
o=Object.create(Object.prototype,{
    //foo会成为所创建对象的数据属性
    foo:{
        writable:true,
        configurable:true,
        value:"hello"
    },
    //bar会成为所创建对象的访问器属性
    bar:{
        configurable:false,
        get:function(){return 10},
        set:function(value){
            console.log("Setting 'o.bar' to",value);
        }
    }
});
*/

//构建函数的方式创建js对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayName=function(){
    console.log("hello i'm",this.name,this.age,"years old");
};
var person1=new Person("Mike",21);
person1.sayName();//hello i'm Mike 21 years old

var objStr=new Object("xxx");
console.log(typeof objStr);//Object
console.log(objStr instanceof String);//true

var objNum=new Object(23);
console.log(typeof objNum);//Object
console.log(objNum instanceof Number);//true

var objBoolean=new Object(true);
console.log(typeof objBoolean);//Object
console.log(objBoolean instanceof Boolean);//true
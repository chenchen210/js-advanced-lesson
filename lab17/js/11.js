//Part 1 constructor属性的应用

// 1 确定对象的构造函数名
function Foo(){};
var f=new Foo();
console.log(f.constructor.name);
//Foo

// 2 创建相似对象
function Constr(name){
    this.name=name;
}
var x=new Constr("Jack");
var y=new x.constructor("Mike");
console.log(y);//Constr{name:"Mike"}
console.log(y instanceof Constr);//true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type='Person';
    this.area=area;
}
Person.prototype.sayArea=function(){
    console.log(this.area);
};
var Father=function(age){
    this.age=age;
};
Father.prototype=new Person("Beijin");
console.log(Person.prototype.constructor);
/*
f Person(area){
    this.type='Person';
    this.area=area;
}
*/
console.log(Father.prototype.constructor);
/*
f Person(area){
    this.type='Person';
    this.area=area;
}
*/
Father.prototype.constructor=Father;
console.log(Father.prototype.constructor);
/*
f (age){
    this.age=age;
}
*/
var one=new Father(25);


//Part2 公有属性、私有属性、特权方法
function A(id){
    this.publicId=id;
    var privateId=456;
    this.getId=function(){
        console.log(this.publicId,privateId);
    };
}
var a=new A(123);
console.log(a.publicId);//123
console.log(a.privateId);//undedined---不允许外部访问
a.getId();//123 456

function Person(name){
    this.name=name;
}
Person.prototype.getName=function(){};
var p=new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__===p.constructor.prototype);//false
//p.constructor等价于Person


// Shape 多态
function A(){
    this.a=10;
    this.af=function(){console.log(this.a);}
}
var a=new A();
function B(){
    A.call(this);
    this.b=20;
    this.bf=function(){console.log(this.a);}
}
B.prototype.__proto__=A.prototype;
var b=new B();
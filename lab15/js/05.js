function Person(name){
    this.name=name;
    this.age=21;
}
Person.prototype.sayHi=function(){
    console.log("Hi,i'm "+this.name,this.age,"years old");
};

var p1=new Person("Mile");
console.log(p1.name);//Mike
console.log(p1.age);//21
p1.sayHi();//Hi,i'm Mike,21 years old

//name,age 是定义在p1上，sayHi是定义在p1的原型上  
console.log(p1.__proto__===Person.prototype);//true
console.log(p1.__proto__.__proto__===Object.prototype);//true

console.log(Person.__proto__===Function.prototype);//true
console.log(Person.__proto__.__proto__===Object.prototype);//true

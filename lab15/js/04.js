function Person(age,name){
    this.name=name;
    this.age=age;
}
Person.prototype.sayHi=function(){
    console.log("Hi,i'm "+this.name);
};
var p1=new Person(20,"Jack");
console.log(p1.name);//Jack
console.log(p1.age);//20
p1.sayHi();//Hi,i'm Jack

//构造实例化函数
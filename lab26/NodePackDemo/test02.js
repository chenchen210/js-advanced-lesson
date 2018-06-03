// var Student=require("./Person");
// var s=new Student("amy",21);
// s.show();
// s.point();

var test01=require("./test01");//等价于C语言中的include某个文件
console.log(test01.a);
console.log(test01.b);
console.log(test01.c());

var Person=require("./Person");
var p=new Person("Jack",23);
p.show();
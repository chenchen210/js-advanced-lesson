//Object静态创建对象的原型变量共享
var superObj={
    x:1,y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x=5;//----找到原型，在上面修改
console.log(subObj_Second.x);
//5

var superObj={
    x:1,y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.x=5;//----只改了Fisrt的
console.log(subObj_Second.x);
//1
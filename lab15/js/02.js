var obj={
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
// console.log(obj.__proto__);
console.log(obj.__proto__===Object.prototype);//true

var newObj=Object.create(obj);
var newObj2=Object.create(obj);
newObj.age=23;

console.log(newObj.__proto__===obj);//true
console.log(newObj2.__proto__===obj);//true

console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(newObj.__proto__.__proto__.__proto__);//null

//newObj.__proto__原型为obj，newObj.__proto__.__proto__原型为Object.prototype，newObj.__proto__.__proto__.__proto__原型为null，一层层推

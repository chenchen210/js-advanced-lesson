// Object.keys()返回所有自有（非继承）可枚举属性的键
// Object.getOwnPropertyNames()返回所有自有（非继承）可枚举属性的键+不可枚举的键
// Object.prototype.hasOwnProperty()判断自身是否有该属性，包括不可枚举的属性,不包括继承的
// Object.prototype.propertyIsEnumerable()判断自身是否有该属性并检测该属性是否可枚举
// in 检测一个对象的属性（包括继承的属性和不可枚举的属性）
// for...in 遍历一个对象的属性（包括继承的属性），不包括不可枚举的属性

var o3={};
o3.y="yyy";
Object.defineProperty(o3,"x",{
    configurable:true,
    enumerable:false,
    writable:true,
    value:"xxx"
});
console.log(Object.keys(o3));//y
console.log(Object.getOwnPropertyNames(o3));//y x
//-------返回的是键不是值
console.log(o3.hasOwnProperty("x"));//true
console.log(o3.propertyIsEnumerable("x"));//false
for(var k in o3){
    console.log(k,o3[k]);
}
/**
y yyy 
*/
console.log("x" in o3,"y" in o3);//true,true
console.log(o3.hasOwnProperty("x"),o3.hasOwnProperty("y"));//true,true

//遍历属性的综合实例
var o4={};
o4.a="aaa";
Object.defineProperty(o4,"b",{
    configurable:true,
    enumerable:false,
    writable:true,
    value:"bbb"
});
var o5=Object.create(o4);
o5.c=234;
Object.defineProperty(o5,"d",{enumerable:false,value:567});
for(var k in o5){
    if(o5.hasOwnProperty(k)){
        console.log("o5 自有可遍历属性：",k,o5[k]);
    }else{
        console.log("o5 非自有可遍历属性：",k,o5[k]);
    }
}
/**
 o5 自有可遍历属性：c 234
 o5 非自有可遍历属性：a aaa
*/
console.log(o5.propertyIsEnumerable("a"),
    o5.propertyIsEnumerable("b"),
    o5.propertyIsEnumerable("c"),
    o5.propertyIsEnumerable("d")
);
//false,false,true,false-------不包括继承的，只是自身
console.log("a" in o5,"b" in o5,"c" in o5,"d" in o5);//4*true
console.log(Object.keys(o5));//c
console.log(Object.getOwnPropertyNames(o5));//[c,d]
console.log(o4.isPrototypeOf(o5));//true
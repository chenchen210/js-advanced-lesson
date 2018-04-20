//属性特性继承特点
var o1={};
Object.defineProperty(o1,"x",{
    value:12,
    //writable:true
});//configurable和writable是false
o1.x=34;
console.log(o1.x);//12

var o2=Object.create(o1);
o2.x=56;
console.log(o2.x);//12------属性也会继承

//访问器属性特性继承特点
var o3={_x:21};
Object.defineProperty(o3,"x",{
    get:function(){return this._x}
});
o3.x=34;
console.log(o3.x);//21----------34没有传进去

var o4=Object.create(o3);
Object.defineProperty(o4,"x",{
    set:function(val){
        this._x=val;
    },
    get:function(){
        return ++this._x;
    }
});
o4.x=56;
console.log(o4.x);//57---------有set写入函数，56传进去了

var a=23;
console.log(Object.getOwnPropertyDescriptor(window,"a"));
delete a;//==========等价于delete window.a;
/**
 {value: 23, writable: true, enumerable: true, configurable: false}
configurable:false
enumerable:true
value:23
writable:true
__proto__:Object
 */
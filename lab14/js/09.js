var obj={
    x:1,
    y:2
};
obj.z=3;
for(var k in obj){
    console.log(k,obj[k]);
}
/*
x 1
y 2
z 3
直接添加的属性，所有的特性默认都是true
*/

var obj={
    x:1,
    y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
/**
x 1
y 2
z 3 
*/

console.log(obj.w);//456 w存在于obj中
//但因为是通过defineProperty添加，默认值除了更改过的为true，其余均为false，所以没办法枚举

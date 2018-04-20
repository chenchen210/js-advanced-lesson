var objProto={
    z:3
};

var obj=Object.create(objProto);
obj.x=1;
obj.y=2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log(obj.toString);//原型链上有toString属性


for(var k in obj){
    console.log(k,obj[k]);
}
/**
 x 1
 y 2
 z 3
*/
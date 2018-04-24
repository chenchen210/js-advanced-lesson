var proObj={
    z:3
};
var obj=Object.create(proObj);
obj.x=1;
obj.y=2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false--z是继承的，不是自身带的

obj.z=5;
console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z=8;
console.log(obj.z);//8

delete obj.z;
console.log(obj.z);//3
//这个成功的删掉了obj自身带的z。但是要你输出z，自身没有，就去原型链上找，啊哈，果然找到了

delete obj.__proto__.z;
console.log(obj.z);//undefined
//这个是把obj原型上的z给删了，上一部把自身带的也删了，这回找不到z，哪哪都找不到了

//hasOwnProperty是原型方法--这个只会找自身的，（闭塞的家伙）
//in 调用的主体是obj，这个得从自身找，自身找不到再去原型上找
//Object.keys(obj)判断自身可枚举的键（非继承）
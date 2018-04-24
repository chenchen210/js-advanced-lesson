function MyObj(){ }
MyObj.prototype.z=3;

var obj=new MyObj();
obj.x=1;
obj.y=2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z=5;

obj.hasOwnProperty("z");//true
console.log(obj.z);//5
console.log(MyObj.prototype.z);//3

obj.z=8;
console.log(obj.z);//8

delete obj.z;
console.log(obj.z);//3

delete obj.z;
console.log(obj.z);//3

delete obj.__proto__.z;//-------从根源上斩断
console.log(obj.z);//undefined----表面的早已经删了，根源上的又完了，所以全没了

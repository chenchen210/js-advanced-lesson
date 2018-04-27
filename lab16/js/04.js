function point(x,y){
    this.x=x;
    this.y=y;
}
var p=new point(2,3);
console.log(p);
//point {x:2,y:3}
/**
new充当了类的角色，p为构建的新函数，this便指向新的函数
 */

 point(5,5);
 console.log(window.x,window.y);
 //5,5
 //直接调用point，point就和普通的函数一样，里面的this便属于window
 //this.x=x;  this.y=y;==》给window添加了属性x、属性y
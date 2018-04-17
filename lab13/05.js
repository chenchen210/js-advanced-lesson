var obj={};
obj.x=2;
console.log(obj.x);//2
obj.x=5;
console.log(obj["x"]);//5
delete obj.x;
console.log(obj.x)//undefined

var obj2={
    id_1:2,
    id_2:4,
    id_3:6,
    id_4:8,
    id_5:10
};
var obj3={};
for(var i=0;i<10;i++){
    obj3.i=i;
}
//{i:9}---是将i赋值给obj3，执行一次，刷新一次

var obj4={};
for(var i=0;i<10;i++){
    obj4[i]=i;
}
//{0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}
//将i值写入，给obj4添加值
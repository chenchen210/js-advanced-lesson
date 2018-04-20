var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{writable:false,value:11,enumerable:false,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
/*
y:2
*/
//writable：false--说明当前的x值不允许修改，所以value赋值无用enumerate：false--说明x值不可枚举，configurable：true--说明当前的x值可以进行删除

var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}
/*
y 2---因为x值不可枚举
*/

var obj={
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{writable:true,value:11,enumerable:false,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
//y 2---和第一个做比较得出各个属性互不干预
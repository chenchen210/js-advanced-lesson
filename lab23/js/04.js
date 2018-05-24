// 参考如下：
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

/*JSON.stringify()方法时将一个JavaScript值（对象或者数组）转换为一个JSON字符串，
如果指定了replaceer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，则可选的仅包括指定的属性

JSON.stringify(value[,replacer [,space]])
JSON.stringify中的replacer回调
*/

//例一
var o2={
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
};
//replacer节点转换函数，在值被转换为字符串之前转换数节点的值
var jsonStr2=JSON.stringify(o2,function(key,value){
    if(value===true){
        value=false;
    }
    if((value instanceof Array)&&value.length==4){
        value[0]="Hi";
    }
    if(key==="a"){
        console.log("find key a");
        value=12345;
    }
    if(key==="z"){
        console.log("find key z");
        value="zzz";
    }
    return value;
});
console.log(jsonStr2);
console.log(o2);
/*
find key a
find key z
{"a":12345,"b":false,"c":["Hi",4,"x",{"y":34,"z":"zzz"}]}
{a:[1,2],b:true,c:[3,4,"x",{y:34,z:56}],}
*/

//例二
function replacer(key,value){
    if(typeof value==="string"){
        return undefined;//----------变成undefined就不会输出了
    }
    return value;
}
var foo={foundation:"Mozilla",model:"box",week:45,transport:"car",month:7};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);
//'{"week":45,"month":7};'

//如果replacer是一个数组，数组的值代表将被序列化成JSON字符串的属性名。
var jsonString2=JSON.stringify(foo,['model','transport']);
console.log(jsonString2);
//'{"model":"box","transport":"car"}'
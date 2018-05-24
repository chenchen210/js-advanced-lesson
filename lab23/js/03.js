//--------Part 1 JSON.stringfiy的基本用法----------
//JSON.stringfiy 案例一 符合对象转换为字符串
var o1={
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12)},
    h:0x12
};
var jsonStr1=JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);
//{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
//{a: Array(2), b: true, c: Array(4), d: 5, e: {…}, …}

// JSON.stringify 案例二 复合数组转换为字符串
var a1=[1,"x",true,{y:2,z:3}];
var jsonStrArr1=JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);
/*
[1,"x",true,{"y":2,"z":3}]
[1,"x",true,{y:2,z:3}]
*/

JSON.stringify({});//-----'{}'
JSON.stringify(true);//---'true'
JSON.stringify("foo");//--'"foo"'
JSON.stringify([1,"false",false]);//-----'[1,"false",false]'
JSON.stringify({x:5});//----'{"x":5}'

JSON.stringify({x:5,y:6});//----'{"x":5,"y":6}'
JSON.stringify([new Number(1),new String("false"),new Boolean(false)]);
//'[1,"false",false]'
JSON.stringify({x:undefined,y:Object,z:Symbol("")});
//"{}"
JSON.stringify([undefined,Object,Symbol("")]);
//'[null,null,null]'

//不可枚举的属性值会被忽略
JSON.stringify(
    Object.create(
        null,
        {
            x:{value:'x',enumerable:false},
            y:{value:'y',enumerable:true}
        }
    )
);
//'{"y":'y'}'

//--------Part 2 JSON.parse的基本用法----------
//JSON.parse的用法 案例一
var jsonStr3='{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4='[1,"x",true,{"y":2,"z":3}]';
var jsonStr5='{"a":[1,2],"b":false,"c":[3,4,"x",{"y":34,"z":56}]}';
var o3=JSON.parse(jsonStr3);
var o4=JSON.parse(jsonStr4);
//reviver参数是可选的，是一个节点访问函数，可用来转换解析后的数据
var o5=JSON.parse(jsonStr5,function(key,value){
    if(typeof value=="boolean"){
        value="ChangeToString";
    }
    if(key=="c"){
        console.log("c:",value);
    }
    return value;
});
console.log(o3);
console.log(o4);
console.log(o5);
/*
{a:[1,2],b:true,c:[3,4,"x",{y:34,z:56}],d:5,e:{name:"Jack"}}
[1,"x",true,{y:2,z:3}]
{a:[1,2], b:"ChangeToString", c:[3,4,"x",{y:34,z:56}]}
*/
JSON.parse('{}');//---{}
JSON.parse('true');//---true
JSON.parse('"foo"');//---"foo"
JSON.parse('[1,5,"false"]');//----[1,5,"false"]
JSON.parse('null');//----null
JSON.parse('1');//-----1

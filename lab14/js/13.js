var obj={_x:1};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperties(obj,{
    y:{value:2,writable:true,configurable:true,enumerable:true},
    z:{value:2,writable:true,configurable:true,enumerable:true},
    x:{
        get:function(){return this._x},
        set:function(val){
            this._x=val;
        }
    }
});
//---------------------------上面为批量添加属性并设置属性特征

var book={};
Object.defineProperties(book,{
    //添加俩个数据属性
    _year:{
        value:2004,
        writable:true
    },
    edition:{
        value:1,
        writable:true
    },
    //添加访问器属性
    year:{
        //调用get方法读取属性
        get:function(){
            return this._year;
        },
        //调用set方法读取属性
        set:function(newValue){
            this._year=newValue;
            this.edition+=newValue-2004;
        }
    }
});
//测试
book.year=2006;

var empty={};
var obj2=Object.create(empty,{
    x:{value:1},
    y:{value:2,enumerable:true}
});
console.log(obj2);//{y:2,x:1}
console.log(obj2.hasOwnProperty("x"));//true
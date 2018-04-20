//Part1  js对象是否可扩展 isExtensible
var empty1={a:1};
console.log(Object.isExtensible(empty1));//true

//对象是否可以扩展与对象的属性是否可以配置无关
empty2=Object.create({},{
    "a":{
        value:1,
        configurable:false,
        enumerable:true,
        writable:true
    }
});
console.log(Object.isExtensible(empty2));//true

//Object.isExtensible和Object.preventExtensions实例
(function(){
    // Object.preventExtensions将原对象变得不可扩展，并返回原对象
    var obj={};
    var obj2=Object.preventExtensions(obj);
    console.log(obj===obj2);//true

    //新创建的对象默认是可扩展的
    var empty={};
    console.log(Object.isExtensible(empty));//true
    empty.a=1;

    //将其变为不可扩展的对象
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));//false

    //使用传统方法为不可扩展的对象添加属性
    empty.b=2;//静默失败,不抛出错误
    empty["c"]=3;//静默失败,不抛出错误

    //严格模式下，为不可扩展的对象添加属性将抛出错误
    (function fail(){
        "use strict";
        empty.d="4";//抛出错误
    })();

    //使用 Object.defineProperty方法为不可扩展对象添加新属性会抛出异常
    Object.defineProperty(empty,"e",{value:5});//抛出异常
    Object.defineProperty(empty,"a",{value:2});
    console.log(empty.a);//2
})();

//Part2  js对象是否密封 isSealed
//如果对象不可扩展，且所有属性的可配置特性为false，则对象为密封的对象
(function (){
    //新建的对象默认不是密封的
    var empty={};
    console.log(Object.isExtensible(empty));//false

    //如果把一个空对象变得不可扩展，则同时它也会变成密封对象
    Object.preventExtensions(empty);
    console.log(Object.isExtensible(empty));//true

    //但如果这个对象不是空对象，则他不会变成密封对象，因为密封对象的所有自身属性是不可配置的。
    var hasProp={fee:"fie foe fum"};
    Object.preventExtensions(hasProp);
    console.log(Object.isExtensible(hasProp));//false

    //如果把这个属性变得不可配置，则这个对象就成了密封对象
    Object.defineProperty(hasProp,"fee",{configurable:false});
    console.log(Object.isSealed(hasProp));//true
})();

//Object.isSealed和Object.seal实例
(function (){
    var obj={
        prop:function(){},
        foo:"bar"
    };
    //可以添加新的属性，已有的属性值可以修改，可以删除
    obj.foo="baz";
    obj.lumpy="woof";
    delete Object.prop;

    var o=Object.seal(obj);//将obj封装并返回原对象
    console.log(o===obj);//true
    console.log(Object.isSealed(obj));//true

    obj.foo="quux";//修改成功
    /*此时仍然可以修改密封对象上的属性的值
    但不能把密封对象的属性进行重新配置，譬如将数据属性重定义成访问器属性，
    Object.definePrioperty(obj,"foo",{get:function)(){return "g";}});//抛出异常
    */

    //任何除去修改以外的操作都会失败
    obj.quaxxor="the fridenly duck";//失败，seal包括了不可扩展
    delete Object.foo;//静默失败

    //严格模式下，会抛出TypeError异常
    (function fail(){
        "use strict";
        //delete obj.foo;  抛出TypeError异常
        //obj.sparky="arf";  抛出TypeError异常
    })();

    //obj.defineProperty(obj,"ohai",{value:17});//添加属性失败
    Object.defineProperty(obj,"foo",{value:"eit"});//修改成功
    console.log(obj.foo);//eit
})();


//Part3  js是否冻结 isFrozen
//如果对象不可扩展，所有属性配置均为false，且所有属性的可写特性为false则该对象为密封的对象
(function (){
    //默认的对象是可扩展的，所以是非冻结的
    console.log(Object.isFrozen({}));//false

    //一个不可扩展的空对象既是冻结对象也是密封对象
    var vacuouslyFrozen=Object.preventExtensions({});
    console.log(Object.isFrozen(vacuouslyFrozen)===true);//true
    console.log(Object.isSealed(vacuouslyFrozen)===true);//true

    //一个非空对象默认是非冻结的
    var oneProp={p:42};
    console.log(Object.isFrozen(oneProp));//false

    //使该对象变为不可扩展的，并非变成了冻结对象，以为p属性任然可进行配置（可修改）
    Object.preventExtensions(oneProp);
    console.log(Object.isFrozen(oneProp));//false

    //如果删除该属性，使其变为空对象，则其变为冻结对象
    delete oneProp.p;
    console.log(Object.isFrozen(oneProp));//true

    //一个不可扩展的对象，有一个不可写但可配置的属性，则它仍然是非冻结对象
    var nonWritable={e:"plep"};
    Object.preventExtensions(nonWritable);
    Object.defineProperty(nonWritable,"e",{writable:false});
    console.log(Object.isFrozen(nonWritable));//false

    // //把这个属性改为不可配置,会让这个对象成为冻结对象
    Object.defineProperty(nonWritable,"e",{configurable:false});
    console.log(Object.isFrozen(nonWritable));//true

    //一个不可扩展的对象,值拥有一个访问器,则它仍然是非冻结的.
    var accessor={get food(){return "yum";}};
    Object.preventExtensions(accessor);
    console.log(Object.isFrozen(accessor));//false

    //把这个属性改为不可配置,会让这个对象成为冻结对象.
    Object.defineProperty(accessor,"food",{configurable:false});
    console.log(Object.isFrozen(accessor));//true

    //使用 Object.freeze 是冻结一个对象的最方便的方法.
    var frozen={1:81};
    console.log(Object.isFrozen(frozen));//false
    Object.frozen(frozen);
    console.log(Object,isFinite(frozen));//true

    //一个冻结对象也是一个密封对象
    console.log(Object.isSealed(frozen));//true

    //一个冻结对象也是一个不可扩展对象
    console.log(Object,isExtensible(frozen));//false
})();

//Object.isFrozen和Object.freeze实例
(function (){
    var obj={
        prop:function(){},
        foo:"bar"
    };
    obj.foo="baz";
    obj.lumpy="woof";
    delete Object.prop;

    Object,frozen(obj);
    console.log(Object.isFrozen(obj));//true
    
    obj.foo="quux";//静默失败
    obj.quua="xxxxxx";//静默失败

    (function (){
        "use strict"
        //obj.foo="sparky"
        //delete obj.quaxxor;  抛出TypeError异常
        //obj.sparky="arf";  抛出TypeError异常
    })();
    //使用 Object.defineProperty方法同样会抛出 TypeError 异常
    //Object.defineProperty(obj,"ohai",{value:17});//抛出 TypeError 异常
    //Object.defineProperty(obj,"foo",{value:"eit"});//抛出 TypeError 异常
})();
//============一旦冻结就不能进行任何修改

var str="xxx";
console.log(Object.isFrozen(str));//true

(function (){
    obj={
        internal:{}
    };
    Object.freeze(obj);//浅冻结
    obj.internal.a="aValue";
    console.log(obj.internal.a);//aValue

    //以下函数使一个对象变得完全冻结，冻结所有对象中的对象
    function deepFreeze(o){
        var prop,propKey;
        Object.freeze(o);//首先冻结第一层对象
        for(propKey in o){
            prop=o[propKey];
            if(!o.hasOwnProperty(propKey) || !(typeof prop ==="object") || Object.isFrozen(prop)){
                continue;
            }
            deepFreeze(prop);//递归
        }
    }

    deepFreeze(obj);
    obj.internal.b="bValue";//静默失败
    console.log(obj.internal.b);//undefined
})();
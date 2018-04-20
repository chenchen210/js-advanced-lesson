var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function(){
        return this._name;
    }
});
console.log(obj1.name);//Lucy
obj1.name="jack";
console.log(obj1.name);//Lucy----只定义了getter访问器，因此写入失效

var obj2={
    _name:"Lucy",
    set name(val){this._name=val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function(){
        return this._name+"_hihi";
    },
    set:function(val){
        this._name=val+"_haha";
    }
});//------------------将原来的访问器覆盖掉了
console.log(obj2.name);//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);//jack_haha_hihi
var person={_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name=val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name="Lucy";
console.log(person.name);//Lucy
delete person.name;
console.log(person.name);//Lucy


var person={_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:true,
    enumerable:true,
    set:function(val){this._name=val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name="Lucy";
console.log(person.name);//Lucy
delete person.name;
console.log(person.name);//undefined
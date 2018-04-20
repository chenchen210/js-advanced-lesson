var person={name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//Mike---把Jack覆盖掉了
person.name="Lucy";
console.log(person.name);//Mike---writable:false--说明value值不可修改，还是Mike
delete person.name;
console.log(person.name);//Mike---configurable:false,说明person.name这个不能删除

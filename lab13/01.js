var obj={
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();//Hi

var me={
    _name:"chenchen",
    _age:1,
    show:function(){
        console.log("My name is"+' '+this._name+' '+"and i'm"+' '+this._age+' '+"year old.");
    }
}
me.show();
// ------------------Part 11111111-----------------------
// 与函数一样，类也可以使用表达式的形式定义
const Myclass=class Me{
    getClassName(){
        return Me.name;
    }
};
// 上面代码使用表达式定义了一个类
// 需要注意的是，这个类的名字是Myclass而不是Me，Me只是Class的内部代码，代指当前类
let inst=new Myclass();
inst.getClassName();//"Me"
// Me.name//ReferenceError: Me is not defined
// 上面代码表示，Me只在Class内部有定义

// 如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式
const Myclass=class {/**......*/};

// 采用Class表达式，可以写出立即执行的Class
let person=new class{
    constructor(name){
        this.name=name;
    }
    sayName(){
        console.log(this.name);
    }
}("张三");
person.sayName();//张三
// person只是一个立即执行的类的实例

// ----------------------Part 22222222-----------------------
// 类不存在变量提升（hoist），这一点与ES5完全不同
new Foo();//ReferenceError: Foo is not defined
class Foo{}
/*
上述代码中，Foo类使用在前，定义在后，这样会报错，
因为ES6不会把类的声明提升到代码头部
这种规定的原因与下文要提到的继承有关，必须保证子类在父类之后定义
*/
{
    let Foo=class{};
    class Bar extends Foo{
    }
}
/*
上述代码不会报错，因为Bar继承Foo的时候，Foo已经有了定义
但是，如果存在class的提升，上面的代码就会报错，因为class会被提升到代码头部
而let命令是不提升的，所以导致Bar继承Foo的时候，Foo还没有定义
*/

// 由于本质上，ES6的类只是ES5的构造函数的一层包装，所以函数的许多特征都被Class继承，包括name属性
class Point{}
Point.name;//"Point"
// name属性总是返回紧跟在class关键字后面的类名


// 与ES5一样，在“类”的内部可以使用get和set关键字
// 对某个函数设置存值函数和取值函数
// 拦截该属性的存取行为
class Myclass{
    constructor(prop){
        this.prop=prop;
    }
    get prop(){
        return this.prop;
    }
    set prop(value){
        this._prop=value;
    }
}

let inst=new Myclass(23);
console.log(inst.prop);//23
inst.prop=45;
console.log(inst.prop);//45

// Class内部调用new.target,返回当前Class
class Rectangle{
    constructor(length,width){
        console.log(new.target===Rectangle);
        this.length=length;
        this.width=width;
    }
}
var obj=new Rectangle(3,4)
// true
// -----------Part 1方法中的函数嵌套  this缺陷----------------
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        // 内部嵌套函数
        function moveToX(){
            this.x=x;//----------this绑到了window下
        }
        // 内部嵌套函数
        function moveToY(){
            this.y=y;//----------this绑到了window下
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
/************************
{x: 0, y: 0, moveTo: ƒ}
moveTo:ƒ (x,y)
x:0
y:0
__proto__:Object
*************************/
// console.log(window.x,window.y);//2 2


// ------Part 1方法中的函数嵌套  this缺陷 ES5通过软绑定解决问题--------
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        var that=this;//------------关键---软绑定
        function moveToX(){
            that.x=x;
        }
        function moveToY(){
            that.y=y;
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
/************************
{x: 2, y: 2, moveTo: ƒ}
moveTo:ƒ (x,y)
x:2
y:2
__proto__:Object
*************************/
console.log(window.x,window.y);//undefined undefined

// 用call、apply解决
/////////////////////////////////////////////////////////call
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        // 内部嵌套函数
        function moveToX(){
            this.x=x;//----------this绑到了window下
        }
        // 内部嵌套函数
        function moveToY(){
            this.y=y;//----------this绑到了window下
        }
        moveToX.call(this);//------这个this是point的
        moveToY.call(this);//------这个this是point的
    }
};
point.moveTo(2,2);
console.log(point);
////////////////////////////////////////////////////////apply
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        // 内部嵌套函数
        function moveToX(){
            this.x=x;//----------this绑到了window下
        }
        // 内部嵌套函数
        function moveToY(){
            this.y=y;//----------this绑到了window下
        }
        moveToX.apply(this);//------这个this是point的
        moveToY.apply(this);//------这个this是point的
    }
};
point.moveTo(2,2);
console.log(point);


// ES6中 箭头函数中的this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）
// 箭头函数导致this总是指向函数定义生效时所在的对象
var point={
    x:0,
    y:0,
    moveTo:function(x,y){
        // 内部嵌套函数
        var moveToX=()=>this.x=x;
        // 内部嵌套函数
        var moveToY=()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
/************************
{x: 2, y: 2, moveTo: ƒ}
moveTo:ƒ (x,y)
x:2
y:2
__proto__:Object
*************************/
console.log(window.x,window.y);//undefined undefined

// 通过bind方法解决this指向问题
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        function movetox(){
            this.x=x;
        }
        function movetoy(){
            this.y=y;
        }
        movetox.bind(point)();
        movetoy.bind(point)();
    }
};
point.moveto(2,2);
console.log(point);

// 通过箭头函数可以有效避免this指向问题


// 箭头函数使用的注意点
/*
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
（2）不可以当作构造函数，就是说，不可以使用new命令，否则会抛出一个错误
（3）不可以使用arguments对象，该对象在函数体内不存在，如果要用，用Rest替代
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数
*/

function foo(){
    setTimeout(function(){
        console.log('id:',this.id);
    },100);
}
var id=21;
foo.call({id:42});
//id: 21

function foo(){
    setTimeout(()=>{
        console.log('id:',this.id);
    },100);
}
var id=21;
foo.call({id:42});
// id: 42
// 箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id：42}），输出42
// 其实箭头函数里面没有自己的this，而是引用外层的this
// 由于箭头函数没有自己的this，所以当然不能用call(),apply(),bind()方法去改变this的指向
function foo(){
    return()=>{
        return()=>{
            return()=>{
                console.log('id:',this.id);
            };
        };
    };
}
var f=foo.call({id:1});
var t1=f.call({id:2})()();
var t2=f().call({id:3})();
var t3=f()().call({id:4});
/*
id: 1
id: 1
id: 1
this是最开始调用的那个函数
*/

//由于大括号被解释为代码，所以如果箭头函数直接返回一个对象，必须在对象外面加上小括号
var getTempItem=itemId=>({id:itemId,name:"Temp"});//一个参数，所以没加（）
getTempItem(23);
//{id: 23, name: "Temp"}
// 等效于
var getTempItem=function(itemId){
    return {id:itemId,name:"Temp"}
}
getTempItem(23);
// {id: 23, name: "Temp"}
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);//Point {x:2,y:3}

//-----解决方法-----
//法一：软绑定
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        var that=this;
        function moveX(x){
            that.x+=x;
        }
        function moveY(y){
            that.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//Point {x:3,y:4,moveXY:f...}

//法二---call、apply
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX.call(this,x);
        moveY.apply(this,[y]);
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//Point {x:3,y:4,moveXY f...}

//法三-----bind绑定
function Point(x,y){
    this.x=x;
    this.y=y;
    this.moveXY=function(x,y){
        function moveX(x){
            this.x+=x;
        }
        function moveY(y){
            this.y+=y;
        }
        moveX.bind(this,x)();
        moveY.bind(this,y)();//---bind后面的要传某某的主体，这是俩个
        //所以得传主体+参数
    }
}
var p=new Point(2,3);
p.moveXY(1,1);
console.log(p);
//Point {x:3,y:4,moveXY f...}

var obj={
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var fun1=function(){
    return function f2(){
        return this.x;
    }
};
obj.fun3=fun1;
obj.fun4=fun1();
console.log(obj.fun3());
/**
 f2(){return this.x}
*/
console.log(obj.fun3()());//undefined
console.log(obj.fun4());//23
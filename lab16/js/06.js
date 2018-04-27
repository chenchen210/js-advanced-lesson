var point={
    x:0,
    y:0,
    moveto:function(x,y){
        //内嵌套函数
        function movetox(){
            this.x=x;
        }
        //内嵌套函数
        function movetoy(){
            this.y=y;
        }
        movetox();
        movetoy();
    }
};
point.moveto(2,3);
console.log(point);
//{x:0,y:0,moveto f......}

console.log(window.x,window.y);
//2 3
//内嵌套函数里面的this一般都是属于window的，所以这个又是相当于
//给window添加了属性x，y


var point={
    x:0,
    y:0,
    moveto:function(x,y){
        //内嵌套函数
        function movetox(){
            this.x=x;
        }
        //内嵌套函数
        function movetoy(){
            this.y=y;
        }
        movetox.call(this);//----这个this《=》point，不是内嵌里的，是这个对象的
        //然后这个对象调用movetox方法，使它绑定在point上
        movetoy();
    }
};
point.moveto(2,3);
console.log(point);
//{x:2,y:0,moveto f.....}

//-------解决函数嵌套中的this缺陷--------
//法一：软绑定
var point={
    x:0,
    y:0,
    moveto:function(x,y){
        var that=this;//===========这里的this是point里面的this，代指point
        //内嵌套函数
        function movetox(){
            that.x=x;
        }
        //内嵌套函数
        function movetoy(){
            that.y=y;
        }
        movetox();
        movetoy();
    }
};
point.moveto(2,3);
console.log(point);
//{x:2,y:3,moveto f.....}
console.log(window.x,window.y);//undefined undefined---此时此刻找不到x，y

//法二：通过call、apply解决
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
        movetox.call(this);//这里的this是point的代指
        movetoy();
    }
};
point.moveto(2,2);
console.log(point);
//(2,0,moveto f....)
/**
 这里的this（point）调用了movetox，其自身的属性得到更改
 二movetoy（）还是给window添加了属性
 */

 //法三：通过bind解决
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
//{x:2,y:2,moveto f....}
/*
将movetox、movetoy和point绑定，但是一但绑定就不能改了，死板
*/
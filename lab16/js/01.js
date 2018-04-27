function thisTest(){
    console.log(this===window);
}
thisTest();//true

var a=10;b="Hi";
function thisTest2(){
    this.a=20;
    delete this.b;
    this.c="新添加属性";
}
thisTest2();
console.log(a,c);//20,新添加属性

var point={
    x:0,
    y:0,
    moveto:function(x,y){
        function movetox(x){
            this.x=x;
        };
        function movetoy(y){
            this.y=y;
        }
        movetox(x);
        movetoy(y);
    }
};//this属于point
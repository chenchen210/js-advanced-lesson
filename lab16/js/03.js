var point={
    x:0,
    y:0,
    moveto:function(x,y){
        this.x=x;
        this.y=y;
    }
};
point.moveto(1,1);
console.log(point);
//{x:1,y:1,move f.......}
//this绑定在当前对象上，及point上
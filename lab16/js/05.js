//------call调用实例1----------------
obja={name:"aa",x:1};
objb={name:"bb",x:5};
obja.test=function(){
    console.log(this.name,this.x);
};
obja.test();//aa,1
obja.test.call(objb);//bb,5

//------call调用实例2---------------
var bird={
    name:"polly",
    fly:function(m,n){
        console.log("i'm "+this.name+" i can flt————",m,n);
    }
};
var me={
    name:"cc"
};
bird.fly(5,6);//i'm polly  i can flt————  5 6
bird.fly.call(me,7,8);////i'm cc  i can flt————  7 8

bird.fly.apply(me,[7,8]);////i'm cc  i can flt————  7 8
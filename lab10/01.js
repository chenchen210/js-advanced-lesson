var a=10;
    b=20;
function fn(){
    var a=100,
        c=200;
    //console.log(a,b,c,d);报错因为d在函数里面访问不到
    function bar(){
        var a=500,
            d=600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//500,20,200,600
console.log(a,b,c,d);//报错，因为c在函数里面访问不到

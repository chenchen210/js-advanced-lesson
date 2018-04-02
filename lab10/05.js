console.log("全局上下文-start");
var x="家中环境";
function gotostore_a(){
    console.log("gotostore_a 上下文-start");
    var y="文具店a环境";
    gotobank_c();
    // gotobank_d();
    console.log("gotostore_a上下文-end");
}
function gotostore_b(){
    console.log("gotostore_b上下文-start");
    var y="文具店b环境";
    gotobank_c();
    //gotobank_d();
    console.log("gotostore_b上下文-end");
}
function gotobank_c(){
    console.log("gotobank_c上下文-start");
    var z="银行c环境";
    // console.log(x+y+z);
    console.log("gotobank_c上下文-end");
}
function gotobank_d(){
    console.log("gotobank_d上下文-start");
    var z="银行d环境";
    // console.log(x+y+z);
    console.log("gotobank_d上下文-end");
}
gotostore_a();
// gotostore_b();
console.log("全局上下文-end");
/**
全局上下文-start
gotostore_a 上下文-start
gotobank_c上下文-start
gotobank_c上下文-end
gotostore_a上下文-end
全局上下文-end
 */
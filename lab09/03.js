if(true){
    var i=0;
}

function foo(){
    console.log("j:",j);
    var j=10;
    console.log("j:",j);
}
foo();
//undefined
//10

console.log("i:",i);
console.log("j:",j);
//0
//报错，没有全局的j

var i;
if(true){
    i=0;
}
function foo(){
    var j;
    console.log("j:",j);
    j=10;
    console.log("j:",j);
}
foo();
console.log("i:",i);
console.log("j:",j);
//等价于最上面的代码，运行结果自然相同
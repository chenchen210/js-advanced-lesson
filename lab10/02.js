//静态词法作用域，甭管嵌套几层函数，只要找到最初的位置，从最初位置的作用链开始找
var name="Jack";
function echo(){
    console.log(name);
}
echo();//Jack

var name="Jack";
function echo(){
    console.log(name);
}
function foo(){
    var name="Bill";
    echo();
}
foo();//Jack


var name="Jack";
function echo(){
    console.log(name);
}
function foo(){
    var name="Bill";
    function fee(){
        var name="Lucy";
        echo();
    }
    fee();
}
foo();//Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope="g";
function foo(){
    var scope="l";
    return new Function("console.log(scope);")
}
foo()();//g
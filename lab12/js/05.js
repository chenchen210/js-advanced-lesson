function fn(){
    var a;
    return function(){
        return a||(a=document.body.appendChild(document.createElement('div')));
    }
};
var f=fn();
f();
//<div></div>

function closurExample(objID,text,timedelay){
    setTimeout(function(){
        console.log(objID,text);
    },timedelay);
}
closurExample("myDiv","Closure is Create",2000);
//myDiv Closure is Create

var db=(function(){
    var data={};
    return function(key,val){
        if(val===undefined){return data[key]}
        else{return data[key]=val}
    };
})();
db('x');//undefined
db('x',1);//1
db('x');//1

(function (){
    var m=0;
    function getM(){
        return m;
    }
    function setM(){
        m=val;
    }
    window.g=getM;
    window.f=setM;
}());
f(100);
g();//100

function f(){
    var result=[];
    for(var i=0;i<3;i++){
        var pos=i;
        var func=function(){
            return pos;
        }
        result.push(func);
    }
    return result;
}
console.log(f()[1]());//2

function f(){
    var result=[];
    for(var i=0;i<3;i++){
        (function(){
            var pos=i;
            var func=function(){
                return pos;
            }
            result.push(func);
            console.log(i,pos);
        }()); 
    }  
    return result;
}
console.log(f()[1]());
/**
 0 0
 1 1
 2 2
 1
 */
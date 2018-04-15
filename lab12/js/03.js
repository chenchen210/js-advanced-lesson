function counter(){
    var n=0;
    return {
        count:function(){return ++n;},
        reset:function(){n=0;return n;}
    }
}
var c=counter();
var d=counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
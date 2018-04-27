function thisTest(){
    "use strict"
    console.log(this);
}
thisTest();//undefined

"use strict"
function isStrictMode(){
    return this===undefined?true:false;
}
isStrictMode();//true
//严格模式下this为undefined
// 变量共享问题
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);
/**
Mon Jun 04 2018 19:35:53 GMT+0800 (中国标准时间) 3
Mon Jun 04 2018 19:35:54 GMT+0800 (中国标准时间) 3
Mon Jun 04 2018 19:35:55 GMT+0800 (中国标准时间) 3
*/

// 通过IIFE解决变量共享问题
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date,j);
        },1000*i);
    })(i);
}
/**
Mon Jun 04 2018 19:35:53 GMT+0800 (中国标准时间) 0
Mon Jun 04 2018 19:35:54 GMT+0800 (中国标准时间) 1
Mon Jun 04 2018 19:35:55 GMT+0800 (中国标准时间) 2
*/
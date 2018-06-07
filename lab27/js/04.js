//使用var可能存在变量共享问题
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);
/*
i: 3
Mon Jun 04 2018 19:50:44 GMT+0800 (中国标准时间) 3
Mon Jun 04 2018 19:50:45 GMT+0800 (中国标准时间) 3
Mon Jun 04 2018 19:50:45 GMT+0800 (中国标准时间) 3
*/

//使用let可以有效避免变量共享问题
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
/**
 3
 Mon Jun 04 2018 19:52:57 GMT+0800 (中国标准时间) 0
 Mon Jun 04 2018 19:52:58 GMT+0800 (中国标准时间) 1
 Mon Jun 04 2018 19:52:59 GMT+0800 (中国标准时间) 2
 */
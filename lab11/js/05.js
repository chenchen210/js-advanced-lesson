//变量共享问题
for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(new Date,i);
    }, 1000*i);
}
console.log("i",i);
//5
//Mon Apr 09 2018 22:26:32 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 22:26:32 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 22:26:32 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 22:26:32 GMT+0800 (中国标准时间) 5
//Mon Apr 09 2018 22:26:32 GMT+0800 (中国标准时间) 5

for(var i=0;i<5;i++){
    (function(j){
        setTimeout(function(){
            console.log(new Date,j);
        }, 1000*i);
    })(i);
}
//Mon Apr 09 2018 22:28:29 GMT+0800 (中国标准时间) 0
//Mon Apr 09 2018 22:28:29 GMT+0800 (中国标准时间) 1
//Mon Apr 09 2018 22:28:29 GMT+0800 (中国标准时间) 2
//Mon Apr 09 2018 22:28:29 GMT+0800 (中国标准时间) 3
//Mon Apr 09 2018 22:28:29 GMT+0800 (中国标准时间) 4
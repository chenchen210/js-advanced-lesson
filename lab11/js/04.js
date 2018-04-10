// 避免闭包中非期望的变量共享问题
// var tabs=document.getElementsByClassName('tabs')[0].children;
// var contents=document.getElementsByClassName('show')[0];
// for(var i=0;i<tabs.length;i++){
//     tabs[i].onclick=function(){
//         for(var j=0;j<tabs.length;j++){
//             tabs[j].className='';
//         }
//         this.className='active';
//         contents.innerHTML='导航'+i+'内容';
//     };
// }
//结果都是一样的，出现了变量共享

var tabs=document.getElementsByClassName('tabs')[0].children;
var contents=document.getElementsByClassName('show')[0];
for(var i=0;i<tabs.length;i++){
    (function(i){
        tabs[i].onclick=function(){
            for(var j=0;j<tabs.length;j++){
                tabs[j].className='';
            }
            this.className='active';
            contents.innerHTML='导航'+i+'内容';
        };
    })(i);
}
//预期结果
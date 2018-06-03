/*
XMLHttpRequest Get 请求,后端代码参见NodeAjaxTest01.js
*/
//实例一
var xhr=new XMLHttpRequest();
if(!xhr){
    console.log("xhr 创建失败！");
}
xhr.onreadystatechange=function(){
    console.log(xhr.readyState,xhr.status);
    //4--XMLHttpRequest对象的状态：完成，即响应数据接受完成
    if(xhr.readyState == 4){
        //200--服务器相应的代码：正确返回了数据
        if(xhr.status == 200){
            var message=xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get","http://127.0.0.1:8080?getInfo=MyGetInformation",true);
xhr.send();
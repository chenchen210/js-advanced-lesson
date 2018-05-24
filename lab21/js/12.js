window.onload=function(){
    window.Foo=function(){
        var inputValue=document.getElementById("inputID").value;
        try{
            var n=parseInt(inputValue);
            var a=new Array(n);
            for(var i=0;i<n;i++){
                a[i]=i;
            }
        }
        catch(e){
            alert(e.name+e.message);
            console.log("n:",n);
            a=[];
        }
        finally{
            document.getElementById("labeID").innerHTML=a+"_"+(a instanceof Array);
        }
    };
};

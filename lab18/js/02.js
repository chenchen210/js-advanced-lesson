// -----------Part1----------
var a=["hello"];
a[1]=3.14;
a[2]="world";
console.log("删除a[2]前的数组a",a);//删除a[2]前的数组a (3)["hello",3.14,"world"]
delete a[2];
console.log("删除a[2]后的数组a",a);//删除a[2]后的数组a (3)["hello",3.14,empty]
a[0]="xx";
console.log(a[0]);//xx


var i=2,b=[];
b[i]=3;
b[i+1]="yy";
b[b[i]]=b[0];
console.log(b)//(4)[empty,empty,3,empty]或者(4) [empty × 2, 3, undefined]

// ----------Part2----------
var a=[];
a[-1.23]=true;
a["100"]=0;
a[1.00]="Hi";
console.log(a.length);//101
console.log(a);
//(101)[empty,"Hi",empty x 98,0,-1.23:true]
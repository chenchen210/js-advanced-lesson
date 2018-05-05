//多维数组
//----例一---矩形数组和交叉数组
var table=new Array(5);
for(var i=0;i<table.length;i++){
    table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product=table[2][4];
console.log(table);
/**
0:(5) [0, 0, 0, 0, 0]
1:(5) [0, 1, 2, 3, 4]
2:(5) [0, 2, 4, 6, 8]
3:(5) [0, 3, 6, 9, 12]
4:(5) [0, 4, 8, 12, 16]
*/

var table=new Array(5);
for(var i=0;i<table.length;i++){
    table[i]=new Array(i);
}
for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product=table[2][4];
console.log(table);
/**
0:[]
1:[0]
2:(2) [0, 2]
3:(3) [0, 3, 6]
4:(4) [0, 4, 8, 12]
*/

//合并一起的写法
var table=new Array(5);
for(var i=0;i<table.length;i++){
    table[i]=new Array(5);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product=table[2][4];
console.log(table);
/**
0:(5) [0, 0, 0, 0, 0]
1:(5) [0, 1, 2, 3, 4]
2:(5) [0, 2, 4, 6, 8]
3:(5) [0, 3, 6, 9, 12]
4:(5) [0, 4, 8, 12, 16]
*/

var table=new Array(5);
for(var i=0;i<table.length;i++){
    table[i]=new Array(i);
    for(var col=0;col<table[i].length;col++){
        table[i][col]=i*col;
    }
}
var product=table[2][4];
console.log(table);
/**
0:[]
1:[0]
2:(2) [0, 2]
3:(3) [0, 3, 6]
4:(4) [0, 4, 8, 12]
*/
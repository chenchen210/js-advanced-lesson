//String.prototype.search 注意search忽略 全局g
console.log("a1b2c3d4".search(/1/));//1
console.log("a1b2c3d4".search(/f/));//-1 没有匹配项
console.log("a1b2c3d4".search(/\d/g));//1 忽略全局
console.log("a1b2c3d4".search(/\d\w/g));//1 忽略全局

//String.prototype.match 如果匹配不到返回null 匹配到了返回数组
// 包含的信息有index 原始字符串 有没有g影响很大
console.log("a1b2c3d4".match(/1/));//['1',index:1,input:'a1b2c3d4']
console.log("a1b2c3d4".match(/f/));//null
console.log("a1b2c3d4".match(/\d/));//['1',index:1,input:'a1b2c3d4']
console.log("a1b2c3d4".match(/\d/g));//["1","2","3","4"]

// String.prototype.replace
console.log("a,b,c,d".replace(",","X"));//"aXb,c,d"
console.log("a2b3c4d".replace(/[2-3]/,"X"));//"aXbXc4d"
console.log("a2b3c4d".replace(/[2-3]/g,"X"));//"aXbXc4d"

//String.prototype.split
console.log("a,b,c,d".split(","));//["a","b","c","d"]
console.log("a2b3c4d".split(/\d/));//["a","b","c","d"]

"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/);//['a',index:0,input:'abcdef21313sfsflsf1223jlnsa']
"abcdef21313sfsflsf1223jlnsa".match(/[a-h]/g);//["a","b","c","d","e","f","f","f","f","a"]
"abcdef21313sfsflsf1223jlnsa".match(/[123efsa]/g);// ["a", "e", "f", "2", "1", "3", "1", "3", "s", "f", "s", "f", "s", "f", "1", "2", "2", "3", "s", "a"]
"abcdef21313sfsflsf1223jlnsa".match(/[^123efsa]/g);// ["b", "c", "d", "l", "j", "l", "n"]
"abcdef21313sfsflsf1223jlnsa".match(/[1-2a-d]/g);//["a", "b", "c", "d", "2", "1", "1", "1", "2", "2", "a"]
"hello world Hi you".match(/hello|world/);//["hello", index: 0, input: "hello world Hi you"]
"hello world Hi you".match(/hello|world/g);//["hello","world"]
"world Hi you".match(/hello|world/);//["world,index:0,input:'world Hi you']
"THat hot hat".match(/h.t/);//["hot",index:5,input:'THat hot hat']
"THat hot hat".match(/h.t/g);//["hot","hat"]
"THat hot hat".match(/h.t/gi);//["Hat","hot","hat"]

var str='{name:"jinzhu"}';
var a=eval(str);
console.log(a)//jinzhu


var str='{"name":"jinzhu"}';
var a=eval(str);
console.log(a)//报错

var str='{"name":"jinzhu"}';
var a=eval("("+str+")");
console.log(a)//Object {name: "jinzhu"}
//等同于
var a=eval(JSON.parse(str))
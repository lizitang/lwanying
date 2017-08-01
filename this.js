"use strict"
function one(){
	this.name = 1;
	console.log(this);//window
	function two(){
		this.name = 2;
		console.log(this)//window
		function three(){
			var name=3;
			console.log(this.name);//window
		}
		return three;
	}
	return two;
}
one()()();
/*this总是指向它的直接调用者
在默认情况下（非严格模式下）没找到直接调用者，this指向window
在严格模式下，没有直接调用者的函数中的this指向undefined
使用call，apply,bind绑定的this指向绑定对象*/
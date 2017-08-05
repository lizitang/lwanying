### this指向问题
* 作为方法的调用
* 作为普通函数调用
* 构造器调用
* call，apply调用
#### 1，作为对象方法的调用
this指向改对象
```
var obj={
	a:1,
	get:function(){
		alert(this ===obj);//true
		alert(this.a);//1
	}
}
obj.get();
```
#### 2.作为普通函数调用
当函数不作为对象的属性被调用时，也就是常说的普通函数的调用，此时this指向全局对象。在浏览器的JavaScript中，全局对象是window对象
```
window.name ="cat";
var myObject = {
	name:'dog',
	getName:function(){
		return this.name;
	}
}
var getName =myObject.getName;
alert(getName());//cat
```
#### 3.构造器调用
构造器的外表跟普通函数一模一样，它们的区别在于调用方式。当用new操作符调用函数时，该函数总会返回一个对象，通常情况下，构造器里面的this就指向返回的这个对象
```
var a=function(){
	this.name="dog";
}
var b=new a;
alert(b.name);//dog
```
#### call，apply调用
跟作为普通函数调用相比，用Function.prototype.call和Function.prototype.apply可以动态地改变函数的this。
var a = {
	name:'dog',
	getName:function(){
		return this.name;
	}
}
var b={
	name:'cat'
}
alert(a.getName());//dog
alert(a.getName.call(b))//cat










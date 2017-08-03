## 原型链，原型和原型链的区别
#### 我们经常会这么写

```
function Person(name){
    this.name = name;
}

Person.prototype.say = function() {
    console.log('hello,'+this.name);
}

var person = new Person("john");
person.say();//hello,john
```
Person原型对象定义了公共的say方法  
==原型对象的用途是为每个实例对象存储共享的方法和属性，它仅仅是一个普通对象而已。并且所有的实例是共享同一个原型对象，因此有别于实例方法或属性，原型对象仅有一份。==
#### 可能也会这么写
```
function Person(name){
    this.name = name;
}

Person.prototype = {
    say:function(){
        console.log('hello,'+this.name);
    }
}

var person = new Person("john");
person.say();//hello,john
//把var person放在prototype上面也可以
```
但是这样写会报错！！！！！！！！
```
function Person(name){
    this.name = name;
}
var person = new Person("john");
Person.prototype = {
    say:function(){
        console.log('hello,'+this.name);
    }
}

person.say();//person.say is not a function
在js中，对象在调用一个方法时会首先在自身里寻找是否有该方法，若没有，则去原型链上去寻找，依次层层递进，这里的原型链就是实例对象的__proto__属性。
```
原型对象的结构
```
Function.prototype= {
    constructor :Function,
    _proto_:parent prototype,
    some prototype properties...
}
函数的原型对象constructor默认指向函数本身，原型对象除了有原型属性外，为了实现继承，还有一个原型链指针_proto_，该指针指向上一层的原型对象的结构，  
依然类似，这样利用__proto__一直指向Object的原型对象上，而Object的原型对象用Object.prototype.__proto__ = null表示原型链的最顶端，如此变形成了  
javascript的原型链继承
```





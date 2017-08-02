### js的继承

object orient语言都支持两种继承方式：接口继承和实现继承，但是ECMAscript只支持实现继承  
#### 原型链
    1.构造函数，原型和实例的关系
        每个构造函数都有一个原型对象，原型对象都包含一个指向一个指向构造函数的指针，而实例都包含一个指向原型对象的指针
### ==构造函数的继承==       
#### 1.借用构造函数(构造函数绑定)
    //动物对象的构造函数
    function Animal(){
        this.species = "动物";
    }
    
    //"猫"对象的构造函数
    function Cat(name,color){
        this.name = name;
        this.color = color;
    }
    //思考：怎么是猫继承动物呢
    //使用call和apply 的方法
    function Cat(name,color){
        Animal.apply(this,arguments);
        this.name =name;
        this.color = color;
    }
    car cat1 = new Cat("大毛","黄色");
    
    console.log(cat1.species);//"动物"
#### 组合继承(prototype模式)
如果猫的prototype对象指向一个Animal的实例，那么所有"猫"的实例就能继承Animal了
 //动物对象的构造函数
    function Animal(){
        this.species = "动物";
    }
    
    //"猫"对象的构造函数
    function Cat(name,color){
        this.name = name;
        this.color = color;
    }
    //思考：怎么是猫继承动物呢
    
    Cat.prototype = new Animal();
    <!--任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"  -->
    <!--这一行，Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。-->
    Cat.prototype.constructor = Cat;
    var cat1 = new Cat();
    console.log(cat1.species)
#### 利用空对象继承
    var F = function(){};
    F.prototype = Animal.prototype;
    Cat.prototype = new F();
    Cat.prototype.constructor = Cat;
    
    //利用上述方法封装函数
    function extend(Child,parent){
        var F = function(){};
        F.prototype = parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        child.uber = parent.prototype;
    }
    //使用方法
    extend(Cat,Animal);
    var cat1 = new Cat("大毛","yellow");
    console.log(cat1.species);
    //child.uber,意思是为子对象设一个uber属性，这个属性指向父对象的prototype
#### 拷贝继承
    把Animal所有不变属性都放在prototype对象上
    function Animal(){};
    Animal.prototype.species = "动物";
    //然后写一个函数，实现拷贝的目的
    function extend2(Child,Parent){
        var p = Parent.prototype;
        var c = Child.prototype;
        for (var i in p){
            c[i] = p[i]
        }
        c.uber = p;
    }
    //使用
    extend2(Cat,Animal);
    var cat1 = new Cat("lily","yellow");
    console.log(cat1.species)//动物
### ==非构造函数的继承==
#### 非构造函数
    //有一个对象，名为:"中国人"
    栗子：var Chinese = {
        nation : "中国"
    };
    //还有一个对象，叫做："医生"
    var Doctor ={
        career :"医生"
    }
#### 1.==object()方法==    
    
    //子对象的prototype属性，指向父对象
    function object(o){
        function F(){
            F.prototype = o;
            return new F();
        }
    }
    //让医生去继承中国人
    
    //使用
    var Doctor = object(Chinese);
    Doctor.career = "医生";
    console.log(Doctor.nation);
#### ==2.浅拷贝==
    function extendCopy(p){
        var c = {};
        for(var i in p){
            c[i] = p[i]
        }
        c.uber = p;
        return c;
    }
    //使用的时候这样写
    var Doctor = extendCopy(Chinese);
    Doctor.career = "医生";
    console.log(Doctor.nation);
    <!--但是这样有一个问题：如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正
    拷贝，因此存在父对象被篡改的可能-->
    //extendCopy()只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"
#### ==深拷贝==
所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。  

```
function deepCopy(p,c){
    var c =c||{};
    for(var i in p){
        if(typeof p[i] === 'object'){
            c[i] = (p[i].constructor === Array)?[]:{};
            deepCopy(p[i],c[i]);
        }else{
            c[i]==p[i]
        }
    }
    return c;
}
//使用时
var Doctor = deepCopy(Chinese,Doctor);
Chinese.birthPlaces = ['北京','上海'];
Doctor.birthPlaces.push("厦门");
//这样父对象就不会受影响啦
```





    



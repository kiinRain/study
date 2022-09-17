var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var b = 1;
function fn1(c) {
    console.log(c + 'hello,ts');
}
// let c: any;
// let d = 'str'
// c = d
// console.log(c);   //str
var c;
var d;
d = 'str';
// 类型断言       编译阶段起作用 强制d为string类型
c = d;
c = d; //等同
var a; //可以是空/null/undefined
var e; //不可以为任何值
//对象
var f; // ？代表age类型可选
f = { name: 'zhu' };
var g; //[xxx:string]:any 用于设定任意长度的类型  xxx可更换任意
g = { name: 'zzz', x: 1, y: 2, z: 3 };
var fn2; //定义fn2 结构类型  返回值为boolean类型
//数组 声明的两种方式
var h;
var i;
//元祖 固定长度的数组 tuple
var j;
j = ['1', 2, true];
//enum  可枚举的
var Gender;
(function (Gender) {
    Gender[Gender["mele"] = 0] = "mele";
    Gender[Gender["femele"] = 1] = "femele";
})(Gender || (Gender = {}));
var k;
k = {
    name: 'sa',
    gender: Gender.mele
};
k = {
    name: 'sia',
    gender: Gender.femele
};
var l;
l = { name: 'wang', gender: Gender.mele };
var m = 311;
//next   tsc  xxx.ts -w   开启自动监视ts文件更改    tsc -init  
// class 类 
var Person = /** @class */ (function () {
    // readonly 定义只读属性
    function Person(name, age) {
        //定义实例属性
        this.name = name;
        this.age = age;
        console.log(1, this);
        //  定义类属性
    }
    Person.prototype.sayhello = function () {
        console.log('hello');
        console.log(this);
    };
    Person.sayfuck = function () {
        console.log('fuck');
        console.log(this);
    };
    Person.age = 11;
    return Person;
}());
// 实例
var per1 = new Person("sunwukong", 18);
var per2 = new Person("bimawen", 18);
per1.sayhello();
per2.sayhello();
Person.sayfuck();
//class中的this 
//  constructor中的this 指向 当前调用方法的对象
// 继承  
var animals = /** @class */ (function () {
    function animals(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    animals.prototype.run = function () {
        console.log(this.name + 'run');
    };
    return animals;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.run = function () {
        console.log(this.name);
    };
    Dog.prototype.hei = function () {
        console.log("hei");
    };
    return Dog;
}(animals));
// 在类的方法中，super关键字代表当前类的父类（可以调用父类的方法 ex：super.run() ）
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age, sex) {
        var _this = 
        // 子类继承父类的属性 需要加上super关键字 以及参数
        _super.call(this, name, age) || this;
        _this.sex = sex;
        return _this;
    }
    return Cat;
}(animals));
var ani = new animals("anis", 1);
var dog1 = new Dog('wangcai', 1);
var cat1 = new Cat('miaomiao', 1, "男");
dog1.run();
dog1.hei();
cat1.run();
// abstract  定义抽象类/抽象方法
// 抽象类就是用来给其他类用于继承的方法
var animals1 = /** @class */ (function () {
    function animals1() {
    }
    // 也可以定义普通方法
    animals1.prototype.run = function () {
    };
    return animals1;
}());
// 抽象类的继承
var tiger = /** @class */ (function (_super) {
    __extends(tiger, _super);
    function tiger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tiger.prototype.say = function () {
    };
    return tiger;
}(animals1));
/*
* 定义类可以使类实现一个接口
* 实现接口就是满足接口的要求
*   普通类继承接口的格式使用implements
*/
var myin = /** @class */ (function () {
    function myin(name) {
        this.name = name;
    }
    myin.prototype.myrun = function () {
        console.log("myrun");
    };
    return myin;
}());
// 属性的封装  
(function () {
    var person1 = /** @class */ (function () {
        function person1(name, age) {
            this._name = name;
            this._age = age;
        }
        Object.defineProperty(person1.prototype, "name", {
            get: function () {
                console.log('get');
                return this._name;
            },
            set: function (value) {
                // 可以在这里对修改数据前进行判断  符合条件修改  不符合返回
                this._name = value;
                console.log('set');
            },
            enumerable: false,
            configurable: true
        });
        return person1;
    }());
    var p1 = new person1("sun", 18);
    p1.name = '猪八戒';
    console.log('_____', p1);
    console.log(p1.name);
})();

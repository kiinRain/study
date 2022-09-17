let b:Number  = 1;
function fn1(c:string):any {    //给函数设定返回值类型
  console.log(c + 'hello,ts');
  
}
// let c: any;
// let d = 'str'
// c = d
// console.log(c);   //str
let c: unknown;
let d:string
d = 'str'
// 类型断言       编译阶段起作用 强制d为string类型
c = d as string  ;   c = <string>d      //等同
let a: void       //可以是空/null/undefined
let e: never      //不可以为任何值

//对象
let f : {name:string,age?:number}       // ？代表age类型可选
f = {name: 'zhu'}

let g:{name:string,[xxx:string]:any}    //[xxx:string]:any 用于设定任意长度的类型  xxx可更换任意
g = {name:'zzz',x:1,y:2,z:3}
let fn2: (a:number,b:number)=>boolean    //定义fn2 结构类型  返回值为boolean类型
//数组 声明的两种方式
let h: string[];
let i: Array<string>

//元祖 固定长度的数组 tuple
let j: [string,number,boolean]
j = ['1',2,true]

//enum  可枚举的
enum Gender{
mele,
femele
}
let k: {name:string,gender:Gender}
k = {
  name:'sa',
  gender:Gender.mele
}
k = {
  name:'sia',
  gender:Gender.femele
}
//类型的别名
type myType = {name:string,gender:Gender}
let l : myType 
l = {name:'wang',gender:Gender.mele}

 let m = 311

//next   tsc  xxx.ts -w   开启自动监视ts文件更改    tsc -init  

 
// class 类 
class Person {
  name:string
  age:number
  // readonly 定义只读属性
  constructor(name:string,age:number){
    //定义实例属性
   this.name = name;
   this.age = age
   console.log(1,this);
   
    //  定义类属性
    
  }
  static readonly age:number = 11
sayhello(): void{
  console.log('hello')
  console.log(this)
}
static sayfuck(){
  console.log('fuck');
  console.log(this);
  
}
}
// 实例
const per1 = new Person("sunwukong",18);
const per2 = new Person("bimawen",18);
per1.sayhello()
per2.sayhello()
Person.sayfuck()
//class中的this 
//  constructor中的this 指向 当前调用方法的对象

// 继承  
class animals{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  };
  run(){
    console.log(this.name + 'run');
    
  }
}
class Dog extends animals{
  run(): void {
    console.log(this.name);
  }
  hei(){       //子类新增方法
    console.log("hei");
  }
}
// 在类的方法中，super关键字代表当前类的父类（可以调用父类的方法 ex：super.run() ）
class Cat extends animals{
  sex:string
  constructor(name:string,age:number,sex:string){
    // 子类继承父类的属性 需要加上super关键字 以及参数
    super(name,age)
    this.sex = sex
  }
}
let ani = new animals("anis",1)
let dog1 = new Dog('wangcai',1)
let cat1 = new Cat('miaomiao',1,"男")
dog1.run()
dog1.hei()
cat1.run()

// abstract  定义抽象类/抽象方法
// 抽象类就是用来给其他类用于继承的方法
abstract class animals1{
  // 定义抽象方法（只能定义在抽象类中）没有方法体  供子类重写（子类必须重写）
  abstract say():void
  // 也可以定义普通方法
  run(){

  }
}
// 抽象类的继承
class tiger extends animals1{
  say(): void {    //实现抽象方法
    
  }
}
//接口   接口只能定义对象的结构 /抽象属性及方法  没有实际的值
interface myinter{
  name: string
  myrun(): void
}

/*
* 定义类可以使类实现一个接口 
* 实现接口就是满足接口的要求
*   普通类继承接口的格式使用implements   
*/
class myin implements myinter{
  name:string;
  constructor(name:string){
    this.name = name

  }
  myrun(): void {
   console.log("myrun");
   
  }
  
}
// 属性的封装  
(function() {
  class person1 {
    // public  在任意地方修改 
    // private  私有属性 只能在类内部修改
    private _name:string;
    private _age:number;
    constructor(name:string,age: number){
      this._name = name
      this._age = age
    }
    get name(){
      console.log('get');
      return this._name
      
    }
    set name(value:string){
      // 可以在这里对修改数据前进行判断  符合条件修改  不符合返回
      this._name = value
      console.log('set');
      
    }
  }
  const p1 = new person1("sun",18)
  p1.name = '猪八戒'
  console.log('_____',p1);
  console.log(p1.name);
  
})()
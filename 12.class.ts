// 类
/**
 * 创建一个类
 * class Greeter {
 *  greeting: string;
 *  constructor(message: string) {
 *    this.greeting = message;
 *  };
 *  greet() {
 *    return 'hello ' + this.greeting;
 *  }
 * }
 * let greeter = new Greeter('world');
 * 
 * 上述Greeter类有三个属性，一个构造函数，一个greeting属性和一个greet方法；在引用类的成员的时候使用了this表示访问的是同一个类里的成员；
 * greeter是一个使用new关键字构造的Greeter实例，实例化时会调用Greeter类的构造函数创建一个Greeter类型的对象，并执行构造函数进行初始化；
 */
// 类的继承
/**
 * class Animal {
 *  move(distance: number) {
 *    console.log('Animal moved ' + distance + 'meters');
 *  }
 * }
 * class Dog extends Animal {
 *  bark() {
 *    console.log('woof');
 *  }
 * }
 * let dog = new Dog();
 * 上述例子是一个最基本的继承；子类Dog从父类(通常被称为超类)Animal中继承了属性和方法；因为子类Dog继承了父类Animal中的方法，因此当我们实例化Dog时，实例化对象dog具有Dog的bark方法和Animal的move方法；
 * 
 * 复杂的继承
 * class Animal {
 *  name: string;
 *  constructor(animalName: string) { this.name = animalName; };
 *  move(distance: number) {
 *    console.log(this.name + 'moved' + distance + 'meters');
 *  }
 * }
 * class Snake extends Animal {
 *  constructor(name: string) { super(name); }
 *  move(distance = 5) {
 *    console.log("Slithering...");
 *    super.move(distance);
 *  }
 * }
 * class Horse extends Animal {
 *  constructor(name: string) { super(name); }
 *  move(distance = 45) {
 *    console.log("Galloping...");
 *    super.move(distance);
 *  }
 * }
 * let sam = new Snake("Sammy the Python");
 * let tom: Animal = new Horse("Tommy the Palomino");
 * sam.move();    // Slithering...    Sammy the Python moved 5 meters
 * tom.move(34);  // Galloping...     Tommy the Palomino moved 34 meters
 * 上述例子中，Snake和Horse是Animal的两个子类；跟之前不同的是，两个子类都有自己的构造函数，在子类的构造函数中必须调用super()使子类能够执行父类的构造函数；同时TypeScript规定：在子类的构造函数里访问this属性之前，必须先调用super();
 * 这个例子里Snake和Horse都继承的父类Animal的move方法，但子类本身也创建了move方法，在子类中创建的方法最终会重写从父类中继承来的方法，使构造的实例化对象中的move方法具有不同的功能；
 * 这里tom虽然被声明为Animal类型，但因为tom是Horse类的实例化对象，因此执行tom.move(34)调用的是Horse类中重写过的move方法；
 */
// 公共(public)、私有(private)和受保护(protected)修饰符
/**
 * TypeScript中使用三种访问修饰符public, privete和protected；
 * public修饰的属性和方法是公有的，可以在任何地方被访问到，默认类中的属性和方法都是public的；
 * private修饰的属性和方法是私有的，不能在声明他的类的外部使用；
 * protected修饰的属性和方法是被保护的，功能与protected类似，不同的是protected的属性在子类中也是可以被访问的；
 * class Animal {
 *  private name: string;
 *  public constructor (name: string) { this.name = name }
 * }
 * class People extends Animal {
 *  constructor (name) {
 *    super(name);
 *    console.log(this.name);   // error
 *  }
 * }
 * let jack = new Animal('Jack');
 * console.log(jack.name);    // error
 * 类Animal的name属性是private的，因此实例化对象jack访问name属性时，ts编译器会报错；同时子类People访问name属性时一样会报错；
 * 需要注意的是，当ts代码经过编译之后，就不会限制private的属性在类外部的访问；
 * 
 * class Animal {
 *  protected name: string;
 *  public constructor (name: string) { this.name = name }
 * }
 * class People extends Animal {
 *  constructor (name) {
 *    super(name);
 *    console.log(this.name);   // 能够正常访问
 *  }
 * }
 * let jack = new Animal('Jack');
 * console.log(jack.name);    // error
 * 当使用protected修饰name属性时，实例化对象jack访问name属性，编译器会报错，而子类People访问name属性则能正常访问；
 */
// readonly修饰符
/**
 * 当类中的属性被readonly修饰，则该属性只能在声明时或在构造函数内初始化；
 * class Octopus {
 *  readonly name: string;
 *  readonly numOfLegs: 8;
 *  public constructor(name: string) { this.name = name };
 * }
 * let octopus = new Octopus('Octopus has 8 legs');
 * octopus.name = 'The octopus's leg is delicious';    // error
 * 类Octopus的name属性被readonly修饰，因此在构造函数内初始化过后，属性不能再被修改；
 */
// 参数属性
/**
 * 参数属性可以很方便的在任意的地方定义并初始化数据；
 * class People {
 *  constructor(private name: string) {  };
 *  move(distance) {
 *    console.log(this.name + 'moved' + distance + 'meters');
 *  }
 * } 
 * 上述例子中，我们在构造函数内使用private name:string声明并初始化name属性，把声明和赋值合并到了一处；
 * 参数属性通过给构造函数的参数添加访问限定符来实现；规则与使用private、public和protected修饰符声明的属性相同；
 */
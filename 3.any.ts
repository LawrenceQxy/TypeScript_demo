// any 在 ts 中表示任意值，意思是可以赋值为任意数据类型
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值(any)类型
let something;    // 等价于 let something: any;
something = 'seven';
something = 7;
something.setName('Tom');
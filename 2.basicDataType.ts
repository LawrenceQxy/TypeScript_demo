// 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
// 布尔值 (Boolean)
let isDone: boolean = false;    // 编译通过
// let isNewWrong: boolean = new Boolean(1);    // 编译时会报错：error TS2322: Type 'Boolean' is not assignable to type 'boolean'. 因为构造函数Boolean 构建的是对象而不是布尔值；而直接调用Boolean 函数能够成功返回一个布尔值；
let isNewCorrect: boolean = Boolean(1);     // 编译通过

// 数值 (Number)
// 十进制
let decLiteral: number = 6;
// 十六进制
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法，编译完成后会被编译为十进制数字
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法，编译完成后会被编译为十进制数字
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串 (String)
let myName: string = 'Tom';
let myAge: number = 25;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;
// 模板字符串会被编译为 let sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";

// 空值
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName(): void {
  alert('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
let unusable: void = undefined;

// null 和 undefined
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型，undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null
let u1: undefined = undefined;
let n1: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量，而 void 类型的变量不能赋值给 number 类型的变量
// 这样不会报错
let num1: number = undefined;
// 这样也不会报错
let u2: undefined;
let num2: number = u2;
// 这样编译时会报错  error TS2322: Type 'void' is not assignable to type 'number'.
// let u3: void;
// let num:3 number = u3;
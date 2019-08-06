// 联合类型 (union types) 表示取值时可以为多种数据类型中的一个是，联合类型使用时多个数据类型使用 | 分割
let myFavoriteNumber1: string | number;
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
// myFavoriteNumber1 = true;     // 此时编译会报错
// 以上代码 myFavoriteNumber 被赋予了string 和 number 两个数据类型，因此可以被赋值为 'seven' 和 7；当被赋值为 true 时，因为 myFavoriteNumber 不能被赋值为boolean 因此编译时会出错；

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): number {
  // length 不是 string 和 number 的共有属性，因此编译时会出错
  // return something.length;
  return 11
}
function getString(something: string | number): string {
  // toString 为 string 和 number 的共有方法，能够被成功编译
  return something.toString();
}

// 联合类型在初始化赋值时会根据所赋的初值推断出一个明确的数据类型，并根据这个明确的数据类型判断相应的属性和方法
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length); // 5
myFavoriteNumber2 = 7;
// console.log(myFavoriteNumber.length); // 编译时报错
// 上例中第一次赋值 myFavoriteNumber 被确定为 string 数据类型，此时该变量拥有 length 属性；第二次赋值时被确定为 number 数据类型，此时该变量没有 length 属性， 因此编译时会报错
// 函数的输入和输出在 ts 中都需要进行数据类型的限制
// 函数声明式定义
function sum(x: number, y: number): number {
  return x + y;
}
// 需要注意的是：在 ts 中，调用函数时不能输入多余的或是输入少于要求的参数；

// 函数表达式定义
// 函数表达式定义时，需要对等号左右两侧均进行输入、输出的数据类型限制
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
// 需要注意的是：在 ts 中 => 的定义与 ES6 中，不同，并不是表示箭头函数， => 左侧表示函数的输入类型，需要用括号包裹，右侧表示函数的输出类型

// 用接口定义函数
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
// 接口 SearchFunc 定义了一个输入均为字符串的 source 和 subString 输入为布尔值的函数


// 可以通过添加可选输入参数定义非必须传入函数的参数，与接口的可选属性相同，可选参数也使用 ? 定义
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
      return firstName + ' ' + lastName;
  } else {
      return firstName;
  }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
// 上例中，lastName 为可选参数，因此调用buildName 函数时无论是否输入lastName 参数均能成功编译
// 需要注意的是，*可选参数必须在必需参数的后面定义*，也就是说在可选参数的后面不允许再出现必需参数
// 在上例中 如果firstName 为可选参数，那么需将firstName 写在lastName 后面，否则编译时会出错

// ES6 中允许给函数的参数添加默认值，而在 ts 中，这些添加了默认值的参数*会被视为可选参数*，但添加了默认值的可选参数*不受可选参数必需在必需参数后*的限制
function buildNameDe(firstName: string, lastName: string = 'Cat') {
  return firstName + ' ' + lastName;
}
let tomcatDe = buildNameDe('Tom', 'Cat');
let tomDe = buildNameDe('Tom');

// 在ES6 中可以使用 ... 语法糖定义剩余参数(rest参数)
// ...会将rest参数转化成数组，因此剩余参数使用array 来定义
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
      array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 可以利用ts 的输入输出不同定义函数的重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// 上例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示
// 注意，TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
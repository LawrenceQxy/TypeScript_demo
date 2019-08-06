// 在 ts 中通常使用数组内数据类型+[]的方式表示数组
let fibonacci1: number[] = [1, 1, 2, 3, 5];
// 上例中定义了一个内部数据类型全部为 number 数组，数组内全部的项都被定义为 number 类型，如果在此数组中增加一个其他类型的数据，编译时会报错

// 也可以使用数组泛型来定义数组 形状如：Array<eleType>
let fibonacci2: Array<number> = [1, 1, 2, 3, 5];

// 还可以使用接口定义数组
interface NumberArray {
  [index: number]: number;
}
let fibonacci3: NumberArray = [1, 1, 2, 3, 5];
// 上例接口表示通过接口定义的变量index属性的数据类型为 number 属性值也为 number

// 比较常见的数组是用 any 类型来表示允许数组中出现任意类型的值
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
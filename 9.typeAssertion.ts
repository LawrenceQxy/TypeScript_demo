// 类型断言是指可以手动的指定一个值的数据类型
// 语法： <数据类型>值 或者是 值 as 数据类型
// 注意： 在tsx (react jsx语法的ts版)中 只能使用*值 as 数据类型*的方法
//  function getLength(something: string | number): number {
//   if (something.length) {
//       return something.length;
//   } else {
//       return something.toString().length;
//   }
// }
// 上述函数代码中 因为something 的数据类型不确定，当数据类型是 number 时，something.length  不存在，编译时会报错，此时可以将 something 断言为 string，从而避免出错
function getLength(something: string | number): number {
  if ((<string>something).length) {
    // 如果<boolean>something 则编译时会报错，因为boolean 不属于联合类型 string | number
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}
// 需要注意的是，类型断言并不是类型转换，不允许将参数断言为一个联合类型中不存在的数据类型
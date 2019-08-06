// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述

interface Person {
  name: string;
  age: number;
}
let tom: Person = {
  name: 'Tom',
  age: 25
};
// 定义的变量的属性与定义的接口的属性必须完全相同，赋值的时候，变量的形状必须和接口的形状保持一致，否则编译时会报错

// 当希望定义一个不完全匹配的形状时，可以在定义时增加可选属性
interface Personal {
  name: string;
  age?: number;
}

let tomas: Personal = {
  name: 'Tom'
};
// 上例中接口 Personal 的 age 属性为可选属性，因此变量 tomas 中可以不声明 age 属性；
// 但需要注意的是 声明的变量中不允许添加接口中未定义的属性

// 当希望接口中有任意的属性时，可添加任意属性
interface PersonAny {
  name: string;
  age?: number;
  [propName: string]: any;
}

let tomAny: PersonAny = {
  name: 'Tom',
  gender: 'male'
};
// 上例中 [propName: string] 定义了一个数据类型为 any 的任意属性，因此变量 tomAny 中可以声明一个任意属性名 数据类型为 any 的属性
// 但需要注意的是，声明任意属性时，任意属性的数据类型必须为接口确定属性和可选属性的合集，也就是说任意属性的数据类型必须包括确定属性的数据类型和可选属性的数据类型，如果不包括 则编译时会报错

// 如果希望接口声明的变量中的属性只能在创建的时候被赋值，那么可以使用 readonly 声明只读属性
interface PersonRN {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tomRN: PersonRN = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};
// tomRN.id = 97275;
// 上例中 PersonRN 接口定义了一个只读的id属性，在声明变量 tomRN 时初始化了 id 属性，之后如果再次修改 id 属性 则编译时会报错；
// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候，如果声明变量时没有初始化 id 属性，那么及时之后对 id 属性进行赋值操作 编译时依然会报错
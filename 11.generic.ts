// 泛型：用动态的类型(类型变量)描述函数和类的方式
/**
 * 创建一个返回任何传入值的函数，如果不使用泛型，可以使用any来定义函数
 * function identity(arg: any): any {
 *  return arg;
 * }
 * 但是如果使用any，会丢失一些信息：传入值的数据类型与返回值的数据类型相同，此时当我们传入一个number类型的数据时，无法确定具体什么数据类型的值会被返回；
 * 
 * 因此，我们需要用一种方法类标明传入值和返回值的数据类型是相同的；此时可以使用类型变量来实现这个功能；类型变量是一种特殊变量，用来表示数据类型而不是值；
 * function identity<T>(arg: T): T {
 *  return arg;
 * }
 * identity函数增加了类型变量T，类型变量T可以捕获传入参数的数据类型，同时，返回值的数据类型也被限制为T，这样就能够保证传入值和返回值的数据类型相同了；
 * 这个版本的identity函数就被叫做泛型，因为可以适用于多个数据类型；同时，与使用any不同的是不会丢失数据类型信息，能够准确的表示传入值和返回值的数据类型；
 *  */
// 泛型的使用方法
/** 
 * 第一种方法是传入确定的类型变量；
 * let output = identity<string>('input');
 * 类型变量使用<>包裹；这里我们给类型变量T传入了明确的数据类型string；
 * 
 * 第二种方法是使用类型推断，让编译器根据传入值的数据类型自动确定类型变量T的数据类型
 * let output = identity('input');
 * 这种方法更为普遍；使用这种方法不需要使用<>来传入明确的数据类型，编译器可以通过传入参数的数据类型推断出具体的数据类型，同时设置类型变量T的数据类型；类型推断可以帮助保持代码精简性和可读性；
 */
// 泛型约束
/**
 * 当使用identity这样的泛型函数的时候，编译器要求函数体内的必须正确的使用传入参数的属性和方法；也就是说必须使用所有数据类型都有的属性和方法才能正确编译；
 * 修改identity函数使在函数体内打印传入参数arg的长度
 * function logIdentity<T>(arg: T): T {
 *  console.log(arg.length);
 *  return arg;
 * }
 * 此时编译器会对length属性报错，这是因为没有地方表明参数arg具有length属性；函数声明的时候T为任意数据类型，当T为number的时候，不存在length属性；
 * 
 * 因此，logIdentity函数应该这样定义；假设想操作的是元素类型为T的数组
 * function logIdentity<T>(arg: Array<T>): Array<T> {
 *  console.log(arg.length);
 *  return arg
 * }
 * 可以这样理解函数logIdentity：泛型函数logIdentity接收参数arg和类型参数T，参数arg是一个元素类型均为T的数组，同时返回一个元素类型均为T的数组；
 * logIdentity也可以写成下面的形式
 * function logIdentity<T>(arg: T[]): T[] {
 *  console.log(arg.length);
 *  return arg
 * }
 */
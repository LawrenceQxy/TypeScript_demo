// 当没有指定明确的数据类型时，ts 会依据类型推论(type inference)原则推断出一个数据类型；

// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
// 以上代码在编译时会出错；因为 myFavoriteNumber 初始化时被赋予了一个 string 类型的值，因此 ts 默认 myFavoriteNumber 为 string 数据类型，当赋值为 number 数据类型时，编译报错；
// 注意：当声明变量时没有初始化赋值，则该变量会被默认为 any 类型，此时将不会对该变量进行类型检查
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 以上代码可以被成功编译
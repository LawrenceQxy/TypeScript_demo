function sayHello (person: string) {
  return `Hello ${person}`;
}

let user = 'Tom';
console.log(sayHello(user));

// 使用 tsc xxx.ts 可以将 ts 文件编译为 js 文件。
// 注意：即使 ts 文件编译时报错了，依旧会生成编译成果；如果想在编译报错是终止编译，可以在 tsconfig.json 文件中配置 noEmitOnError 属性，详见：http://www.typescriptlang.org/docs/handbook/tsconfig-json.html
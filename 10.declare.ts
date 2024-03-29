// 声明文件：当引入第三方库时，需要引用其声明文件，这样才能获得代码补全、接口提示等功能
// 声明语句：假如我们想使用第三方库jQuery，一种常见的方式是在html中通过script标签引入jQuery，然后就可以使用全局变量$或jQuery了；但是在ts中编译器并不能识别$或jQuery，因此需要定义，定义的方式就叫做声明语句
declare var jQuery: (selector: string) => any;
jQuery('#foo');
// 上例中，declare var并没有真的定义一个变量，只是定义了全局变量jQuery的类型，仅仅会用于编译时的检查，在编译结果中会被删除

// 一般使用ts第三方库的时候会把声明语句放在一个单独的文件中，这个文件就被叫做声明文件；
// 声明文件必须以.d.ts做后缀

// 没搞懂 待补全
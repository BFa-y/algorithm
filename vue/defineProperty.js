// 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
Object.defineProperty(obj, prop, descriptor)
// 要定义属性的对象。
// 要定义或修改的属性的名称或 Symbol 
// 要定义或修改的属性描述符
const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

// object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
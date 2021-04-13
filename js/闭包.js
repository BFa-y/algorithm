var counter = 0;
function add() {
   return counter += 1;
}
console.log(add())  //1
console.log(add())  //2

function add() {
    var counter = 0;
   return counter += 1;
}
console.log(add())  //1
console.log(add())  //1
// 闭包是一种机制，保护私有变量的机制
// 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();
 
console.log(add())  //1
console.log(add())  //2
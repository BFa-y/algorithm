// 防抖
1.防抖是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
// 节流
1.节流是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。例：重复点击
2.对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。
// 2.手动防重复
<x-button id="reclickTac" type="primary" form-type="submit">
const reclickTac = document.querySelector("#reclickTac")
reclickTac = true;
console.log("按钮禁用")
setTimeout(() => {
    reclickTac = false;
    console.log("按钮可点击")
}, 3000);

// 2.以防重复的方式去请求接口
$xx.xxx.Ajax.execute({
    url: "",
    params: ""
})
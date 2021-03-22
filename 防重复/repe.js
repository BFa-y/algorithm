// 1.手动防重复
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
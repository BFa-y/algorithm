// HTML DOM querySelector() 方法- 返回匹配到的指定选择器的第一个元素
<p id="demo">id="demo" 的 p 元素</p>
<div class="p-line-ress1"></div>
<button onclick="myFunction()">点我</button>
function myFunction() {
    document.querySelector("#demo").innerHTML = "Hello World!";
    document.querySelector(".p-line-ress1").style.width = "500px"
    document.querySelector(".p-line-ress1").style.background = "blue"
}
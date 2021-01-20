// DOM property 和 HTML attribute
html元素上定义属性(attribute)
浏览器解析代码创建DOM节点，该节点是一个对象，具有属性(property)

// v-bind:variable="js表达式"
// 动态地绑定一个或多个 attribute，或一个组件 prop 到表达式

<!-- 绑定一个 attribute -->
<img v-bind:src="imageSrc">
<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 组件传值 ***** -->
<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>



// v-model 在“表单控件”或者“组件”上创建双向绑定
<!-- input -->
<p>{{ message }}</p>
<input v-model="message">
<!-- === -->
v-bind 绑定一个value属性
v-on 指令给当前元素绑定input事件,监听输入
<input :value="message" @input="test = $event.target.value">

// 自定义事件
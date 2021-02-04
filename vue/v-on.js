// v-on 缩写 @
应用交互,绑定事件监听器
事件类型由参数指定。表达式可以是一个方法的名字或“一个内联语句”，"如果没有修饰符也可以省略"

// 修饰符
.stop - 调用 event.stopPropagation()-停止冒泡。
.prevent - 调用 event.preventDefault()-阻止默认行为。
.native - 监听组件根元素的原生事件。

<!-- 方法处理器 -->
<button v-on:click="doThis"></button>
<!-- $event -->
<div v-on:click="handle('ok', $event.type, $event.target)">确定</div>
handle(a,b){
   console.log(a,b) // ok, MouseEvent{....} click, <div>确定</div>
}

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件 -->
<button v-on:[event]="doThis"></button>
@click,@keyup,@submit.... ===@[event]

<!-- 动态事件缩写  -->
<button @[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

// 在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：
<my-component @my-event="handleThis"></my-component>

<!-- 内联语句 -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>

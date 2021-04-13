// 状态管理模式-需要共享的data，使用vuex进行统一集中式的管理，数据共享
1）state
state是存储的单一状态，是存储的基本数据。

2）Getters
getters是store的计算属性，对state的加工，是派生出来的数据。就像computed计算属性一样，
getter返回的值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算。

3）Mutations
mutations提交更改数据，使用store.commit方法更改state存储的状态。（mutations同步函数）
为什么Mutations必须是异步的呢？
entry.forEach。。。。。。

4）Actions
Action 类似于 mutation，不同在于：
 Action 提交的是 mutation，而不是直接变更状态。
 Action 可以包含任意异步操作。
 就是为了解决Mutations同步而提出了Actions。

5）Module
Module是store分割的模块，每个模块拥有自己的state、getters、mutations、actions。

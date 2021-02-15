// vue 条件渲染
// v-else-if，充当 v-if 的“else-if 块”，可以连续使用：
// v-else 表示 v-if 的“else 块”，必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别
// 用 key 管理可复用的元素
// 复用
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
//不复用 ==v-show
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
    <label>Email</label>
    <input placeholder="Enter your email address" key="email-input">
</template>
const [a, b, c, d, e] = "hello"
const { boo, fur } = { boo: "booing", fur: "furing" }
// console.log(a, typeof (a))  // a ,string
// console.log(boo, typeof (boo))  // booing ,string

if (a === "h") {
    console.log("value1")
    if (boo==="booing") { 
        console.log("value2_1")
    } else {
        console.log("value2_2")
    }
}
else if (b === "e") {
    console.log("value2")
} else {
    console.log("result")
}

const actions = new Map([
    [1, ['processing', 'IndexPage']],
    [2, ['fail', 'FailPage']],
    [3, ['fail', 'FailPage']],
    [4, ['success', 'SuccessPage']],
    [5, ['cancel', 'CancelPage']],
    ['default', ['other', 'Index']]
])

// if else 逻辑判断处理
/**
 * 按钮点击事件
 * @param {number} status 
 */
const onButtonClick = (status) => {
    let action = actions.get(status) || actions.get('default')
    sendLog(action[0])
    jumpTo(action[1])
}
/**
 * @param
 */
// getTime()时间戳处理时间
// let sta = new Date(20200101).getTime()

// console.log(sta)
let list = []
let acctList = [
    { ACCT: "1111111111", ACCT_TYPE: "1" },
    { ACCT: "2222222222", ACCT_TYPE: "3" },
    { ACCT: "333333333", ACCT_TYPE: "5" }
]
for (var item of acctList) {
    if (!(item.ACCT_TYPE === "3")) {
        list.push(item)
    }
}
console.log(list)
let list = []
let acctList = [
    { ACCT: "1111111111", ACCT_TYPE: "1" },
    { ACCT: "2222222222", ACCT_TYPE: "3" },
    { ACCT: "333333333", ACCT_TYPE: "4" },
    { ACCT: "333333333", ACCT_TYPE: "5" }
]
for (var item of acctList) {
    if (item.ACCT_TYPE != "3" && item.ACCT_TYPE != "4") {
        list.push(item)
    }
}
console.log(list)
/*
[ { ACCT: '1111111111', ACCT_TYPE: '1' },
  { ACCT: '333333333', ACCT_TYPE: '5' } ]
*/
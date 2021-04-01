let array = [{ aaa: "A" }, { aaa: "B" }, { aaa: "C" }]
for (let item of array) {
    if (item.aaa == "1111") {
       console.log("ddd")
    } else if (item.aaa == "B44") {
        console.log("ddd")
    } else if (item.aaa == "3333") {
        console.log("ddd")
    }else{
        console.log("所有条件都不满足")
    }
}


// js sort()方法用于对数组的元素进行排序
//array.sort(sortfunction) 参数可选，必须是函数

var fruits = ["Banana", "Orange", "Apple", "Mango"]
fruits.sort() // Apple,Banana,Mango,Orange

var points = [40, 100, 1, 5, 25, 10]
points.sort() //1,10,100,25,40,5
// 升序
points.sort((a, b) => a - b); // 1,5,10,25,40,100
// 降序
points.sort((a, b) => b - a); // 100,40,25,10,5,1

//字符串数组排序 利率-金额-时间
var finlists = [
    { rate: "5.23%", MIN_NUM: "222", Date: "20210608" },
    { rate: "6.23%", MIN_NUM: "555", Date: "20210608" },
    { rate: "5.29%", MIN_NUM: "333", Date: "20210608" }
]
finlists.sort((a, b) => a.MIN_NUM - b.MIN_NUM)
// JSON.stringify(finlists)  
[
    { rate: "5.23%", MIN_NUM: "222", Date: "20210608" },
    { rate: "5.29%", MIN_NUM: "333", Date: "20210608" },
    { rate: "6.23%", MIN_NUM: "555", Date: "20210608" }  
]
//*率格式化-排序-%替换空格
format(s){
	return s.replace(/%/g,"");
}
finlists.sort((a, b) => this.format(a.rate) - this.format(b.rate))
//成功

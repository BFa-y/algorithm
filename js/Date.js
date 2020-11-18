// 获取当日时间-8位-传递8位字符串
var date = new Date();
// //获取完整的年份(4位)
var dateStart = date.getFullYear()
// console.log(dateStart)   // number-2020

// 设置一个月的某一天
// date.setDate(1);
// console.log(date.getDate())      //number-1
// console.log("0" + date.getDate())  //string-01

var dateStart = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
// console.log(dateStart)
// 隐式转换
var aa = "" + (date.getMonth() - 2)
var bb = "5"
// console.log(aa.length)

// 获取当前日期
// var dateStart = date.getFullYear() + '-' + (date.getMonth() - 3) + '-' + date.getDate()
var year = "" + date.getFullYear()
var month = "" + (date.getMonth() -3)
var todays = "" + (date.getDate() -11)
if (month.length == 1) {
    month = "0" + month
}
if (todays.length == 1) {
    todays = "0" + todays
}
var dateStart = year + month + todays
console.log(typeof(todays))
console.log(month)
console.log(todays)
console.log(dateStart)


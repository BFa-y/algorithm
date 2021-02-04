//等额本金计算
// 月利率 = 年利率/12
// 每月还款金额 = 贷款本金/还款期数+(贷款本金-累计已还本金)*月利率
benjin: function (type, num, year, lilv) {
    var month = parseInt(year) * 12,
        monthlilv = parseFloat(lilv) / 12,
        dknum = parseFloat(num) * 10000,
        yhbenjin = 0; //首月还款已还本金金额是0
    //每月应还本金=贷款本金÷还款月数
    var everymonthyh = dknum / month
    //每月月供额=(贷款本金÷还款月数)+(贷款本金-已归还本金累计额)×月利率
    var yuegong = everymonthyh + (dknum - yhbenjin) * monthlilv;
    //每月月供递减额=每月应还本金×月利率=贷款本金÷还款月数×月利率
    var yuegongdijian = everymonthyh * monthlilv;
    //总利息=〔(总贷款额÷还款月数+总贷款额×月利率)+总贷款额÷还款月数×(1+月利率)〕÷2×还款月数-总贷款额
    var totalLixi = ((everymonthyh + dknum * monthlilv) + dknum / month * (1 + monthlilv)) / 2 * month - dknum;
    //还款总额 总利息+贷款本金
    var totalPrice = totalLixi + dknum,
        leftFund = totalLixi + dknum;

    //循环月份
    var monthdataArray = [],
        nowmonth = new Date().getMonth(),
        realmonth = 0;

    for (var i = 1; i <= month; i++) {
        realmonth = nowmonth + i;
        var yearlist = Math.floor(i / 12);

        realmonth = realmonth - 12 * yearlist;

        if (realmonth > 12) {
            realmonth = realmonth - 12
        }
        yhbenjin = everymonthyh * (i - 1);
        var yuebenjin = everymonthyh + (dknum - yhbenjin) * monthlilv;
        //每月应还利息=剩余本金×月利率=(贷款本金-已归还本金累计额)×月利率
        var yuelixi = (dknum - yhbenjin) * monthlilv;
        leftFund = leftFund - yuebenjin;
        if (leftFund < 0) {
            leftFund = 0
        }
        monthdataArray[i - 1] = {
            monthName: realmonth + "月",
            yuelixi: yuelixi,
            //每月本金
            yuebenjin: everymonthyh,
            //剩余还款
            leftFund: leftFund
        }
    }
    return {
        yuegong: yuegong,
        totalLixi: totalLixi,
        totalPrice: totalPrice,
        yuegongdijian: yuegongdijian,
        monthdataArray: monthdataArray,
        totalDknum: num,
        year: year
    }

}
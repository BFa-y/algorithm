<!-- 日期格式化API -->
显示日期:{{ $Fw.util.Format.fmtDateHG("20210330") }}
<!-- 时间进度条 -->
<div class="time-sec-all">
  <x-view class="time-date">
    <!-- 时间A -->
    <div class>{{ $Fw.util.Format.fmtDateHG(product.COL_BEGIN_DATE) }}</div>
    <!-- 时间B -->
    <div class="date-mar-dis">
      {{ $Fw.util.Format.fmtDateHG(product.COL_END_DATE) }}
    </div>
    <!-- 时间C -->
    <div class>{{ $Fw.util.Format.fmtDateHG(product.PROD_END_DATE) }}</div>
  </x-view>
  <x-view class="time-sectionb">
    <div class="time-p-ress1"></div>
    <div class="time-p-line">
      <div class="time-p-line-yellow1"></div>
    </div>
    <div class="time-p-ress2"></div>
    <div class="time-p-lines">
      <div class="time-p-line-yellow2"></div>
    </div>
    <div class="time-p-ress3"></div>
  </x-view>
  <x-view class="time-text">
    <div class>时间A</div>
    <div class="text-mar-dis">时间B</div>
    <div class>时间C</div>
  </x-view>
</div>
<div style="height: 100px"></div>
  <x-view class="button-sp-area">
    <x-button type="primary" @click.native="AAAA">下一步</x-button>
  </x-view>
</x-view>
AAAA(){
    // 获取当前时间
    let myDate = new Date();
    let y = myDate.getFullYear();
    let m = myDate.getMonth() + 1;
    m = m < 10 ? "0" + m : m
    let d = myDate.getDate();
    d = d < 10 ? "0" + d : d
    this.currentTime = "" + y + "-" + m + "-" + d;
    console.log("当前日期：", this.currentTime)
    // 时间戳做长度
    let nowTime = new Date().getTime();
    // 时间A
    let QG = this.product.COL_BEGIN_DATE;
    // 时间B
    let JZ = this.product.COL_END_DATE;
    // 时间C
    let DQ = this.product.PROD_END_DATE;
    QG = new Date(QG).getTime(QG)
    JZ = new Date(JZ).getTime(JZ)
    DQ = new Date(DQ).getTime(DQ)
    console.log("当前时间:", nowTime, "A:", QG, "B:", JZ, "C:", DQ)
    /**
     * 当前时间小于时间A
     */
    if (nowTime < QG) {
      let a_b = $Fw.getEl(".time-p-line-yellow1")
      let b_c = $FW.getEl(".time-p-line-yellow2")
      a_b.style.width = 0
      b_c.style.width = 0
    }
    /**
     * 当前时间大于等于时间A小于等于时间B
     */
    else if ((nowTime >= QG) && (nowTime < JZ)) {
      console.log("打印信息1")
      let b_a = $Fw.getEl(".time-p-ress1")
      console.log("打印信息2")
      b_a.style.background = "#EAC58D"
      console.log("打印信息3")
      let aLength = parseInt((nowTime - QG) / 100000) / parseInt((JZ - QG) / 100000) * 100 + "%"
      let b_aLength = $Fw.getEl(".time-p-line-yellow1")
      b_aLength.style.width = aLength;
      console.log("打印：", aLength, b_a.style.backgroundColor)
    }
    /**
     * 当前时间大于等于时间B小于时间C
     */
    else if ((nowTime >= JZ) && (nowTime < DQ)) {
      let b_c1 = $Fw.getEl(".time-p-ress1")
      let b_c2 = $Fw.getEl(".time-p-ress2")
      b_c1.style.background = "#EAC58D"
      b_c2.style.background = "#EAC58D"
      let bLength1 = 100 + "%"
      let b_cLength1 = $Fw.getEl(".time-p-line-yellow1")
      b_cLength1.style.width = bLength1
      let bLength2 = parseInt((nowTime - JZ) / 100000) / parseInt((DQ - JZ) / 100000) * 100 + "%"
      let b_cLength2 = $Fw.getEl(".time-p-line-yellow2")
      b_cLength2.style.width = bLength2;
    }
    else {
      let c_1 = $Fw.getEl(".time-p-ress1")
      let c_2 = $Fw.getEl(".time-p-ress2")
      let c_3 = $Fw.getEl(".time-p-ress3")
      c_1.style.background = "#EAC58D"
      c_2.style.background = "#EAC58D"
      c_3.style.background = "#EAC58D"
      let c_Length1 = $Fw.getEl(".time-p-line-yellow1")
      c_Length1.style.width = 100 + "%"
      let c_Length2 = $Fw.getEl(".time-p-line-yellow2")
      c_Length2.style.width = 100 + "%"
    }
  
 },
 /**
 代码执行报错问题
  */
 Cannot read property 'style' of null at error
 先执行的script，html还没渲染，导致style为空，手动触发先执行html
<template>
  <div>
    <div>
      <input
        type="radio"
        :value="item.AnswerA"
        :name="item.number"
        @change="getValue(index)"
        v-model="radioList[index]"
        :id="`item0${index}`"
      />
      <label :for="`item0${index}`"></label>
      {{ item.AnswerNewA }}
    </div>
    <div>
      <input
        type="radio"
        :value="item.AnswerA"
        :name="item.number"
        @change="getValue(index)"
        v-model="radioList[index]"
        :id="`item0${index}`"
      />
      <label :for="`item0${index}`"></label>
      {{ item.AnswerNewA }}
    </div>
    <div>
      <input
        type="radio"
        :value="item.AnswerA"
        :name="item.number"
        @change="getValue(index)"
        v-model="radioList[index]"
        :id="`item0${index}`"
      />
      <label :for="`item0${index}`"></label>
      {{ item.AnswerNewA }}
    </div>
  </div>
</template>



//单选按钮取值
getRvalue(){
    this.NewList[index] = this.radioList[index]
}
submitTo(){
  //去除数组中的empty
  var array = this.NewList.filter(currentVal=>currentVal)
}

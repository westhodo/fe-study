<template>
  <div class="container">
    <ul class="list">
      <li>
        <p class="col">예치금액</p>
        <div class="form">
          <input
            type="text"
            placeholder="0"
            v-model="writeData.payment"
            @input="commaFormat(writeData.payment)"
            maxlength="22"
          >
          <span class="unit">원</span>
        </div>
        <p class="info_txt">{{ moneyFormat(uncomma(writeData.payment)) }}</p>
      </li>
      <li>
        <p class="col">예치 기간</p>
        <select name="" id=""
          @change="periodOption"
          v-model="writeData.period"
        >
          <option
            v-for="(op, idx) in periodOptions"
            :key="idx"
            :value="op.value"
          >
             {{ op.option }}
          </option>
        </select>
        <div class="form" v-show="isSelf">
          <input
            type="text"
            placeholder="0"
            v-model="writeData.customPeriod"
          >
          <span class="unit">개월</span>
        </div>
      </li>
      <li>
        <p class="col">연 이자율</p>
        <div class="form">
          <input
            type="tel"
            placeholder="0"
            v-model="writeData.rate"
            @input="formatter1"
          >
          <span class="unit">%</span>
        </div>
      </li>
      <li>
        <p class="col">금리 방식</p>
        <select name="" id="" v-model="writeData.rateOption">
          <option value="simple">단리</option>
          <!-- <option value="compound">월 복리</option> -->
        </select>
      </li>
      <li>
        <div class="btn_box">
          <button @click.stop="reset">초기화</button>
          <button @click.stop="calcResult">계산</button>
        </div>
      </li>
    </ul>
    <div class="result">
      <h3 class="title">계산결과</h3>
      <p>
        매월 <strong>{{ rPayment }}원</strong>씩 <strong>{{ rPeriod }}개월</strong> 동안 <br>
        연 이율 <strong>{{ rRate }}%</strong><strong>({{ rRateOption }})</strong> <b></b> 로 <br>
        세전이자 <strong>{{ rInterest }}원</strong> <br>
        이자과세(15.4%) <strong>{{ rAfterTax }} 원</strong> <br>
        원금합계 <strong>{{ rTotal }}원</strong> <br>
        <mark>세후 수령액 <strong>{{ rAfterTotal }} 원</strong></mark>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: "calc-deposit",
  setup () {
    let isSelf = ref(false)                    // 적립기간 직접 입력

    const periodOptions = reactive([
      { option: '선택', value: null },
      { option: '6개월', value: 6 },
      { option: '12개월', value: 12 },
      { option: '24개월', value: 24 },
      { option: '36개월', value: 36 },
      { option: '60개월', value: 60 },
      { option: '직접 입력', value: 'self' },
    ])

    let writeData = reactive({
      payment: '100,000',
      period: 12,
      rate: '4.3',
      rateOption: 'simple',
      customPeriod: null
    })

    let rPayment = ref('0')                   // 월 납입금액
    let rPeriod = ref('0')                    // 적립기간
    let rRateOption = ref('단리')             // 금리방식
    let rRate = ref('0')                      // 연 이자율
    let rInterest = ref('0')                  // 이자 금액
    let rTotal = ref('0')                     // 총 금액
    let rAfterTax = ref('0')                  // 이자 과세 15.4%
    let rAfterTotal = ref('0')                // 세후 수령액

    const reset = (() => {
      writeData.payment = ''
      writeData.period = null
      writeData.rateOption = 'simple'
      writeData.rate = ''

      isSelf.value = false

      rPayment.value = '0'
      rPeriod.value = '0'
      rRateOption.value = '단리'
      rRate.value = '0'
      rInterest.value = '0'
      rTotal.value = '0'
      rAfterTax.value = '0'
      rAfterTotal.value = '0'
    })

    const commaFormat = ((value) => {
      value = comma(uncomma(value));
      writeData.payment = value
    })

    const comma = ((val) => {
      val = String(val);
      return val.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    })

    const uncomma = ((val) => {
      val = String(val);
      return val.replace(/[^\d]+/g, '');
    })

    const formatter = ((e) => {
      const regExp = /^([1-9]{1}\d{0,1}|0{1})(\.{1}\d{0,2})?$/g
      if (!regExp.test(e.target.value)) {
        e.target.value = e.target.value.substr(0, e.target.value.length - 1);
      }
    })

    const taxCalc = ((total, totalTax) => {
      return comma((total + totalTax).toFixed(0))
    })

    const checkedCols = (() => {
      let result = true
      result = result && writeData?.payment !== ''
      result = result && writeData?.period !== null
      result = result && writeData?.rate !== ''

      return result
    })

    const calculation = ((payment, period, rate) => {
      const transType = (JSON.stringify(payment))

      const transRate = rate * 0.01
      const transPay = Number(JSON.parse(transType).replaceAll(',', ''))

      let beforeTax = null

      beforeTax = transPay * parseInt(period) * (parseInt(period) + 1) / 2 * transRate / 12
      rRateOption.value = '단리'

      let afterTax = beforeTax * 0.154

      rAfterTax.value = '-' + comma(afterTax.toFixed(0))
      rInterest.value = comma(beforeTax.toFixed(0))
      rTotal.value = comma(transPay * parseInt(period))
      rAfterTotal.value = taxCalc(transPay * parseInt(period), beforeTax - afterTax)
    })

    const calcResult = (() => {
      if(!checkedCols()) return alert('Empty')

      let { payment, period, rate, customPeriod } = writeData

      calculation(payment, (typeof period === 'string' ? customPeriod : period), rate)

      rPayment.value = payment
      rPeriod.value = (typeof period === 'string' ? customPeriod : period)
      rRate.value = rate
    })

    const periodOption = ((e) => {
      if (e.target.value === 'self') {
        isSelf.value = true
      } else {
        isSelf.value = false
        writeData.customPeriod = ''
      }
    })

    const moneyFormat = (value) => {
        const numbers = [
            numbering(value % 100000000000000000000, 10000000000000000),
            numbering(value % 10000000000000000, 1000000000000),
            numbering(value % 1000000000000, 100000000),
            numbering(value % 100000000, 10000),
            value % 10000
        ]

        return setUnitText(numbers).filter(number => number).join(' ');
    }

    const setUnitText = (numbers) => {
        const unit = ['원', '만', '억', '조', '경'];
        return numbers.map((number, index) => number ? (number) + unit[(unit.length - 1) - index] : number)
    }

    const numbering = (value, division) => {
        const result = Math.floor(value / division);
        return result === 0 ? null : (result % division);
    }

    return {
      periodOptions,
      periodOption,
      writeData,
      isSelf,
      reset,
      calculation,
      calcResult,
      taxCalc,
      checkedCols,
      commaFormat,
      formatter,
      moneyFormat,
      uncomma,

      rPayment,
      rPeriod,
      rRateOption,
      rRate,
      rInterest,
      rTotal,
      rAfterTax,
      rAfterTotal,
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 2em;
  .title {
    margin-bottom: 20px;
  }
  .list {
    flex: 0 1 500px;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 0px 10px rgba($color: #d9d9d9, $alpha: .5);
    padding: 3em;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    li {
      flex: 1;
      font-size: 14px;
      .form {
        margin-top: 10px;
        position: relative;
        .unit {
          font-size: 12px;
          position: absolute;
          right: 10px;
          top: calc(50% - 8px);
          transform: translateY(calc(50% - 8px));
        }
      }
      .col {
        font-weight: 700;
      }
      input, select {
        width: 100%;
        outline: none 0;
        border: 0;
        border-bottom: 1px solid #d9d9d9;
        text-align: right;
        padding: 8px 20px;
      }
      input {
        padding: 8px 40px 8px 10px;
      }
      .info_txt {
        color: #999;
        text-align: right;
        font-size: 12px;
        line-height: 2;
      }
      .btn_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        button {
          cursor: pointer;
          min-height: 40px;
          flex: 1;
          border: 1px solid #d9d9d9;
          color: #333;
          border-radius: 4px;
          &:nth-of-type(2) {
            background-color: #333;
            color: #fff;
            border: 0;
          }
        }
      }
    }
  }
  .result {
    flex: 1;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 0px 10px rgba($color: #d9d9d9, $alpha: .5);
    padding: 3em;
    border-radius: 10px;
    p {
      font-size: 14px;
      strong {
        font-weight: 700;
        font-size: 18px;
      }
    }
  }
}

@media all and (max-width: 768px) {
  .container {
    flex-wrap: wrap;
    padding: 1em;
    .list {
      padding: 1.5em;
    }
    .result {
      padding: 1.5em;
      font-size: 14px;
    }
  }
}


</style>
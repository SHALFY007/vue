<template>
  <div id="app">
    <input type="text" class="operand1" v-model.number="operand1">
    <span class="operator"> {{ operator }} </span>
    <input type="text" class="operand2" v-model.number="operand2">
    <span> = </span>
    <span class="res">{{ result }}</span>
    <br>
    <button class="operator-button" v-for="item in operators" v-on:click="operator = item">{{item}}</button>
    <br>
    <input type="checkbox" name="off" id="off" v-model="checkbox">
    <label for="off">Отобразить экранную клавиатуру</label>
    <div class="screenKeyboard" v-show="checkbox">
      <button id="operand-button-op1" class="operator-button" v-for="item in numbers"
        v-if="picked == 'operand1' || picked == ''" @click="operand1 = operand1+item">{{item}}</button>
      <button class="operator-button" v-for="item in numbers" v-if="picked == 'operand2'"
        @click="operand2 = operand2+item">{{item}}</button>
      <button class="operator-button" v-if="picked == 'operand1' || picked == ''" @click="operand1 = ''">clear</button>
      <button class="operator-button" v-if="picked == 'operand2'" @click="operand2 = ''">clear</button>
      <form action="#">
        <input type="radio" id="one" name="oper" value="operand1" v-model="picked">
        <label for="one">Операнд 1</label>
        <input type="radio" id="two" name="oper" value="operand2" v-model="picked">
        <label for="two">Операнд 2</label>
      </form>

    </div>
    <!--<button class=" operator-button" v-on:click="operator = '+'">+</button>
    <button class="operator-button" v-on:click="operator = '-'">-</button>
    <button class="operator-button" v-on:click="operator = '*'">*</button>
    <button class="operator-button" v-on:click="operator = '/'">/</button>
    <button class="operator-button" v-on:click="operator = '**'">**</button>
    <button class="operator-button" v-on:click="operator = '%'">%</button>
    <button class="operator-button" v-on:click="calculate">=</button>-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      operand1: '',
      operand2: '',
      operators: ['+', '-', '/', '*', '**', '%'],
      operator: '+',
      checkbox: false,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      picked: '',
    }
  },
  computed: {
    result() {
      switch (this.operator) {
        case '+':
          return Number(this.operand1) + Number(this.operand2);
          break;
        case '-':
          return Number(this.operand1) - Number(this.operand2);
          break;
        case '*':
          return Number(this.operand1) * Number(this.operand2);
          break;
        case '/':
          return Number(this.operand1) / Number(this.operand2);
          break;
        case '**':
          return Number(this.operand1) ** Number(this.operand2);
          break;
        case '%':
          return Math.floor(Number(this.operand1) / Number(this.operand2));
          break;
        default:
          return Number(this.operand1) + Number(this.operand2);
          break;
      }
    }
  },
  methods: {

  }
}

</script>

<style lang="less">
#app {}
</style>

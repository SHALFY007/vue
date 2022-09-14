<template>
  <div id="app">
    <input type="text" class="operand1" v-model="operand1">
    <span class="operator"> {{ operator }} </span>
    <input type="text" class="operand2" v-model="operand2">
    <span> = </span>
    <span class="res">{{ res }}</span>
    <br>
    <button class="operator-button" v-on:click="operator = '+'">+</button>
    <button class="operator-button" v-on:click="operator = '-'">-</button>
    <button class="operator-button" v-on:click="operator = '*'">*</button>
    <button class="operator-button" v-on:click="operator = '/'">/</button>
    <button class="operator-button" v-on:click="operator = '**'">**</button>
    <button class="operator-button" v-on:click="operator = '%'">%</button>
    <button class="operator-button" v-on:click="calculate">=</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      operand1: '',
      operand2: '',
      operator: '+',
      res: ''
    }
  },
  methods: {
    calculate() {
      switch (this.operator) {
        case '+':
          this.res = Number(this.operand1) + Number(this.operand2);
          break;
        case '-':
          this.res = Number(this.operand1) - Number(this.operand2);
          break;
        case '*':
          this.res = Number(this.operand1) * Number(this.operand2);
          break;
        case '/':
          this.res = Number(this.operand1) / Number(this.operand2);
          break;
        case '**':
          this.res = Number(this.operand1) ** Number(this.operand2);
          break;
        case '%':
          this.res = Math.floor(Number(this.operand1) / Number(this.operand2));
          break;
        default:
          this.res = Number(this.operand1) + Number(this.operand2);
          break;
      }
    }
  }
}
</script>

<style lang="less">
#app {}
</style>

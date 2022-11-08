<template> 
    <div class="calculator">
      <div class="display">
        <div class="display__input">
          <span class="display__input--value">{{ displayValue }}</span>
        </div>
      </div>
      <div class="buttons">
        <div class="buttons__row">
          <button class="buttons__button" @click="clear">C</button>
          <button class="buttons__button" @click="toggleSign">+/-</button>
          <button class="buttons__button" @click="percent">%</button>
          <button class="buttons__button buttons__button--orange" @click="addOperator('/')">/</button>
        </div>
        <div class="buttons__row">
          <button class="buttons__button" @click="addNumber(7)">7</button>
          <button class="buttons__button" @click="addNumber(8)">8</button>
          <button class="buttons__button" @click="addNumber(9)">9</button>
          <button class="buttons__button buttons__button--orange" @click="addOperator('*')">*</button>
        </div>
        <div class="buttons__row">
          <button class="buttons__button" @click="addNumber(4)">4</button>
          <button class="buttons__button" @click="addNumber(5)">5</button>
          <button class="buttons__button" @click="addNumber(6)">6</button>
          <button class="buttons__button buttons__button--orange" @click="addOperator('-')">-</button>
        </div>
        <div class="buttons__row">
          <button class="buttons__button" @click="addNumber(1)">1</button>
          <button class="buttons__button" @click="addNumber(2)">2</button>
          <button class="buttons__button" @click="addNumber(3)">3</button>
          <button class="buttons__button buttons__button--orange" @click="addOperator('+')">+</button>
        </div>
        <div class="buttons__row">
          <button class="buttons__button buttons__button--zero" @click="addNumber(0)">0</button>
          <button class="buttons__button" @click="addDecimal()">.</button>
          <button class="buttons__button buttons__button--orange" @click="calculate()">=</button>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
  data() {
    return {
      displayValue: "0",
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    };
  },
  methods: {
    clear() {
      this.displayValue = "0";
      this.firstOperand = null;
      this.waitingForSecondOperand = false;
      this.operator = null;
    },
    toggleSign() {
      if (this.displayValue === "0") {
        return;
      }
      const newValue = parseFloat(this.displayValue) * -1;
      this.displayValue = String(newValue);
    },
    percent() {
      if (this.displayValue === "0") {
        return;
      }
      const newValue = parseFloat(this.displayValue) / 100;
      this.displayValue = String(newValue);
    },
    addDecimal() {
      if (this.waitingForSecondOperand === true) {
        this.displayValue = "0.";
        this.waitingForSecondOperand = false;
        return;
      }
      if (!this.displayValue.includes(".")) {
        this.displayValue += ".";
      }
    },
    addNumber(number) {
      if (this.waitingForSecondOperand === true) {
        this.displayValue = String(number);
        this.waitingForSecondOperand = false;
      } else {
        this.displayValue =
          this.displayValue === "0" ? String(number) : this.displayValue + number;
      }
    },
    addOperator(nextOperator) {
      const inputValue = parseFloat(this.displayValue);
      if (this.operator && this.waitingForSecondOperand) {
        this.operator = nextOperator;
        return;
      }
      if (this.firstOperand == null) {
        this.firstOperand = inputValue;
      } else if (this.operator) {
        const currentValue = this.firstOperand || 0;
        const result = this.performCalculation[this.operator](currentValue, inputValue);
        this.displayValue = String(result);
        this.firstOperand = result;
      }
      this.waitingForSecondOperand = true;
      this.operator = nextOperator;
    },
    calculate() {
      let result = 0;
      const secondOperand = parseFloat(this.displayValue);
      if (this.operator === null || this.waitingForSecondOperand) {
        return;
      }
      if (this.operator === "+") {
        result = this.firstOperand + secondOperand;
      } else
      if (this.operator === "-") {
        result = this.firstOperand - secondOperand;
      } else
      if (this.operator === "*") {
        result = this.firstOperand * secondOperand;
      } else
      if (this.operator === "/") {
        result = this.firstOperand / secondOperand;
      }
      this.displayValue = String(result);
      this.firstOperand = result;
    },
    performCalculation: {
      "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
      "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
      "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
      "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
      "=": (firstOperand, secondOperand) => secondOperand,
    },
  },
};
</script>

<style scoped>
  .calculator {
    width: 30%;
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .display {
    background-color: #222;
    border-radius: 10px;
    padding: 10px;
    text-align: right;
  }
  .display__input {
    font-size: 2rem;
    color: #fff;
  }
  .display__input--value {
    font-size: 2rem;
    color: #fff;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .buttons__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .buttons__button {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: #444;
    color: #fff;
    font-size: 1.5rem;
    border: none;
    outline: none;
  }
  .buttons__button--orange {
    background-color: #f7931e;
  }
  .buttons__button--zero {
    width: 130px;
  }
  
</style>
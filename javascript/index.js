function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: 0 Division";
  } else {
    return num1 / num2;
  }
}

function operate(operand, values) {
  const num1 = values[0];
  const num2 = values[1];
  return operand(num1, num2);
}
function addTest() {
  const test1 =
    add(1, 2) === 3
      ? `2 Positive integer test PASSED`
      : `2 Positive integer test FAILED`;
  const test2 =
    add(-1, -1) === -2
      ? `2 Negative integer test PASSED`
      : `2 Negative integer test FAILED`;
  const test3 =
    add(-1, 3) === 2
      ? `1 Negative & 1 Positive integer test PASSED`
      : `1 Negative & 1 Positive integer test FAILED`;
  const test4 =
    add(1.5, 0.5) === 2
      ? `2 Posiitive double test PASSED`
      : `2 Positive double test FAILED`;
  const test5 =
    add(-0.5, -1.5) === -2
      ? `2 Negative double test PASSED`
      : `2 Negative double test FAILED`;
  const test6 =
    add(-0.5, 1) === 0.5
      ? `1 Positive double & 1 Negative double test PASSED`
      : `1 Positive double & 1 Negative double test FAILED`;
  const result = [
    ["test1", test1],
    ["test2", test2],
    ["test3", test3],
    ["test4", test4],
    ["test5", test5],
    ["test6", test6],
  ];
  console.table(result);
}
function subtractTest() {
  const test1 =
    subtract(2, 1) === 1
      ? `2 Positive integer test PASSED`
      : `2 Positive integer test FAILED`;
  const test2 =
    subtract(-1, -1) === -0
      ? `2 Negative integer test PASSED`
      : `2 Negative integer test FAILED`;
  const test3 =
    subtract(-1, 3) === -4
      ? `1 Negative & 1 Positive integer test PASSED`
      : `1 Negative & 1 Positive integer test FAILED`;
  const test4 =
    subtract(1.5, 0.5) === 1
      ? `2 Posiitive double test PASSED`
      : `2 Positive double test FAILED`;
  const test5 =
    subtract(-0.5, -1.5) === 1
      ? `2 Negative double test PASSED`
      : `2 Negative double test FAILED`;
  const test6 =
    subtract(-0.5, 1) === -1.5
      ? `1 Positive double & 1 Negative double test PASSED`
      : `1 Positive double & 1 Negative double test FAILED`;
  const result = [
    ["test1", test1],
    ["test2", test2],
    ["test3", test3],
    ["test4", test4],
    ["test5", test5],
    ["test6", test6],
  ];
  console.table(result);
}
function multiplyTest() {
  const test1 =
    multiply(2, 1) === 2
      ? `2 Positive integer test PASSED`
      : `2 Positive integer test FAILED`;
  const test2 =
    multiply(-1, -1) === 1
      ? `2 Negative integer test PASSED`
      : `2 Negative integer test FAILED`;
  const test3 =
    multiply(-1, 3) === -3
      ? `1 Negative & 1 Positive integer test PASSED`
      : `1 Negative & 1 Positive integer test FAILED`;
  const test4 =
    multiply(0.25, 4.0) === 1
      ? `2 Posiitive double test PASSED`
      : `2 Positive double test FAILED`;
  const test5 =
    multiply(-1.5, -2) === 3
      ? `2 Negative double test PASSED`
      : `2 Negative double test FAILED`;
  const test6 =
    multiply(-0.5, 1) === -0.5
      ? `1 Positive double & 1 Negative double test PASSED`
      : `1 Positive double & 1 Negative double test FAILED`;
  const result = [
    ["test1", test1],
    ["test2", test2],
    ["test3", test3],
    ["test4", test4],
    ["test5", test5],
    ["test6", test6],
  ];
  console.table(result);
}
function divideTest() {
  const test1 =
    divide(4, 2) === 2
      ? `2 Positive integer test PASSED`
      : `2 Positive integer test FAILED`;
  const test2 =
    divide(-6, -2) === 3
      ? `2 Negative integer test PASSED`
      : `2 Negative integer test FAILED`;
  const test3 =
    divide(0, 1) === 0
      ? `Divide 0 by a value test PASSED`
      : `Divide 0 by a value test FAILED`;
  const test4 =
    divide(1, 0) === "Error: 0 Division"
      ? `0 as divisor test PASSED`
      : `0 as divisor test FAILED`;
  const test5 =
    divide(1.5, 2) === 0.75
      ? "1 Integer & 1 Double test PASSED"
      : `1 Integer & 1 double test FAILED`;
  const result = [
    ["Test1", test1],
    ["Test2", test2],
    ["Test3", test3],
    ["Test4", test4],
    ["Test5", test5],
  ];
  console.table(result);
}
function operateTest() {
  const test1 =
    operate(add, [1, 2]) === 3
      ? `Addition Test PASSED`
      : `Addition Test FAILED`;
  const test2 =
    operate(subtract, [2, 1]) === 1
      ? `Subtraction Test PASSED`
      : `Subtraction Test FAILED`;
  const test3 =
    operate(multiply, [3, 2]) === 6
      ? `Multiply Test PASSED`
      : `Multiply Test FAILED`;
  const test4 =
    operate(divide, [3.0, 2]) === 1.5
      ? `Divide Test PASSED`
      : `Divide Test FAILED`;
  const result = [
    ["test1", test1],
    ["test2", test2],
    ["test3", test3],
    ["test4", test4],
  ];
  console.table(result);
}

const DIGITS_STRING = "0123456789";
const OPERANDS_STRING = "x+-/";
let userInput = "";
const CALC_DISPLAY = document.querySelector(`.calc-display`);
const DIGIT_BUTTONS = document.querySelectorAll(`.digit`);
const PARENTHESES_BUTTON = document.querySelector(`#parentheses-btn`);
const DIVISION_BUTTON = document.querySelector(`#divide-btn`);
const PERCENT_BUTTON = document.querySelector(`#percent-btn`);
const MULTIPLY_BUTTON = document.querySelector(`#multiply-btn`);
const SUBTRACTION_BUTTON = document.querySelector(`#subtract-btn`);
const ADDITION_BUTTON = document.querySelector(`#addition-btn`);
const CLEAR_BUTTON = document.querySelector(`#clear-btn`);
const EQUALS_BUTTON = document.querySelector(`#equals-btn`);

function isDigit(stringValue){
  const DIGITS_STRING = "0123456789";
  console.log(`current string ${stringValue} ${DIGITS_STRING.includes(stringValue)}`)
  return DIGITS_STRING.includes(stringValue);
}

function digitOnClickHandler(e) {
  const digitValue = e.target.value;
  userInput = `${userInput}${digitValue}`;
  CALC_DISPLAY.textContent = userInput;
}

function basicOperandClickHandler(e) {
  const BTN_VALUE = e.target.value;
  const USERINPUT_LAST_INDEX = userInput.length-1;
  const USERINPUT_LAST_CHAR = userInput.charAt(USERINPUT_LAST_INDEX);
  if (
    isDigit(USERINPUT_LAST_CHAR) &&
    userInput.length !== 0
  ) {
    userInput = `${userInput}${BTN_VALUE}`;
  } else if (
    OPERANDS_STRING.includes(USERINPUT_LAST_CHAR) &&
    userInput.length !== 0
  ) {
    userInput = `${userInput.slice(0, USERINPUT_LAST_INDEX)}${BTN_VALUE}`;
  }
  CALC_DISPLAY.textContent = userInput;
}

function subtractionClickHandler(e) {
  const BUTTON_VALUE = e.target.value;
  if (userInput.charAt(userInput.length - 1) === BUTTON_VALUE) {
    return;
  } else {
    userInput = `${userInput}${BUTTON_VALUE}`;
  }
  CALC_DISPLAY.textContent = userInput;
}

function findValuesForOperandPositions(targetOperand,expression){
  const expressionLastIndex = expression.length-1;
  const OPERAND_INDEX = expression.indexOf(targetOperand);

  //Search left-side of operand until you reach either an operand(excluding - ) or beginning of expression
  let left_pointer_index = OPERAND_INDEX - 1;
  leftSearcher:for(let i=left_pointer_index;i>0;i--){
    let currentStringValue = expression[i];
    if(isDigit(currentStringValue)){
      console.log('')
    }else if(currentStringValue === "-"){
      console.log('exiting cuz of minus')
      left_pointer_index = i;
      break leftSearcher;
    }else{
      console.log('exiting cuz of not digit or -')
      left_pointer_index = i++;
      break leftSearcher;
    }
  }
  //Search right-side of operand until you reach an operand or end of expression
  let right_pointer_index = OPERAND_INDEX + 1;
  rightSearcher:for(let i=right_pointer_index;i<expressionLastIndex;i++){
    let currentStringValue = expression[i];
    if(isDigit(currentStringValue)){
    }else{
      right_pointer_index = --i;
      break rightSearcher;
    }
  }

  const resultOfSearch = {
    "StartOfSubstring":left_pointer_index,
    "EndOfSubString":right_pointer_index,
    "Expression":expression,
  }
  return resultOfSearch;
}

let result =findValuesForOperandPositions('x',"1-12x33+1");
console.table(result);

function equalsButtonOnClickHandler(e){
  let expression = CALC_DISPLAY.textContent;
  if(expression.length===0){return}
  while(expression.includes('x')){

  }

}
DIGIT_BUTTONS.forEach((button) => {
  button.addEventListener("click", (e) => {
    digitOnClickHandler(e);
  });
});

ADDITION_BUTTON.addEventListener("click", (e) => {
  basicOperandClickHandler(e);
});

MULTIPLY_BUTTON.addEventListener("click", (e) => {
  basicOperandClickHandler(e);
});

DIVISION_BUTTON.addEventListener(`click`, (e) => {
  basicOperandClickHandler(e);
});

SUBTRACTION_BUTTON.addEventListener(`click`, (e) => {
  subtractionClickHandler(e);
});

CLEAR_BUTTON.addEventListener('click',(e)=>{
  userInput = "";
  CALC_DISPLAY.textContent = userInput;
});

EQUALS_BUTTON.addEventListener(`click`,(e)=>{
  equalsButtonOnClickHandler(e);
})


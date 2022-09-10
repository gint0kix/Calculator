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

function operate(operand, num1, num2) {
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
    operate(add, 1, 2) === 3
      ? `Addition Test PASSED`
      : `Addition Test FAILED`;
  const test2 =
    operate(subtract, 2, 1) === 1
      ? `Subtraction Test PASSED`
      : `Subtraction Test FAILED`;
  const test3 =
    operate(multiply, 3, 2) === 6
      ? `Multiply Test PASSED`
      : `Multiply Test FAILED`;
  const test4 =
    operate(divide, 3.0, 2) === 1.5
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

function areObjectsEqual(obj1,obj2){

  const OBJ1_KEYS = Object.keys(obj1);
  const OBJ2_KEYS = Object.keys(obj2);
  const OBJ1_VALUES = Object.values(obj1);
  const OBJ2_VALUES = Object.values(obj2);

  if(OBJ1_KEYS.length!==OBJ2_KEYS.length){return false;}
  if(OBJ1_VALUES.length!==OBJ2_VALUES.length){return false;}

  for(let i=0;i<OBJ1_KEYS.length;i++){
    if(OBJ1_KEYS[i]!==OBJ2_KEYS[i]){return false;}
  }

  for(let y=0;y<OBJ2_VALUES.length;y++){
    if(OBJ1_VALUES[y]!==OBJ2_VALUES[y]){return false}
  }
  return true
}

function areObjectsEqualTest(){
  const test1_Obj1 = {"prop1":12,"prop2":"123"};
  const test1_Obj2 = {"prop1":12,"prop2":"123"};
  const Test1 = areObjectsEqual(test1_Obj1,test1_Obj2) ? "Test1 PASSED, same object":"Test1 FAILED, same object";

  const test2_Obj1 ={"prop1":"123","prop2":2};
  const test2_Obj2 = {"prop":"123","prop2":2};
  const Test2 = areObjectsEqual(test2_Obj1,test2_Obj2)?"Test2 FAILED, differnt properties":"Test2 PASSED, different properties";

  const test3_Obj1 = {"prop1":"aa","prop2":3};
  const test3_Obj2 = {"prop1":"a","prop2":3};
  const Test3 = areObjectsEqual(test3_Obj1,test3_Obj2)?"Test3 FAILED, different values":"Test3 PASSED,different values";

  const result = [Test1,Test2,Test3];
  console.table(result);
}

/* Input = String targetOperand; String expression
*  
*  Finds the first substring in the given expression, that contains the specified operand
*  Returns the beginning index & ending index of the substring
*/
function findValuesForOperandPositions(targetOperand,expression){
  const expressionLastIndex = expression.length-1;
  const OPERAND_INDEX = expression.indexOf(targetOperand);

  //Search left-side of operand until you reach either an operand(excluding - ) or beginning of expression
  let left_pointer_index = OPERAND_INDEX - 1;
  leftSearcher:for(let i=left_pointer_index;i>=0;i--){
    let currentStringValue = expression[i];
    if(isDigit(currentStringValue)){
      left_pointer_index =i;
    }else if(currentStringValue === "-"){

      left_pointer_index = i;
      break leftSearcher;
    }else{
      left_pointer_index = i+1;
      break leftSearcher;
    }
  }

  //Search right-side of operand until you reach an operand or end of expression

  let right_pointer_index = OPERAND_INDEX + 1;
  rightSearcher:for(let i=right_pointer_index;i<=expressionLastIndex;i++){
    let currentStringValue = expression[i];
    if(isDigit(currentStringValue)){
      right_pointer_index = i;
    }else if(currentStringValue === "-"){
      right_pointer_index = i;
    }else{
      right_pointer_index = --i;
      break rightSearcher;
    }
  }

  const resultOfSearch = {
    "StartOfSubString":left_pointer_index,
    "EndOfSubString":right_pointer_index,
  }
  return resultOfSearch;
}

function findValuesForOperandPositionsTest(){
//Simple multiplication 
const actual_1 = findValuesForOperandPositions("x","33x21");
const expected_1 = {"StartOfSubString":0,"EndOfSubString":4};
const result1 = areObjectsEqual(actual_1,expected_1)?"PASSED, simple multiplcation":"FAILED, simple multiplcation ";

//Difficult multiplcation
const actual_2 = findValuesForOperandPositions("x","2+33x-41x5");
const expected_2 = {"StartOfSubString":2,"EndOfSubString":7};
const result2 = areObjectsEqual(actual_2,expected_2)?"PASSED, difficult multiplcation":"FAILED, difficult multiplcation";

//Really difficult multiplcation
const actual_3 = findValuesForOperandPositions("x","2-3x-4+1");
const expected_3 = {"StartOfSubString":1,"EndOfSubString":5};
const result3 = areObjectsEqual(actual_3,expected_3)?"PASSED, really difficult multiplcation":"FAILED, really difficult multiplcation";
const testResults = [result1,result2,result3];
console.table(testResults);
}

function parseExpression(targetOperand, expression){
  let operandIndex = expression.indexOf(targetOperand);
  let firstNum = Number(expression.substring(0,operandIndex));
  let secondNum = Number(expression.substring(operandIndex+1));
  let operand;
  switch(targetOperand){
    case("x"):
      operand = multiply;
      break;
    case("/"):
      operand = divide;
      break;
    case("+"):
      operand = add;
      break;
  }

  const result = {
    "num1":firstNum,
    "num2":secondNum,
    "operand":operand
  }
  return result;
}

function parseExpressionTest(){
  const actual_1 = parseExpression("x","33x4");
  const expected_1 = {"num1":33,"num2":4,"operand":multiply};
  const result1 = areObjectsEqual(actual_1,expected_1) ? "PASSED":"FAILED"

  const actual_2 = parseExpression("+","-30+-42");
  const expected_2 = {"num1":-30,"num2":-42,"operand":add};
  const result2 = areObjectsEqual(actual_2,expected_2)? "PASSED":"FAILED"

  const actual_3 = parseExpression("x","-1x42");
  const expected_3 = {"num1":-1,"num2":42,"operand":multiply}
  const result3 = areObjectsEqual(actual_3,expected_3)?"PASSED":"FAILED";

  const testResults = [[result1,actual_1],[result2,actual_2],[result3,actual_3]];
  console.table(testResults);
}
function equalsButtonOnClickHandler(e){
  let expression = CALC_DISPLAY.textContent;
  if(expression.length===0){return}
  //while(expression.includes('x')){
//
  //}

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


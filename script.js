document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    handleClickedButton(event.target.innerText);
    console.log(getAppend)
  });

let currentVal = 0;
let prevVal = 0;
let lastOperator = null;
let getAppend = true;
const resultLine = document.querySelector(".result");
const operator = document.querySelector(".operator");

function handleClickedButton(value) {
  if (isNaN(parseInt(value))) {
    performOperation(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  if (resultLine.innerText === "0") {
    resultLine.innerText = value;
  } else if(getAppend === true) {
    resultLine.innerText += value;
  } else {
    resultLine.innerText = value;
  }
  getAppend = true;
}

function performOperation(value) {
  switch (value) {
    case "C":
      resultLine.innerText = "0";
      lastOperator = null;
      operator.innerText = "";
      break;
    case "←":
      if (resultLine.innerText.length == 1) {
        resultLine.innerText = "0";
      } else {
        resultLine.innerText = resultLine.innerText.substr(
          0,
          resultLine.innerText.length - 1
        );
      }
      break;
    case "/":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "/";
      operator.innerText = "/";
      getAppend = false;
      break;
    case "+":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "+";
      operator.innerText = "+";
      getAppend = false;
      break;
    case "*":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "*";
      operator.innerText = "*";
      getAppend = false;
      break;
    case "-":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "-";
      operator.innerText = "-";
      getAppend = false;
      break;
    case "=":
      currentVal = parseInt(resultLine.innerText);
      doOperation();
      lastOperator = null;
      operator.innerText = "=";
      getAppend = true;
      break;
  }
}

function doOperation() {
  let answer;
  switch (lastOperator) {
    case "/":
      answer = prevVal / currentVal;
      break;
    case "+":
      answer = prevVal + currentVal;
      break;
    case "-":
      answer = prevVal - currentVal;
      break;
    case "*":
      answer = prevVal * currentVal;
      break;
  }
  if (lastOperator !== null && answer)
    if (Number.isInteger(answer)) resultLine.innerText = answer;
    else resultLine.innerText = answer.toFixed(5);
}

document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    handleClickedButton(event.target.innerText);
  });

let currentVal = 0;
let prevVal = 0;
let lastOperator = null;
const resultLine = document.querySelector(".result-line");

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
  } else if(lastOperator == null) {
    resultLine.innerText += value;
  } else {
    resultLine.innerText = value;
  }
}

function performOperation(value) {
  switch (value) {
    case "C":
      resultLine.innerText = "0";
      lastOperator = null;
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
      break;
    case "+":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "+";
      break;
    case "*":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "*";
      break;
    case "-":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "-";
      break;
    case "=":
      currentVal = parseInt(resultLine.innerText);
      doOperation();
      lastOperator = null;
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

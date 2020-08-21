const buttons = document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    handleClickedButton(event.target);
  });

let currentVal = 0;
let prevVal = 0;
let lastOperator;
const resultLine = document.querySelector(".result-line");

function handleClickedButton(button) {
    const originColor = button.style.backgroundColor;
    button.style.backgroundColor = "grey";
  if (button.innerText >= "0" && button.innerText <= "9") {
    appendToScreen(button.innerText);
  } else {
    performOperation(button.innerText);
  }
  setTimeout(function(){
    button.style.backgroundColor = originColor;
  },100);
  
}

function appendToScreen(value) {
  if (resultLine.innerText === "0") {
    resultLine.innerText = value;
  } else {
    resultLine.innerText += value;
  }
}

function performOperation(value) {
  switch (value) {
    case "C":
      resultLine.innerText = "0";
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
      resultLine.innerText = "0";
      break;
    case "+":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "+";
      resultLine.innerText = "0";
      break;
    case "*":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "*";
      resultLine.innerText = "0";
      break;
    case "-":
      prevVal = parseInt(resultLine.innerText);
      lastOperator = "-";
      resultLine.innerText = "0";
      break;
    case "=":
      currentVal = parseInt(resultLine.innerText);
      doOperation();
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
  resultLine.innerText = answer.toFixed(2);
}

// function calc(firstNum: number, operator: string, secondNum: number) {
//   switch (operator) {
//     case "+":
//       return (firstNum + secondNum).toFixed(2);
//     case "-":
//       return (firstNum - secondNum).toFixed(2);
//     case "/":
//       return (firstNum / secondNum).toFixed(2);
//     case "*":
//       return (firstNum * secondNum).toFixed(2);
//   }
// }

type CalcType = {
  [key: string]: string;
};

function calc(firstNum: number, operator: string, secondNum: number) {
  const calculator: CalcType = {
    "+": (firstNum + secondNum).toFixed(2),
    "-": (firstNum - secondNum).toFixed(2),
    "/": (firstNum / secondNum).toFixed(2),
    "*": (firstNum * secondNum).toFixed(2),
  };

  return calculator[operator];
}

console.log(calc(1, "+", 3));
console.log(calc(11, "-", 3));
console.log(calc(12, "/", 3));
console.log(calc(2, "*", 3));

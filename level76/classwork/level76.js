function evaluateExpressions(expressions) {
  return expressions.map(expr => {
    try {
      return eval(expr);
    } catch (error) {
      return `Error: ${error.message}`;
    }
  });
}









//Example Usage:
const operations = ["2 + 2", "10 / 2", "5 * 3", "8 - 1", "5 / 0", "abc + 1"];
const results = evaluateExpressions(operations);
console.log(results);








let userInput = prompt("შეიყვანე რიცხვი:");

let number = parseInt(userInput);

if (!isNaN(number)) {
  console.log("შეყვანილი რიცხვია:", number);
} else {
  console.log("გთხოვ შეიყვანო მხოლოდ რიცხვი!");
}

let day = parseInt(prompt("Enter a number (1-7):"));

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}







const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
};

// მაგალითი გამოყენების:
const result = calculator(10, 5, '*');
console.log("Result:", result);






function maxNumbers(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
    let max = -Infinity;

    for (let num of arguments) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}

// მაგალითი გამოძახებისა:
let ressult = maxNumbers(5, 12, 8, 29, 3, 45, 11, 7, 2, 18);
console.log("Max number is:", ressult);

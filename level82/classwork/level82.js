const nums = [3, 8, 11, 20, 7];

const atLeastOneEven = nums.some(num => num % 2 === 0);
console.log(atLeastOneEven);

const allEven = nums.every(num => num % 2 === 0);
console.log(allEven);










//const arr = [1, 2, 3, 4, 5];

//const result = arr.map((num, index) => `NUM: ${num}, INDEX: ${index}`);

//console.log(result);

const numbers = [3, 5, 10, 14, 25, 33, 40, 7, 50, 9];

const result = numbers.filter(num => num % 5 === 0);

console.log(result);